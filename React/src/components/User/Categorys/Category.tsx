import { useEffect, useState } from "react";
import { getCategorys } from "../../../api/Categorys/Categorys";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { Icategorys } from "../../../interface/categorys";

const Category = () => {
  const [categorys, setCategorys] = useState<Icategorys[]>([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const {
          data: { data },
        } = await getCategorys();
        setCategorys(data);
      } catch (error) {}
    };
    fetchCategory();
  }, []);

  // const hanldOutsie = () => {
  //   setShowResults(false)
  //   }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="bg-gray-200 pl-2 md:pl-10 pt-5 flex items-center cursor-pointer">
        <h1
          className="bg-teal-500 hover:bg-teal-400 text-white px-3 py-2 rounded-md"
          onClick={showDrawer}
        >
          Danh mục sản phẩm
        </h1>

        <Drawer
          title="Danh mục sản phẩm"
          placement="left"
          onClose={onClose}
          open={open}
        >
          <div className="sm:flex">
            <ul className="w-1/2">
              {categorys.length > 0 &&
                categorys
                  ?.slice(0, Math.ceil(categorys.length / 2))
                  ?.map((item, index) => (
                    <Link key={index} to={`/products-category/${item._id}`}>
                      {" "}
                      <li
                        onClick={onClose}
                        className="leading-7 cursor-pointer pl-2 py-1 text-base hover:bg-gray-100"
                        key={index}
                      >
                        {" "}
                        {item.name}{" "}
                      </li>{" "}
                    </Link>
                  ))}
            </ul>
            <ul className="w-1/2">
              {categorys.length > 0 &&
                categorys
                  ?.slice(Math.ceil(categorys.length / 2))
                  ?.map((item, index) => (
                    <Link to={`/products-category/${item._id}`}>
                      {" "}
                      <li
                        onClick={onClose}
                        className="leading-7 cursor-pointer pl-2 py-1 text-base hover:bg-gray-100"
                        key={index}
                      >
                        {" "}
                        {item.name}{" "}
                      </li>{" "}
                    </Link>
                  ))}
            </ul>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Category;
