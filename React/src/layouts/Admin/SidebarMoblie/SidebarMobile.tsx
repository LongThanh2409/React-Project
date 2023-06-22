import { Drawer } from "antd";
import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const SidebarMobile = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <h1
        className="bg-teal-500 hover:bg-teal-400 text-white px-3 py-2 rounded-md lg:hidden block"
        onClick={showDrawer}
      >
        Slidebar
      </h1>
      <div className="w-full">
        <Drawer
          title="Danh mục sản phẩm"
          placement="left"
          onClose={onClose}
          open={open}
          width={300}
        >
          <Sidebar />
        </Drawer>
      </div>
    </div>
  );
};

export default SidebarMobile;
