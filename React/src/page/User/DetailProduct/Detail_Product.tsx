import { useParams } from "react-router-dom";
import { useState,useEffect} from "react";
import { getProduct } from "../../../api/Products/products";
import { Carousel } from "antd";

const Detail_Product = () => {
  const [product, setProduct] = useState<Iproducts>({} as Iproducts)
  const { name, id } = useParams();
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

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
  useEffect(() => {
   const fetchProduct = async () =>{
  try {
     const {data}= await getProduct(name!,id!)
  setProduct(data.product)

  } catch (error) {
    console.log(error);
    
  }
 

  }
  fetchProduct()    
  }, [ id])

  
  
  return (
    <div className="bg-gray-100 container mx-auto px-32">
    <div className="flex p-4  bg-white">
      <div className="w-full md:w-1/3">
        <Carousel autoplay>
          {product.image &&
            product.image.map((item) => (
              <img className="w-full object-cover" src={item} alt="" />
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