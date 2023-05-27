import instance from "../config"
const getSearch = (keyValue: string)=>{
return instance.get('/productss/search',{
    params:{  keyword: keyValue }
})


}
export {getSearch}