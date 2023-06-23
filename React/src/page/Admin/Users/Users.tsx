import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import config_Admin from "../../../routes/admin_config";
import { Iusers } from "../../../interface/users";
import { getUsers, removeUser } from "../../../api/Users/Users";

const Users = () => {
  const [users, setUser] = useState<Iusers[]>([]);
  const [modal2Open, setModal2Open] = useState(false);
  const [selectedBox, setSelectedBox] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await getUsers();
        const userMember = data?.user?.filter(
          (item: any) => item?.role === "member"
        );
        setUser(userMember);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  const hanldRemove = async (id: string) => {
    try {
      const { data } = await removeUser(id);
      setUser(users.filter((item) => item._id !== data.user._id));
      setModal2Open(false);
    } catch (error) {}
  };

  const showModel = (id: string) => {
    setSelectedId(id!);
    setModal2Open(true);
  };
  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setSelectAll(isChecked);
    if (isChecked) {
      setSelectedBox(users.map((item) => item._id!));
    } else {
      setSelectedBox([]);
    }
  };
  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    ID: string
  ) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      // Nếu ô checkbox được chọn, thêm ID danh mục vào state
      setSelectedBox([...selectedBox, ID]);
    } else {
      // Nếu ô checkbox được bỏ chọn, loại bỏ ID danh mục khỏi state
      setSelectedBox(selectedBox.filter((id) => id !== ID));
      setSelectAll(false);
    }
  };
  // Hàm xóa danh mục đã chọn
  const removeSelectedBox = async () => {
    // Xóa các danh mục đã chọn khỏi state
    if (window.confirm("Bạn có chức xóa những mục đã chon")) {
      for (const userID of selectedBox) {
        await removeUser(userID);
        setUser(users.filter((item) => item._id !== userID));
      }
    }
    setModal2Open(false);
    setSelectedBox([]); // Đặt lại state của các danh mục đã chọn về trạng thái rỗng
  };
  return (
    <>
      <Modal
        title="Bạn có chắc là muốn xóa không"
        centered
        open={modal2Open}
        onOk={() => hanldRemove(selectedId)}
        onCancel={() => setModal2Open(false)}
        okButtonProps={{ className: "bg-blue-500 text-white" }}
        style={{ border: "1px solid" }}
      >
        <h1>{""}</h1>
      </Modal>

      <h1 className="w-full py-3 text-center text-2xl bg-teal-400 text-white">
        Danh Sách Khách Hàng
      </h1>
      <div className="content w-full">
        <Link to={config_Admin.add_user}>
          <button className="mt-10 ml-10 bg-green-500 px-5 py-2 text-white font-bold rounded-sm">
            Thêm mới
          </button>
        </Link>
        <button
          className="mt-10 ml-2 bg-red-500 px-5 py-2 text-white font-bold rounded-sm"
          onClick={removeSelectedBox}
          disabled={selectedBox.length === 0} // Vô hiệu hóa nút xóa nếu
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
              Tên Khách Hàng
            </th>
            <th scope="col" className="px-6 py-3">
              Địa chỉ Email
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users
            // ?.filter((category) =>
            //   category.name.toLowerCase().includes(searchValue.toLowerCase())
            // )
            ?.map((users, index) => (
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
                        handleCheckboxChange(event, users._id!)
                      }
                      checked={selectedBox.includes(users._id!)}
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
                  <h1 className=" text-slate-900 truncate">{users.name}</h1>
                </th>
                <td className="px-6 py-4">
                  <span className="text-slate-900">{users.email}</span>
                </td>
                <td className=" px-6 py-4  text-sm font-medium">
                  <Link
                    to={`${config_Admin.edit_user}/${users._id}`}
                    className="bg-indigo-600 text-white hover:bg-indigo-700 px-3 py-2 mr-1 rounded-sm"
                  >
                    Sửa
                  </Link>
                  <button
                    onClick={() => showModel(users._id!)}
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

export default Users;
