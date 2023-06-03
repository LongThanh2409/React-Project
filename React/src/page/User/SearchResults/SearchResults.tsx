import { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { getSearch } from "../../../api/Search/Search";
import List_Products from "../../../components/User/ListProducts/List_Products";
import Category from "../../../components/User/Categorys/Category";
import { Pagination, Select } from "antd";


const SearchResults = () => {
 
  

  const [searchResults, setSearchResults] = useState<Iproducts[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sort, setSort] = useState('')
  const [color, setColor] = useState('')
  const limits = 10;
  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (keyword ) {
          const { data } = await getSearch(keyword, page, limits, sort);
          setSearchResults(data.product.docs);
          setTotalPages(data.product.totalDocs);
          setPage(data.product.page);
          console.log(data);
          
        }
      } catch (error) {
      
      }
    };

    fetchSearchResults();
  }, [keyword, sort, page]);
  const handlePageChange = (page:any) => {
    const searchParams = new URLSearchParams(location.search);
    setPage(page);
    navigate({
     
      search: '?' + searchParams.toString(),
    });
    window.scrollTo(0, 0);
  };
  const handleSort =(value:any)=>{
    setSort(value.value)
    
    
      }
      const hanldRating = ()=>{
       
          setSort('rating')
          setColor('red')
          if(color=="red" || sort=='rating'){
          setColor('white')
          setSort('')
          }
      
      
      }
  return (
<>
     
    
       
         
<section className="bg-gray-100 ">
  <Category />
  <div className="sort w-full  bg-slate-200">
    <div className="grid grid-cols-1 gap-y-2 md:flex   md:gap-80 py-5 items-center">
      <div className="grid grid-cols-1 gap-y-2 md:flex  items-center  md:gap-3 pl-2 md:pl-10">
        <h1 className="text-xl">Sắp xếp theo</h1>
        <div className="price">
          <Select
            labelInValue
            defaultValue={{ value: '', label: 'Giá' }}
            className="w-48"
            onChange={handleSort}
            listHeight={1090}
            options={[
              {
                value: 'asc',
                label: 'Giá từ thấp đến cao',
              },
              {
                value: 'desc',
                label: 'Giá từ cao đến thấp',
              },
            ]}
          />
        </div>
        <div className="rating">
          <button
            onClick={hanldRating}
            className="rounded-md px-3 py-2 bg-white"
            style={{ backgroundColor: color }}
          >
            Rating
          </button>
        </div>
      </div>
      <div>
        {searchResults ? (
          <h1 className="text-center">
            Total <strong>{searchResults.length}</strong> Search results for{' '}
            <strong className="italic text-teal-600">"{keyword}"</strong>
          </h1>
        ) : (
          <h1 className="text-center">
            Total <strong>{0}</strong> Search results for{' '}
            <strong className="italic text-teal-600">"{keyword}"</strong>
          </h1>
        )}
      </div>
    </div>
  </div>
  <div className="grid max-w-full grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {searchResults?.map((item, index) => (
      <List_Products key={index} item={item} />
    ))}
  </div>
</section>
<div className="pagination text-center">
  <Pagination
    defaultCurrent={1}
    pageSize={8}
    total={totalPages}
    onChange={handlePageChange}
  />
</div>
      
</>
  );
};

export default SearchResults;