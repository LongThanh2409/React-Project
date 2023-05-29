import {useState} from "react" 
import { Link } from "react-router-dom"
import Logo from "./Logo/Logo"
import Menu from "./Menu/Menu"
import Search from "./Search/Search"
import config from "../../../routes/config"
import {  Drawer } from "antd"
import { CloseOutlined } from '@ant-design/icons';

const Header = () => {
  const [open, setOpen] = useState(false);


  const showDrawer = () => {
    setOpen(true);
   
  };

  const onClose = () => {
    setOpen(false);
  };
  return ( <>

<nav className=" ">
  <div className="flex ">
    <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-around  mx-auto">
   <div className="flex items-center">
      <Logo/>
      <div className="search">
        <Search/>
      </div>
   </div>
   
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
     <Menu onClick={onClose}  />
    </div>
    <div className="flex items-center  md:order-2">
  
  <div className="client hidden xl:block ">
   <Link to={config.signin}> <button className="bg-[#088178] px-3 py-2 mx-1 rounded-lg text-white hover:bg-[#0f9d93]">Login</button></Link>
   <Link to={config.signup}> <button className="bg-gray-100 px-3 py-2 mx-1 rounded-lg text-[#088178]"> Register </button></Link>
  </div>
<div className="w-80 block xl:hidden text-right">

    <button onClick={showDrawer} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex  items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
    </button>
    

    <Drawer className="relative z-50" title={ < Logo/>} placement="left" width={"70%"} onClose={onClose} open={open}  
    style={{height:"100%"}} 
    closeIcon={<CloseOutlined style={{ fontSize: "20px" , border:"2px gray solid", padding:"3px", borderRadius:"5px"}} />}
    >
   <div className="absolute flex top-12 z-0  md:mt-10"> 
   <Menu onClick={onClose} /> 

   </div>
      </Drawer>
</div>
</div>
    </div>
  </div>
</nav>

  </>
  )
}

export default Header