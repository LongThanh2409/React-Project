
import { NavLink } from "react-router-dom"
import Categorys from "../../../../../page/User/Categorys/Categorys"



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
      
     <li className="mt-1">
     <Categorys/>
     </li>
    </>


  )
}

export default MenuItem