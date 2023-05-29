
import MenuItem from "./MenuItem/MenuItem"

const Menu = ({ onClick }: { onClick: () => void }) => {

  return (
    <ul className=" flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-slate-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <MenuItem onClick={onClick}  />
  </ul>
  )
}

export default Menu