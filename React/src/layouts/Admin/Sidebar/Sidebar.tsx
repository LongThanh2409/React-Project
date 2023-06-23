import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import config_Admin from "../../../routes/admin_config";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };
  const hanldLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
    navigate(config_Admin.signin);
  };
  return (
    <>
      <div className="max-w-2xl w-full mx-auto">
        <aside className=" w-64 " aria-label="Sidebar">
          <div className="px-3 py-4 w-full overflow-y-auto h-screen rounded md:bg-gray-100 bg-white  dark:bg-gray-800">
            <ul className="space-y-2">
              <li>
                <Link
                  to={config_Admin.home}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <svg
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span className="ml-3">Trang chủ</span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Danh mục
                  </span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                {isDropdownOpen && (
                  <ul className=" py-2 space-y-2  bg-gray-200">
                    <li>
                      <Link
                        to={config_Admin.products}
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 pl-11"
                      >
                        Sản Phẩm
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={config_Admin.category}
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 pl-11"
                      >
                        Danh mục
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={""}
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 pl-11"
                      >
                        Size
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={""}
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 pl-11"
                      >
                        Màu{" "}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <button
                  onClick={toggleDropdown2}
                  className="flex items-center w-full p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className=" ml-3 whitespace-nowrap">Users</span>
                </button>

                {isDropdownOpen2 && (
                  <ul className=" py-2 space-y-2 bg-gray-200">
                    <li>
                      <Link
                        to={config_Admin.users}
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 pl-11"
                      >
                        User
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={config_Admin.users_admin}
                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 pl-11"
                      >
                        User Admin
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li onClick={hanldLogout}>
                <Link
                  to={""}
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <script src="https://unpkg.com/flowbite@1.3.4/dist/flowbite.js"></script>
      </div>
    </>
  );
};

export default Sidebar;
