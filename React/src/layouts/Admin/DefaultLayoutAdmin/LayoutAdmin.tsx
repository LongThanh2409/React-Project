import { ReactNode, useEffect } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

import { json, useNavigate } from "react-router-dom";
import config_Admin from "../../../routes/admin_config";

interface LayoutAdminProps {
  children: ReactNode;
}
const LayoutAdmin = ({ children }: LayoutAdminProps) => {
  const user = localStorage.getItem("user");
  const Token = JSON.parse(user!)?.accessToken;
  const role = JSON.parse(user!)?.role;
  const navigate = useNavigate();
  useEffect(() => {
    if (Token && role === "admin") {
    } else {
      navigate(config_Admin.signin);
    }
  });
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
