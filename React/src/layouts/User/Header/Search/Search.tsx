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
    const {data} = await getSearch(searchValues)

    try {
      if(data.product.length === 0) {
        setSearchResults([])
        return
      }
    setSearchResults(data.product)
    } catch (err) {
    }
}
    fetchProduct()
}, [searchValues])
const handleSubmit = (e:any) => {
  e.preventDefault();
  navigate(`/search?keyword=${searchValues}`);
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