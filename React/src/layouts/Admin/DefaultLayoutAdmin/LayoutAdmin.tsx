import { ReactNode } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutAdminProps {
  children: ReactNode;
}
const LayoutAdmin = ({ children }: LayoutAdminProps) => {
  return (
    <div className="relative">
      <div className="fixed top-0 z-50 bg-slate-200 shadow-xl w-full   py-3">
        <Header />
      </div>
      <div className="lg:flex  w-full">
        <div className="mt-16 w-64 h-screen hidden lg:block">
          <Sidebar />
        </div>
        <div className="content flex-1 overflow-auto"> {children} </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
