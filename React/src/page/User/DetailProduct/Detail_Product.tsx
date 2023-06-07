import { Link, useParams } from "react-router-dom";
import { useState,useEffect} from "react";
import { getProduct } from "../../../api/Products/products";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { getCategorys } from "../../../api/Categorys/Categorys";
import config from "../../../routes/config";
import Banner1 from "../../../components/User/Banner/Banner1";
import { Rate } from "antd";

const Detail_Product = () => {
  const [product, setProduct] = useState<Iproducts>({} as Iproducts)
  const { name, id } = useParams();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [category, setCategorys] = useState<Icategorys[]>([])
 

  const fetchCategory = async () => {
    try {
      const {data} = await getCategorys()
      setCategorys(data)
   
      
    } catch (error) {
      
    }
  
    }
  useEffect(() => {
   const fetchProduct = async () =>{
  try {
     const {data}= await getProduct(name!,id!)
  setProduct(data.product)

  } catch (error) {
    console.log(error);
  }
  }
  fetchCategory()
  fetchProduct()    
  }, [ id])

   const handleColorChange = (index: number) => {
    setSelectedColor(index);
    setSelectedImage(index);
  };
  
  return (
    <div className="  bg-gray-50 container mx-auto">
 <div className="w-full ">
     <div className="w-full top-[76px] pl-24 py-1 shadow-lg fixed z-10 bg-white">
    {category.map((item, index) => (
      product.categoryId === item._id && (
        <div
          key={index}
          className="w-full"
        >
          <div className="flex items-center gap-3">
            <div className="home">
              <Link to={config.home}>Home</Link>
            </div>
            <span>
              <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
              </span>
            <ul className="flex items-center gap-3 ">
              <li>{item.name}</li>
              <span>
              <svg height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"></path></svg>
              </span>
              <li className="text-gray-400 text-sm">{product.name}</li>
            </ul>
          </div>
        </div>
      )
    ))}
  </div>
 </div>

<section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
     
      <div className="lg:w-1/3 bg-slate-100 rounded-md">
                      <Carousel 
                      emulateTouch
                      showIndicators={false}
                      selectedItem={selectedImage}
                      transitionTime={300}
                      thumbWidth={70} >
                      {product.image &&
                       product.image.map((item, index) => (
                      <img key={index}  className="w-full object-cover" src={item} alt="" />
                      ))}
                      </Carousel>
       </div>
      <div className="lg:w-2/3 w-full lg:pl-10  mt-6 lg:mt-0">
       
        <h1 className="text-gray-900 text-2xl title-font font-medium mb-1">{product.name}</h1>
        <div className="flex mb-4">
                  <Rate disabled  value={product.rating} />
        </div>
        <p className="leading-relaxed">{product.description}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
  <div className="flex">
    <span className="mr-3">Color</span>
    {product.color&& product?.color.map((item, index) => (
      <button
        key={index}
        style={{ backgroundColor: item }}
        className={`block h-6 w-6 mx-1 rounded-full border border-gray-200 focus:outline-none ${
          selectedColor === index ?  'ring-1 ring-gray-500' : ''
        }`}
        onClick={() => handleColorChange(index)}
      ></button>
    ))}
  </div>
  <div className="flex ml-10 items-center">
    <span className="mr-3">Size</span>
    { product.size && product?.size.map((item, index) => (
      <button 
        key={index}
        className={`group inline-flex uppercase mx-1 h-8 w-8 items-center justify-center rounded-full border text-xs font-medium ${
          selectedSize === index
            ? 'bg-slate-300 peer-checked:text-white'
            : ''
        }`}
        onClick={() => setSelectedSize(index)}
      >
        {item}
      </button>
    ))}
    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center"></span>
  </div>
</div>
        <div className="flex flex-col">
          <span className="title-font font-medium text-2xl text-gray-900">{product?.priceSale?.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}</span>
            <div className="flex">
               <button 
                  className="h-14 px-9 py-2 font-semibold bg-teal-50 border border-teal-500 hover:bg-transparent text-teal-500 mt-6 rounded-lg p-button-success"
                  type="button"
                >Add to cart</button>
             
              <button
                className="mx-5 h-14 px-9 py-2 font-semibold bg-teal-600 hover:bg-teal-500 text-white mt-6 rounded-lg"
              >
                Buy now
              </button>
            </div>
        
        </div>
      </div>
    </div>
  </div>
</section>
    <div className="banner1 px-16">
      <Banner1/>
    </div>
  </div>
    )

}


export default Detail_Product