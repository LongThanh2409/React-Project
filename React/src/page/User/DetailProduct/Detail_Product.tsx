import { Link, useParams } from "react-router-dom";
import { useState,useEffect} from "react";
import { getProduct } from "../../../api/Products/products";
import { Carousel } from "antd";
import { getCategorys } from "../../../api/Categorys/Categorys";
import config from "../../../routes/config";

const Detail_Product = () => {
  const [product, setProduct] = useState<Iproducts>({} as Iproducts)
  const { name, id } = useParams();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [category, setCategorys] = useState<Icategorys[]>([])
  const clickColor = (index:any) => {
    setSelectedColor(index);
  };

  const clickSize = (index:any) => {
    setSelectedSize(index);
  };

  const updateQuantity = (action:string) => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const fetchCategory = async () => {
    try {
      const {data} = await getCategorys()
      setCategorys(data)
      console.log(data);
      
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
          <div className="flex gap-3">
            <div className="home">
              <Link to={config.home}>Home</Link>
            </div>
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
    <div className="flex mt-28 px-32  bg-white">
      <div className="w-full md:w-1/3">
        <Carousel  autoplay>
          {product.image &&
            product.image.map((item, index) => (
             <img key={index} className="w-full object-cover" src={item} alt="" />
            ))}
        </Carousel>
      </div>
      <div className="w-full ml-10 md:w-2/3">
      <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
        {product.name}
      </h2>
      <div className="flex items-center space-x-4 my-4">
        <div>
          <div className="rounded-lg bg-gray-100 flex py-2 px-3">
            <span className="text-indigo-400 mr-1 mt-1">$</span>
            <span className="font-bold text-indigo-600 text-3xl">
              {product.priceSale}
            </span>
          </div>
        </div>
        {product.hot_sale && product.hot_sale > 0 && (
          <div className="flex-1">
            <p className="text-green-500 text-xl font-semibold">
              Save {product.hot_sale}%
            </p>
            <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
          </div>
        )}
      </div>
      <p className="text-gray-500">{product.description}</p>
      <div className="pt-4">
        <legend className="text-lg font-bold">Color:</legend>
        <div className="mt-2 flex flex-wrap gap-1">
          {product.color &&
            product.color.map((color, index) => (
              <label
                key={index}
                htmlFor={`color_${index}`}
                className="cursor-pointer"
              >
                <input
                  type="radio"
                  id={`color_${index}`}
                  name="color"
                  className="peer sr-only"
                  checked={selectedColor === index}
                  onClick={() => clickColor(index)}
                />
                <span
                  className={`block h-6 w-6 rounded-full border border-gray-200 ring-1 ring-transparent ring-offset-1 ${
                    selectedColor === index
                      ? 'ring-gray-700'
                      : ''
                  }`}
                  style={{ backgroundColor: color }}
                ></span>
              </label>
            ))}
        </div>
      </div>
      <div className="py-4">
        <legend className="text-lg font-bold">Size:</legend>
        <div className="mt-2 flex flex-wrap gap-1">
          {product.size &&
            product.size.map((size, index) => (
              <label
                key={index}
                htmlFor={`size_${index}`}
                className="cursor-pointer"
              >
                <input
                  type="radio"
                  name="size"
                  id={`size_${index}`}
                  className="peer sr-only"
                  onClick={() => clickSize(index)}
                />

                <span className="group inline-flex uppercase h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-slate-500 peer-checked:text-white">
                  {size}
                </span>
              </label>
            ))}
        </div>
      </div>
      <div>
        <legend className="text-lg font-bold">Quantity:</legend>
        <div className="items-center border border-gray-200 rounded inline-block">
          <button
            type="button"
            className="w-10 h-10 leading-10 text-gray-600 transition hover:bg-slate-300"
            onClick={() => updateQuantity('decrease')}
          >
            &minus;
          </button>

          <input
            type="number"
            id="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="h-10 w-16 border-transparent text-center sm:text-sm"
          />

          <button
            type="button"
            className="w-10 h-10 leading-10 text-gray-600 transition hover:bg-slate-300"
            onClick={() => updateQuantity('increase')}
          >
            &plus;
          </button>
        </div>
        <span className="ml-3">
          {product.quantity || '1'} products available
        </span>
      </div>
      <div className="flex">
        <div className="flex items-end">
          <button
            className="h-14 px-9 py-2 font-semibold bg-teal-50 border border-teal-500 hover:bg-transparent text-teal-500 mt-6 rounded-lg"
            type="button"
           
          >
            Add to cart
          </button>
        </div>
        <button
          type="button"
          className="mx-5 h-14 px-9 py-2 font-semibold bg-teal-600 hover:bg-teal-500 text-white mt-6 rounded-lg"
        >
          Buy now
        </button>
        {product.inventoryStatus === 'OUTOFSTOCK' && (
          <h1 className="mt-5 text-xl text-red-500">
            Sản Phẩm đã hết Hàng....
          </h1>
        )}
      </div>
      </div>
    </div>
  </div>
    )

}


export default Detail_Product