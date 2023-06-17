import { Modal, Select } from "antd";
import Image from "../../../components/Image/Image";
import { useEffect, useState } from "react";
import { getProducts, removeProduct } from "../../../api/Products/products";
import { Link } from "react-router-dom";
import { getCategorys } from "../../../api/Categorys/Categorys";
import config_Admin from "../../../routes/admin_config";

const ProductsAdmin = () => {
  const [products, SetProducts] = useState<Iproducts[]>([]);
  const [page, setPage] = useState(1);
  const [sort, sortBy] = useState();
  const [searchValue, SetSearchValue] = useState("");
  const [category, SetCategory] = useState<Icategorys[]>([]);
  const [modal2Open, setModal2Open] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | number>(
    ""
  );
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await getProducts(page, 10, sort);
      SetProducts(data.product.docs);
    };
    const fetchCategory = async () => {
      const { data } = await getCategorys();
      SetCategory(data);
    };

    fetchCategory();
    fetchProducts();
  }, [page, sort, searchValue]);
  const hanldRemove = async (id: string | number) => {
    try {
      const { data } = await removeProduct(id);
      SetProducts(products.filter((item) => item._id !== data.product._id));
      setModal2Open(false);
    } catch (error) {}
  };
  const showModel = (id: string | number) => {
    setSelectedProductId(id!);
    setModal2Open(true);
  };
  return (
    <>
      <Modal
        title="Bạn có chắc là muốn xóa không"
        centered
        open={modal2Open}
        onOk={() => hanldRemove(selectedProductId)}
        onCancel={() => setModal2Open(false)}
        okButtonProps={{ className: "bg-blue-500 text-white" }}
        style={{ border: "1px solid" }}
      >
        <h1>{""}</h1>
      </Modal>

      <div className="container w-full">
        <h1 className="w-full py-3 text-center text-2xl bg-teal-400 text-white">
          Danh Sách Sản Phẩm
        </h1>
        <div className="content w-full">
          <Link to={config_Admin.add_product}>
            <button className="my-10 ml-10 bg-green-500 px-5 py-2 text-white font-bold rounded-sm">
              Thêm sản phẩm mới
            </button>
          </Link>
          <div className="main_table ">
            <div className="relative w-full overflow-x-scroll shadow-md sm:rounded-lg">
              <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
                <div>
                  <div className="sort_by pl-10">
                    <label className="mr-5" htmlFor="">
                      Sắp xếp theo
                    </label>

                    <Select
                      defaultValue="Sắp xếp theo"
                      bordered={false}
                      style={{
                        width: 130,
                        border: "2px solid teal ",
                        borderRadius: 5,
                        backgroundColor: "white",
                      }}
                      options={[
                        { value: "Giá", label: "Giá" },
                        { value: "lucy", label: "Ngày" },
                        { value: "Yiminghe", label: "Tên" },
                      ]}
                    />
                  </div>
                </div>
                <label htmlFor="table-search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="table-search-users"
                    className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Tìm kiếm theo tên"
                    value={searchValue}
                    onChange={(e) => SetSearchValue(e.target.value)}
                  />
                </div>
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
                        <label
                          htmlFor="checkbox-all-search"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Tên sản phẩm
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Ảnh sản phẩm
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Giá gốc
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Giá khuyến mãi
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Màu
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Số lượng
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Danh mục
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Mô tả
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products
                    .filter((product) =>
                      product.name
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    )
                    .map((product, index) => (
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
                        <th className="flex w-48 py-14">
                          <h1 className=" text-slate-900 truncate">
                            {product.name}
                          </h1>
                        </th>
                        <td className="w-24 px-2 py-1 ">
                          <Image
                            title={product.name}
                            className="w-full"
                            src={product.image[0]}
                          />
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-md text-gray-900">
                            {product.price}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-md text-gray-900">
                            {product.priceSale}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          {product.size.map((size, index) => (
                            <span key={index} className="text-md text-gray-900">
                              {size},
                            </span>
                          ))}
                        </td>

                        <td className="px-6 py-4">
                          {product.color.map((color, index) => (
                            <span key={index} className="text-md text-gray-900">
                              {color},
                            </span>
                          ))}
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-md text-gray-900">
                            {product.quantity}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {category.map((category, index) =>
                            category._id === product.categoryId ? (
                              <span
                                key={index}
                                className="text-md text-gray-900"
                              >
                                {category.name}{" "}
                              </span>
                            ) : null
                          )}
                        </td>

                        <td className="flex  py-9 w-32">
                          <span className=" text-sm truncate ">
                            {product.description}
                          </span>
                        </td>
                        <td className=" px-6 py-4  text-sm font-medium">
                          <div className="flex">
                            <Link
                              to={`${config_Admin.edit_product}/${product._id}`}
                              className="bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-2 mr-1 rounded-sm"
                            >
                              Sửa
                            </Link>
                            <button
                              onClick={() => showModel(product._id!)}
                              className="bg-red-600 text-white hover:bg-red-700 px-3 py-2 rounded-sm"
                            >
                              Xóa
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsAdmin;
