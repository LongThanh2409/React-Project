import { useForm, Controller } from "react-hook-form";

import {
  addProduct,
  getColors,
  getSizes,
} from "../../../../api/Products/products";
import { useEffect, useState } from "react";
import { getCategorys } from "../../../../api/Categorys/Categorys";
import { ISize } from "../../../../interface/sizes";
import { IColor } from "../../../../interface/colors";
import { Alert, Select, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import config_Admin from "../../../../routes/admin_config";
import { Icategorys } from "../../../../interface/categorys";

const AddProducts = () => {
  const navigate = useNavigate();
  const [categorys, SetCategorys] = useState<Icategorys[]>([]);
  const [sizes, SetSizes] = useState<ISize[]>([]);
  const [colors, SetColors] = useState<IColor[]>([]);
  const [error, setError] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const [messageLoading, contextHolder2] = message.useMessage();
  const [uploadUrlsss, setUploadUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  // Các thông tin xác thực của bạn từ Cloudinary
  const cloudName = "damrw5zmv";
  const PRESET_NAME = "Demo_upload";

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const {
          data: { data },
        } = await getCategorys();

        SetCategorys(data);
      } catch (error) {}
    };
    const fetchSize = async () => {
      try {
        const { data } = await getSizes();

        SetSizes(data.size);
      } catch (error) {}
    };
    const fetchColor = async () => {
      try {
        const { data } = await getColors();
        SetColors(data.color);
      } catch (error) {}
    };
    fetchColor();
    fetchSize();
    fetchCategory();
  }, []);
  const { register, control, handleSubmit } = useForm<Iproducts>({});
  const onChangeImage = async (event: any) => {
    const imageData = event.target.files;

    const formData = new FormData();
    const uploadUrls = [];

    for (let i = 0; i < imageData.length; i++) {
      formData.append(`file`, imageData[i]);

      formData.append("upload_preset", PRESET_NAME); // Đặt upload preset của bạn

      // Sử dụng fetch để gửi yêu cầu tải lên đến Cloudinary
      if (loading) {
        loadingAntd();
      }
      const uploadResponse = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const uploadData = await uploadResponse.json();
      const imageUrl = uploadData.secure_url;
      uploadUrls.push(imageUrl);
      setUploadUrls(uploadUrls);
      setLoading(true);
    }
  };
  const onSubmit = async (data: Iproducts) => {
    try {
      // Tạo một đối tượng form data

      // Nhận phản hồi từ Cloudinary và lấy URL của hình ảnh tải lên
      // const uploadData = await uploadResponse.json();
      // const imageUrl = uploadData.resources.map(
      //   (resource: any) => resource.secure_url
      // );
      console.log(uploadUrlsss);
      // Bắt đầu hiển thị loading
      await addProduct({ ...data, image: uploadUrlsss });

      success();
      setError("");
      setTimeout(() => {
        navigate(config_Admin.products);
      }, 1000);
    } catch (error: any) {
      console.log(error);
      errorsAlert();

      setError(error?.response?.data?.message);
    }
  };

  // const [image, setImage] = useState("");

  // const handleUpload = (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setImage(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // };
  //size
  const [selectedItemsSize] = useState<string[]>([]);
  const [selectedItemsColor] = useState<string[]>([]);
  const color = colors.map((o) => o.name);
  const size = sizes.map((o) => o.name);

  const filteredSize = size.filter((o) => !selectedItemsSize.includes(o));
  const filterColor = color.filter((o) => !selectedItemsColor.includes(o));
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Thêm sản phẩm thành công",
      duration: 3,

      style: { marginLeft: "80%", marginTop: "5%" },
    });
  };
  const errorsAlert = () => {
    messageApi.open({
      type: "error",
      content: "Thêm sản phẩm không thành công",
      duration: 3,

      style: { marginLeft: "80%", marginTop: "5%" },
    });
  };
  //. loading

  const loadingAntd = () => {
    messageLoading
      .open({
        type: "loading",
        content: `Đang Tải ảnh ...`,
      })
      .then(() => message.success("Tải ảnh thành công"));
  };
  return (
    <>
      {contextHolder && contextHolder2}

      <span className="absolute z-50 right-1">
        {error ? (
          <Alert message="Lỗi" description={error[0]} type="error" showIcon />
        ) : null}
      </span>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new product
          </h2>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                />
              </div>
              <span></span>
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image
                </label>

                <div className="flex w-full items-center justify-center">
                  <div className="images w-1/2 h-52">
                    {uploadUrlsss.length > 0 ? (
                      <img
                        className="w-full h-full object-contain"
                        src={uploadUrlsss[0]}
                        alt="Product"
                      />
                    ) : (
                      <div className="w-full h-full object-cover"></div>
                    )}
                  </div>

                  <div className="relative w-1/2 h-52 border-2 border-blue-400 ">
                    <label
                      htmlFor="fileInput"
                      className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    >
                      <span className="absolute z-10 text-blue-500  font-bold text-lg">
                        Chọn file ảnh
                      </span>

                      <input
                        multiple
                        type="file"
                        onChange={onChangeImage}
                        id="fileInput"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        placeholder="Type product name"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="phần trăm"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Số phần trăm giảm
                </label>
                <input
                  type="text"
                  {...register("hot_sale")}
                  id="brand"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="10%"
                  defaultValue={0}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Giá gốc
                </label>
                <input
                  type="number"
                  {...register("price")}
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Danh mục sản phẩm
                </label>
                {categorys.length > 0 ? (
                  <select
                    id="category"
                    {...register("categoryId")}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option value="">Chọn danh mục</option>
                    {categorys.map((category) => (
                      <option key={category._id} value={category._id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                ) : (
                  <Link to={`${config_Admin.add_category}`}>
                    Chưa có category nào Thêm ngay
                  </Link>
                )}
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Số lượng
                </label>
                <input
                  type="number"
                  {...register("quantity")}
                  id="quantity"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="12"
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Danh mục Color
                </label>
                {colors.length > 0 ? (
                  <Controller
                    control={control}
                    name="color"
                    render={({ field }) => (
                      <Select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        {...field}
                        mode="multiple"
                        placeholder="Chọn danh sách màu"
                        bordered={false}
                        options={filterColor.map((item) => ({
                          value: item,
                          label: item,
                        }))}
                      />
                    )}
                  />
                ) : (
                  <input
                    type=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    defaultValue={"Không có màu nào"}
                    placeholder=""
                  />
                )}
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Danh mục size
                </label>
                {sizes.length > 0 ? (
                  <Controller
                    control={control}
                    name="size"
                    render={({ field }) => (
                      <Select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full py-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        {...field}
                        mode="multiple"
                        placeholder="Chọn size"
                        bordered={false}
                        options={filteredSize.map((item) => ({
                          value: item,
                          label: item,
                        }))}
                      />
                    )}
                  />
                ) : (
                  <input
                    type=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    defaultValue={"Không có size nào"}
                    placeholder=""
                  />
                )}
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  {...register("description")}
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Add product
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProducts;
