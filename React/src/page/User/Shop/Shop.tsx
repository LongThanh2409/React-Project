import Category from '../../../components/User/Categorys/Category';
import List_Products from '../../../components/User/ListProducts/List_Products';
import { useEffect, useState } from "react";
import { getProducts } from "../../../api/Products/products";
import { Pagination, Select } from "antd";
import { useNavigate, useLocation } from 'react-router-dom';

const Shop = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [products, setProducts] = useState<Iproducts[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sort, setSort] = useState('')
 const [color, setColor] = useState('')

  const limits = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getProducts(page, limits,sort);
      setProducts(data.product.docs);
      setTotalPages(data.product.totalDocs);
      setPage(data.product.page);

      
   
      
   
    };
    fetchProducts();
  }, [page,sort]);

  const handlePageChange = (page:any) => {
    const searchParams = new URLSearchParams(location.search);
    setPage(page);
    navigate({
      pathname: '/shop',
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
   <div className=''> 
  
      <section className=" bg-gray-100">
      <Category/>
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
     
    </div>
  </div>
     <div className="grid max-w-full grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    
    {products.map((item, index) => (
    <List_Products key={index} item={item}  />
    ))}
    
    
   </div>
   </section>
   <div className='pagination text-center '>
          <Pagination
            defaultCurrent={1}
            pageSize={8}
            total={totalPages}
            onChange={handlePageChange}
          />
        </div> 
   </div>
   </>
  )
}

export default Shop