import instance from "../config";
const getCategorys=  () => {
return instance.get("/categorys")
}
export {getCategorys}