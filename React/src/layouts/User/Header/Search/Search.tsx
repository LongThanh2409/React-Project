
import { useState ,useEffect} from "react";
import { Search } from "../../../../components/Icon/Icon"
import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css';
import ShowResults from "./ShowResults/ShowResults";
const Searchs = () => {
const data = [{_id:"1", name: "Long", price:32323, image: ["https://dosi-in.com/images/detailed/42/CDL10_1.jpg"]},
{_id:"2", name: "Long", price:32323, image: ["https://order.tokago.vn/uploads/2020/3/12/11//534d96efe0ad13793eefb6fd1033d43c.png"]},
{_id:"3", name: "Long", price:32323, image: ["https://order.tokago.vn/uploads/2020/3/12/11//534d96efe0ad13793eefb6fd1033d43c.png"]},
{_id:"4", name: "Long", price:32323, image: ["https://order.tokago.vn/uploads/2020/3/12/11//534d96efe0ad13793eefb6fd1033d43c.png"]},
{_id:"5", name: "Long", price:32323, image: ["https://order.tokago.vn/uploads/2020/3/12/11//534d96efe0ad13793eefb6fd1033d43c.png"]},
{_id:"6", name: "Long", price:32323, image: ["https://order.tokago.vn/uploads/2020/3/12/11//534d96efe0ad13793eefb6fd1033d43c.png"]},
{_id:"7", name: "Long", price:32323, image: ["https://order.tokago.vn/uploads/2020/3/12/11//534d96efe0ad13793eefb6fd1033d43c.png"]},

]
  const [searchResults, setSearchResults] = useState<Iproducts[]>([])
  const [showResults, setShowResults] = useState(true)
  const [searchValues, setSearchValues] = useState("")
  const fetchProduct = async () => {
    try {
     
        // console.log(data.);
        setSearchResults(data.slice(0, 5))

    } catch (err) {

    }
}

useEffect(() => {
    fetchProduct()
}, [searchValues])
const hanldOutsie = () => {
setShowResults(false)
}


  return (

   <> 
   <form  action="">
  
  <Tippy
  appendTo={() => document.body}
  interactive
  visible = {showResults && searchResults.length !==0}
  placement="bottom-end"
  offset={[0,2]}
    render={attrs => (
      <div className="box w-64  md:w-96 shadow-2xl bg-white" tabIndex={-1} {...attrs}>

     <div className="w-full pl-3 py-1">
     <h1 className="text-lg">Products Name</h1>
         {searchResults.map((item)=>(
            <div  key={item._id} className="">
              <ShowResults  key={item._id} data={item}/>
              </div>
          ))}
     </div>
      </div>
    )}
    onClickOutside={hanldOutsie}
  >
<div className="relative w-full flex items-center">
       <input className="w-64  md:w-96 h-10 rounded-md outline-none pr-20 pl-2"  type="text" name="" id="" 
       value={searchValues}
       onChange={((e) => setSearchValues(e.target.value))}
       onFocus={() => {
        setShowResults(true);

    }}
       />
        <button className="absolute right-1 bg-[#088178]  px-5 py-2">
            < Search  />
            </button>
  </div>
  </Tippy>
   </form>
  
   </>
 
  )
}

export default Searchs