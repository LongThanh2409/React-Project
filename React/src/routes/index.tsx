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

import config from "./config";
const router = [
{path:config.home, component: Home, layout: DefaultLayout},
{path:config.shop, component: Shop, layout: DefaultLayout},
{path:config.cart, component: Cart, layout: DefaultLayout},
{path:config.about, component:About, layout: DefaultLayout },
{path:config.blog, component:Blog, layout: DefaultLayout},
{path:config.contact, component:Contact, layout: DefaultLayout},
{path:config.search, component: SearchResults, layout:DefaultLayout},
{path:config.detail_product, component: Detail_Product, layout:DefaultLayout},
{path:config.products_category, component: Categorys_product, layout:DefaultLayout},
{path:config.signin, component: Signin, layout:null},
{path:config.signup, component: Signup, layout:null},

]
export default router