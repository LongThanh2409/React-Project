import instance from "../config";
const getProducts =  () => {
return instance.get("/products")
}
const getProduct =  (name: string,id: string| number) => {
    return instance.get(`/products/${name}/${id}`)
    }
export {getProducts, getProduct}