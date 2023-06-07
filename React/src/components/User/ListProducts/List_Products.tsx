
import {  Rate } from 'antd';
import { Link } from "react-router-dom";

type PropsType = {
item: Iproducts
}
const List_Products = ({item}:PropsType) => {
 
 

  return (
   
       <>
         
            <article  className="relative rounded-xl bg-white p-3 shadow-xl hover:shadow-2xl hover:transform hover:scale-105 duration-300 border-[#cce7d0]">
              {
                item.hot_sale === undefined || !item.hot_sale ? null :<div className='absolute z-10 -top-1 left-[-3px] py-2 px-2 ' style={{
                   backgroundImage: `url('./seo-off.png')`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize: '100% 100%', 

                  
                  }} > <span  className=" m-2  rounded-full text-center text-sm font-medium text-white">{item.hot_sale}% OFF</span></div>
              }
          
              
                <span
                  title="Add to Favorites"
                  className="text-4xl text-gray-300 hover:text-red-600 z-10 duration-200 absolute right-2  -top-1 cursor-pointer"
                >
                  &hearts;
                </span>
              <Link to={`/detail-product/${encodeURIComponent(item.name)}/${item._id}`} className="relative mx-3 mt-3 md:h-60 flex justify-center overflow-hidden rounded-xl">
                <img src={item.image[0]} className="w-full object-contain cursor-pointer" alt="product image" />
               
              </Link>
  
              <div className="mt-4 px-5 pb-5">
                <div>
                  <h5 className="text-xl tracking-tight text-slate-900 truncate">{item.name}</h5>
                  <div className="mt-2  flex flex-col justify-start">
                    <p>
                      
                   
                        <span className="text-2xl font-bold text-slate-900 mx-1">
                          {item.priceSale.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
              
                      {!!item.hot_sale && (
                      <span className="text-sm text-slate-900 line-through mx-1">{item.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}</span>
                                
                      )}
                    </p>
                  </div>
                </div>
                <div className="mb-3">
                  <Rate disabled  value={item.rating} />
                </div>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md dark:bg-slate-900 bg-teal-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </a>
              </div>
            </article>
    
      
    
       </>
  );
}

export default List_Products;