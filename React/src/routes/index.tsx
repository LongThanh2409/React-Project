import config from "./config";
import config_Admin from "./admin_config";
//User
import DefaultLayout from "../layouts/User/DefaultLayout/DefaultLayout";
import About from "../page/User/About/About";
import Signin from "../page/User/Auth/Signin/Signin";
import Signup from "../page/User/Auth/Signup/Signup";
import Blog from "../page/User/Blog/Blog";
import Cart from "../page/User/Cart/Cart";
import Categorys_product from "../page/User/CategorysProducts/Categorys_product";
import Contact from "../page/User/Contact/Contact";
import Detail_Product from "../page/User/DetailProduct/Detail_Product";
import Home from "../page/User/Home/Home";
import SearchResults from "../page/User/SearchResults/SearchResults";
import Shop from "../page/User/Shop/Shop";

//Admin

import LayoutAdmin from "../layouts/Admin/DefaultLayoutAdmin/LayoutAdmin";
import ProductsAdmin from "../page/Admin/Products/ProductsAdmin";
import CategorysAdmin from "../page/Admin/Categorys/CategorysAdmin";
import AddProducts from "../page/Admin/CRUD/Products/AddProducts";
import EditProducts from "../page/Admin/CRUD/Products/EditProducts";
import AddCategorys from "../page/Admin/CRUD/Categorys/AddCategorys";
import EditCategorys from "../page/Admin/CRUD/Categorys/EditCategorys";
import Users from "../page/Admin/Users/Users";
import EditUser from "../page/Admin/CRUD/Users/EditUser";
import AddUser from "../page/Admin/CRUD/Users/AddUser";
import UsersAdmin from "../page/Admin/Users/UsersAdmin";

const router = [
  { path: config.home, component: Home, layout: DefaultLayout },
  { path: config.shop, component: Shop, layout: DefaultLayout },
  { path: config.cart, component: Cart, layout: DefaultLayout },
  { path: config.about, component: About, layout: DefaultLayout },
  { path: config.blog, component: Blog, layout: DefaultLayout },
  { path: config.contact, component: Contact, layout: DefaultLayout },
  { path: config.search, component: SearchResults, layout: DefaultLayout },
  {
    path: config.detail_product,
    component: Detail_Product,
    layout: DefaultLayout,
  },
  {
    path: config.products_category,
    component: Categorys_product,
    layout: DefaultLayout,
  },
  // Signin and Signup
  { path: config.signin, component: Signin, layout: null },
  { path: config.signup, component: Signup, layout: null },
  //Admin
  { path: config_Admin.home, component: ProductsAdmin, layout: LayoutAdmin },
  {
    path: config_Admin.products,
    component: ProductsAdmin,
    layout: LayoutAdmin,
  },
  {
    path: config_Admin.category,
    component: CategorysAdmin,
    layout: LayoutAdmin,
  },
  {
    path: config_Admin.add_product,
    component: AddProducts,
    layout: LayoutAdmin,
  },
  {
    path: `${config_Admin.edit_product}/:id`,
    component: EditProducts,
    layout: LayoutAdmin,
  },
  {
    path: config_Admin.add_category,
    component: AddCategorys,
    layout: LayoutAdmin,
  },
  {
    path: `${config_Admin.edit_category}/:id`,
    component: EditCategorys,
    layout: LayoutAdmin,
  },
  {
    path: `${config_Admin.users}`,
    component: Users,
    layout: LayoutAdmin,
  },
  {
    path: `${config_Admin.users_admin}`,
    component: UsersAdmin,
    layout: LayoutAdmin,
  },
  {
    path: `${config_Admin.edit_user}/:id`,
    component: EditUser,
    layout: LayoutAdmin,
  },
  {
    path: config_Admin.add_user,
    component: AddUser,
    layout: LayoutAdmin,
  },
];
export default router;
