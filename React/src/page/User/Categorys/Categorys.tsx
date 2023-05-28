import { useEffect, useState } from "react";
import { getCategorys } from "../../../api/Categorys/Categorys";
import { Link} from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
const Categorys = () => {
const [categorys, setCategorys] = useState<Icategorys[]>([])

useEffect(()=>{

const fetchCategory = async () => {
try {
    const {data} = await getCategorys()
    setCategorys(data)
} catch (error) {
    
}
}
fetchCategory()
},[])



    const items: MenuProps['items'] = categorys.map((item, index)=>( 
        {
            label:<Link to={`/shop`}>{item.name}</Link>,
            key:index
        }
        ))
// const handleSelectChange = (event: any) => {
//     const selectedValue = event.target.value;
//     navigate(selectedValue)
//   };
  return (
         <Dropdown menu={{items  }}>
           <Space>
             <p className="text-base cursor-pointer">Categorys</p>
             <DownOutlined  />
           </Space>   
       </Dropdown>
  );
};

export default Categorys;