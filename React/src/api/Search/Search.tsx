import instance from "../config"
const getSearch = (keyValue: string, page:any, limits: any, sortOption:any)=>{
return instance.get('/productss/search',{
    params:{  keyword: keyValue,
        _page: page,
        _limit: limits,
        _sort: sortOption === 'rating' ? 'rating' : 'priceSale',
        _order: sortOption === "asc" ? "asc" : "desc",
    }
})


}
export {getSearch}