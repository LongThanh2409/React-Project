
import { Link, NavLink } from "react-router-dom"
import config from "../../../../../routes/config"




const MenuItem = ({ onClick }: { onClick: () => void }) => {
    const userMenu = [
        {
          
            title: "Home",
            to: "/"
        },
        {
        
            title: "Shop",
            to: "/shop"
        },
        {
           
            title: "About",
            to: "/about"
        },
       
        {
           
            title: "Blog",
            to: "/blog"
        },
        {
           
            title: "Contact",
            to: "/contact"
        },
       
    ]

  return (
  

    <>
    {userMenu.map((item, index) => (
        
        <li className="mt-1" key={index} >
        <NavLink

         to={item.to}   className={` text-base font-semibold transition before:content-[''] before:absolute relative before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-slate-600 hover:before:w-full before:transition-all ${
            location.pathname === item.to ? 'text-[#088178]' : ''
          }`}  aria-current="page"  onClick={onClick}  >{item.title}</NavLink>




      </li> 

        ))}
         
  <div className="client  md:hidden">
   <Link to={config.signin}> <li className="text-base font-semibold transition before:content-[''] before:absolute relative before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-slate-600 hover:before:w-full before:transition-all">Login</li></Link>
   <Link to={config.signup}> <li className="text-base font-semibold transition before:content-[''] before:absolute relative before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-slate-600 hover:before:w-full before:transition-all"> Register </li></Link>
  </div>
      
    
   

    </>


  )
}

export default MenuItem