import instance from "../config";
const getProducts = (page?: number, limits?: number, sortOption?: any) => {
  return instance.get("/products", {
    params: {
      _page: page,
      _limit: limits,
      _sort: sortOption === "rating" ? "rating" : "priceSale",
      _order: sortOption === "asc" ? "asc" : "desc",
    },
  });
};
const getProduct = (name: string, id: string | number) => {
  return instance.get(`/products/${name}/${id}`);
};
const addProduct = (data: Iproducts) => {
  return instance.post("/products", data);
};
const removeProduct = (id: string | number) => {
  return instance.delete(`/products/${id}`);
};
const editProduct = (id: string | number, data: Iproducts) => {
  return instance.put(`/products/${id}`, data);
};
//color

const getColors = () => {
  return instance.get("/color");
};
//size
const getSizes = () => {
  return instance.get("/size");
};
export {
  getProducts,
  getProduct,
  addProduct,
  getColors,
  getSizes,
  removeProduct,
  editProduct,
};
