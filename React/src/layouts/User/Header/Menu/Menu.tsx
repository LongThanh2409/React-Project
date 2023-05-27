
import { ReactNode } from "react"
import MenuItem from "./MenuItem/MenuItem"
interface MenuProps {
MenuItem: ReactNode
}
const Menu = () => {

  return (
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-slate-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <MenuItem />
  </ul>
  )
}

export default Menu