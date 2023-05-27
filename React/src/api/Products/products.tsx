import instance from "../config";
const getProducts =  () => {
return instance.get("/products")
}
export {getProducts}