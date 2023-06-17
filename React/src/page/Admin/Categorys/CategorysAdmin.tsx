import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategorys } from "../../../api/Categorys/Categorys";
const CategorysAdmin = () => {
  const [category, SetCategory] = useState<Icategorys[]>([]);
  const [searchValue, SetSearchValue] = useState("");
  useEffect(() => {
    const fetchCategory = async () => {
      const { data } = await getCategorys();
      SetCategory(data);
    };
    fetchCategory();
  }, [searchValue]);
  return (
    <>
      <h1 className="w-full py-3 text-center text-2xl bg-teal-400 text-white">
        Danh Mục Sản Phẩm
      </h1>
      <div className="content w-full">
        <Link to={""}>
          <button className="mt-10 ml-10 bg-green-500 px-5 py-2 text-white font-bold rounded-sm">
            New
          </button>
        </Link>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Tên sản phẩm
            </th>
            <th scope="col" className="px-6 py-3">
              Số sản phẩm
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {category
            .filter((category) =>
              category.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((category, index) => (
              <tr
                key={index}
                className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-3"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="checkbox-table-search-3"
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th className="flex w-48 py-4">
                  <h1 className=" text-slate-900 truncate">{category.name}</h1>
                </th>
                <td className="px-6 py-4">
                  <span className="text-md text-gray-900">{0}</span>
                </td>
                <td className=" px-6 py-4  text-sm font-medium">
                  <Link
                    to={""}
                    className="bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-2 mr-1 rounded-sm"
                  >
                    Sửa
                  </Link>
                  <Link
                    to={""}
                    className="bg-red-600 text-white hover:bg-red-700 px-3 py-2 rounded-sm"
                  >
                    Xóa
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default CategorysAdmin;
