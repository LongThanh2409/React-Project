import instance from "../config";

const getProduct_Cate =  (id: string| number) => {
    return instance.get(`/categorys/${id}`)
    }
export {getProduct_Cate}