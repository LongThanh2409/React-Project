import { message } from "antd";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { UsersForm, schemaUsers } from "../../../../interface/users";
import { yupResolver } from "@hookform/resolvers/yup";
import { editUser, getUser } from "../../../../api/Users/Users";

import config_Admin from "../../../../routes/admin_config";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UsersForm>({
    resolver: yupResolver(schemaUsers),
    defaultValues: async () => {
      return await fetchUser(id!);
    },
  });
  const onSubmit = async (user: UsersForm) => {
    try {
      await editUser(id!, user);
      successful();
      setTimeout(() => {
        navigate(config_Admin.users);
      }, 700);
    } catch (error) {
      console.log(error);
    }
  };
  const successful = () => {
    messageApi.open({
      type: "success",
      content: `Sửa thông tin thành công`,
    });
  };

  const fetchUser = async (id: string) => {
    try {
      const { data } = await getUser(id);
      return data.user;
    } catch (error) {}
  };

  return (
    <>
      {contextHolder}
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Thêm mới danh mục
          </h2>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tên Khách hàng
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Tên Khách Hàng"
                />
                <span className="text-red-500 text-sm">
                  {errors.name ? errors.name.message : ""}
                </span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Địa chỉ email
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Địa chỉ email"
                />
                <span className="text-red-500 text-sm">
                  {errors.email ? errors.email.message : ""}
                </span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mật khẩu
                </label>
                <input
                  type="password"
                  {...register("password")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Địa chỉ email"
                />
                <span className="text-red-500 text-sm">
                  {errors.email ? errors.email.message : ""}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Sửa
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditUser;
