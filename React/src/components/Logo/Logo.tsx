import { Link } from "react-router-dom"
import config from "../../routes/config"

const Logo = () => {
  return (
    <Link to={config.home} className="flex items-center w-32">
    <img src="https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_Product_Default.svg" className="mr-3 w-full" alt="Flowbite Logo"/>

</Link>
  )
}

export default Logo