import { CategorysForm } from "../../interface/categorys";
import instance from "../config";
const getCategorys = () => {
  return instance.get("/categorys");
};
const getCategory = (id: string) => {
  return instance.get("/categorys/" + id);
};
const removeCategory = (id: string) => {
  return instance.delete(`/categorys/${id}`);
};
const AddCategory = (data: CategorysForm) => {
  return instance.post("/categorys", data);
};
const EditCategory = (id: string, data: CategorysForm) => {
  return instance.put("/categorys/" + id, data);
};
export { getCategorys, removeCategory, AddCategory, EditCategory, getCategory };
