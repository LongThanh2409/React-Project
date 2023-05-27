import DefaultLayout from "../layouts/User/DefaultLayout/DefaultLayout";
import About from "../page/User/About/About";
import Signin from "../page/User/Auth/Signin/Signin";
import Signup from "../page/User/Auth/Signup/Signup";
import Blog from "../page/User/Blog/Blog";
import Cart from "../page/User/Cart/Cart";
import Contact from "../page/User/Contact/Contact";
import Home from "../page/User/Home/Home";
import Shop from "../page/User/Shop/Shop";

import config from "./config";
const router = [
{path:config.home, component: Home, layout: DefaultLayout},
{path:config.shop, component: Shop, layout: DefaultLayout},
{path:config.cart, component: Cart, layout: DefaultLayout},
{path:config.about, component:About, layout: DefaultLayout },
{path:config.blog, component:Blog, layout: DefaultLayout},
{path:config.contact, component:Contact, layout: DefaultLayout},
{path:config.signin, component: Signin, layout:null},
{path:config.signup, component: Signup, layout:null},
]
export default router