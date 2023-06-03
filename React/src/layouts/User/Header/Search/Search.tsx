import { useState ,useEffect} from "react";
import { Search } from "../../../../components/Icon/Icon"
import Tippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css';
import ShowResults from "./ShowResults/ShowResults";
import { useNavigate } from "react-router-dom";
import { getSearch } from "../../../../api/Search/Search";
const Searchs = () => {

  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState<Iproducts[]>([])
  const [showResults, setShowResults] = useState(true)
  const [searchValues, setSearchValues] = useState("")
  

useEffect(() => {
  if (!searchValues.trim()) {
    setSearchResults([])
    return;
}
  const fetchProduct = async () => {
    const {data} = await getSearch(searchValues, undefined, null,null)


    try {
      if(data.product.length === 0) {
        setSearchResults([])
        return
      }
    setSearchResults(data.product.docs)
    } catch (err) {
    
    }
}
    fetchProduct()
}, [searchValues])
const handleSubmit = (e:any) => {

  e.preventDefault();
  setSearchResults([]); // Reset searchResults to an empty array
  navigate(`/search?keyword=${searchValues}`);
     setShowResults(false)
};
const hanldOutsie = () => {
setShowResults(false)
}


  return (

   <> 
   <form onSubmit={handleSubmit} action="">
  
  <Tippy
  appendTo={() => document.body}
  interactive
  visible = {showResults && searchResults?.length >0}
  placement="bottom-end"
  offset={[0,2]}
    render={attrs => (
      <div className="box w-64  md:w-96 shadow-2xl bg-white" tabIndex={-1} {...attrs}>

     <div className="w-full px-3 py-1">
     <h1 className="text-lg">Products Name</h1>
         {searchResults?.slice(0,6).map((item)=>(
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
       <input className="w-full  h-9 sm:w-96 sm:h-10 rounded-md caret-teal-600 focus:ring-2 focus:ring-teal-500 focus:outline-none pr-20 pl-2"  type="text" name="" id="" 
       value={searchValues}
       onChange={((e) => setSearchValues(e.target.value))}
       onFocus={() => {
        setShowResults(true);

    }}
       />
        <button className="absolute  right-1  rounded-sm bg-[#088178] px-3  py-[7px] sm:px-5 sm:py-2">
            < Search  />
            </button>
  </div>
  </Tippy>
   </form>
  
   </>
 
  )
}

export default Searchs