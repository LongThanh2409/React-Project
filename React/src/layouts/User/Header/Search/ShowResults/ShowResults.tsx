import { Link } from "react-router-dom"
import Image from "../../../../../components/Image/Image.tsx"
type Props = {
    data: Iproducts
}

const ShowResults = ({data}: Props) => {
  return (
    <Link className="" to={`/detail-product/${data.name}/${data._id}`}>
    <div className="flex items-center h-10 my-3 hover:bg-gray-100 py-3 px-1">

        {/* <img className={cx("avatar")} src={data.avatar} alt={data.avatar} /> */}
      <div className="w-10">  <Image className="w-full object-contain " src={data?.image[0]} alt={data.name} /></div>
        <div className="truncate">

            <h4 className="ml-3 ">
                <span className="">{data.name}</span>
                {/* {data.tick && <FontAwesomeIcon className={cx("check")} icon={faCircleCheck} />} */}
            </h4>
          
        </div>
    </div>
</Link >
  )
}

export default ShowResults