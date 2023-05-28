import { Pagination } from 'antd';
import List_Products from '../../../components/User/ListProducts/List_Products';

const Shop = () => {
  return (
   <>
   <div className=''> 
   <div className="menu-item">

   </div>
   <div className="list-products">
    <List_Products/>
    
   </div>
     <div className='pagination text-center '>
     <Pagination defaultCurrent={2} total={200} />
     </div>
   
   ;</div>
   </>
  )
}

export default Shop