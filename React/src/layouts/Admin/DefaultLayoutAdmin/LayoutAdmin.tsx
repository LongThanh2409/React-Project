import { ReactNode } from "react"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar";

interface LayoutAdminProps {
    children: ReactNode;
  }
const LayoutAdmin = ({children}:LayoutAdminProps) => {
  return (
 
    <div className="relative">
    <div className='fixed top-0 z-50 bg-slate-200 shadow-xl w-full   py-3'> 
    <Header />
    </div>
        <div className="flex absolute top-20 w-full">
            <div className="w-64 h-screen"><Sidebar/></div>
            <div className="  content flex-1 w-full "> {children} </div>
        </div>
    
    </div>
  
  )
}

export default LayoutAdmin