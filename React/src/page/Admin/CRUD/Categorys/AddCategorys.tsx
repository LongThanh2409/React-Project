import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CategorysForm,
  schemaCategorys,
} from "../../../../interface/categorys";
import { AddCategory } from "../../../../api/Categorys/Categorys";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { message } from "antd";
const AddCategorys = () => {
  const naviagate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategorysForm>({
    resolver: yupResolver(schemaCategorys),
  });
  const onSubmit = async (datas: CategorysForm) => {
    try {
      await AddCategory(datas);
      successful();
      setTimeout(() => {
        naviagate("/admin/category");
      }, 700);
    } catch (error: any) {
      if (error.response.data.message) {
        setErrorMessage(error.response.data.message);
      }
    }
  };
  const successful = () => {
    messageApi.open({
      type: "success",
      content: `Thêm mới danh mục thành công`,
    });
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
                  Tên Danh Mục
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Nhập tên danh mục"
                />
                <span className="text-red-500 text-sm">
                  {errors.name ? errors.name.message : ""}
                </span>
                <span className="text-red-500 text-sm">
                  {errorMessage ? errorMessage : ""}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Thêm mới
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddCategorys;
