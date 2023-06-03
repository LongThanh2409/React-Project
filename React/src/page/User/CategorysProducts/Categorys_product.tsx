import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Category from "../../../components/User/Categorys/Category";
import List_Products from "../../../components/User/ListProducts/List_Products";
import { getProduct_Cate } from "../../../api/Products/product_category";
const Categorys_product = () => {
    const [cateProduct, setCateProduct] = useState<Iproducts[]>([]);
    const { id } = useParams();
    useEffect(() => {
      const fetchProductCate = async () => {
        try {
          
            const { data } = await getProduct_Cate(id!) ;
            setCateProduct(data.products); 
        } catch (error) {
        }
      };
  
      fetchProductCate();
    }, []);
   
  return (
 <>
   {console.log(cateProduct)}
        <section className="bg-gray-100 ">
        <Category />
        {/* <div className="sort w-full  bg-slate-200">
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
        </div> */}
        <div className="grid max-w-full grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {cateProduct?.map((item, index) => (
            <List_Products key={index} item={item} />
          ))}
        </div>
      </section>
      {/* <div className="pagination text-center">
        <Pagination
          defaultCurrent={1}
          pageSize={8}
          total={totalPages}
          onChange={handlePageChange}
        />
      </div> */}
 </>
  )
}

export default Categorys_product