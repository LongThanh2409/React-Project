import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCategorys, removeCategory } from "../../../api/Categorys/Categorys";
import { getProducts } from "../../../api/Products/products";
import { Modal } from "antd";
import { Icategorys } from "../../../interface/categorys";
import config_Admin from "../../../routes/admin_config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
const CategorysAdmin = () => {
  const [category, SetCategory] = useState<Icategorys[]>([]);
  const [products, SetProducts] = useState<Iproducts[]>([]);

  // Thêm state mới
  // const [searchValue, SetSearchValue] = useState("");
  const [modal2Open, setModal2Open] = useState(false);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<string[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string>("");
  const [selectAll, setSelectAll] = useState(false);
  useEffect(() => {
    const fetchCategory = async () => {
      const {
        data: { data },
      } = await getCategorys();

      SetCategory(data);
    };
    const fetchProducts = async () => {
      const { data } = await getProducts();
      SetProducts(data?.product?.docs);
    };
    fetchProducts();
    fetchCategory();
  }, []);
  const hanldRemove = async (id: string) => {
    const {
      data: { data },
    } = await removeCategory(id);
    SetCategory(category.filter((item) => item._id !== data._id));
    setModal2Open(false);
  };

  const showModel = (id: string) => {
    setSelectedProductId(id!);
    setModal2Open(true);
  };
  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setSelectAll(isChecked);
    if (isChecked) {
      // Nếu ô chọn tất cả được chọn, đặt các ID danh mục vào state
      const allCategoryIds = category.map((item) => item._id!);
      setSelectedCategoryIds(allCategoryIds);
    } else {
      // Nếu ô chọn tất cả bị bỏ chọn, đặt state của các ID danh mục về rỗng
      setSelectedCategoryIds([]);
    }
  };
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    categoryId: string
  ) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      // Nếu ô checkbox được chọn, thêm ID danh mục vào state
      setSelectedCategoryIds([...selectedCategoryIds, categoryId]);
    } else {
      // Nếu ô checkbox được bỏ chọn, loại bỏ ID danh mục khỏi state
      setSelectedCategoryIds(
        selectedCategoryIds.filter((id) => id !== categoryId)
      );
      setSelectAll(false);
    }
  };
  // Hàm xóa danh mục đã chọn
  const removeSelectedCategories = async () => {
    if (window.confirm("Bạn có chắc là muốn xóa không?")) {
      for (const categoryId of selectedCategoryIds) {
        await removeCategory(categoryId);
        SetCategory(
          category.filter((item) => !selectedCategoryIds.includes(item._id!))
        );
      }
    }

    // Xóa các danh mục đã chọn khỏi state

    setModal2Open(false);
    setSelectedCategoryIds([]); // Đặt lại state của các danh mục đã chọn về trạng thái rỗng
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

      <h1 className="w-full py-3 text-center text-2xl bg-teal-400 text-white">
        Danh Mục Sản Phẩm
      </h1>
      <div className="content w-full">
        <Link to={config_Admin.add_category}>
          <button className="mt-10 ml-10 bg-green-500 px-5 py-2 text-white font-bold rounded-sm">
            Thêm mới
          </button>
        </Link>
        <button
          className="mt-10 ml-2 bg-red-500 px-5 py-2 text-white font-bold rounded-sm"
          onClick={removeSelectedCategories}
          disabled={selectedCategoryIds.length === 0} // Vô hiệu hóa nút xóa nếu
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
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
                  onChange={handleSelectAll}
                  checked={selectAll}
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
            // ?.filter((category) =>
            //   category.name.toLowerCase().includes(searchValue.toLowerCase())
            // )
            ?.map((category, index) => (
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
                      onChange={(event) =>
                        handleCheckboxChange(event, category._id!)
                      }
                      checked={selectedCategoryIds.includes(category._id!)}
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
                  <span className="text-md text-gray-900">
                    {/* số sản phẩm trong danh mục */}
                    {products?.filter(
                      (product) => product.categoryId === category._id
                    ).length || 0}
                  </span>
                </td>
                <td className=" px-6 py-4  text-sm font-medium">
                  <Link
                    to={`${config_Admin.edit_category}/${category._id}`}
                    className="bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-2 mr-1 rounded-sm"
                  >
                    Sửa
                  </Link>
                  <button
                    onClick={() => showModel(category._id!)}
                    className="bg-red-600 text-white hover:bg-red-700 px-3 py-2 rounded-sm"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default CategorysAdmin;
