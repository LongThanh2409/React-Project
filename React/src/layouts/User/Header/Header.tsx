

import { Link } from "react-router-dom"
import Logo from "./Logo/Logo"
import Menu from "./Menu/Menu"
import Search from "./Search/Search"
import config from "../../../routes/config"

const Header = () => {
    
  return ( <>

<nav className="bg-slate-200 shadow-xl dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-4">
  <Logo/>
  <div className="search">
    <Search/>
  </div>
  <div className="flex items-center md:order-2">

      <div className="client hidden md:block">
       <Link to={config.signin}> <button className="bg-[#088178] px-3 py-2 mx-1 rounded-lg text-white hover:bg-[#0f9d93]">Login</button></Link>
       <Link to={config.signup}> <button className="bg-gray-100 px-3 py-2 mx-1 rounded-lg text-[#088178]"> Register </button></Link>
      </div>

      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
      </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
   <Menu   />
  </div>
  </div>
</nav>

  </>
  )
}

export default Header