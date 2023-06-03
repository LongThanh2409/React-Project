import instance from "../config";
const getProducts =  (page:number,limits:number, sortOption:any) => {
return instance.get("/products",{
    params: {
        _page: page,
        _limit: limits,
        _sort: sortOption === 'rating' ? 'rating' : 'priceSale',
        _order: sortOption === "asc" ? "asc" : "desc",

      },
})
}
const getProduct =  (name: string,id: string| number) => {
    return instance.get(`/products/${name}/${id}`)
    }
export {getProducts, getProduct}