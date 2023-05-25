import About from "../page/About";
import Blog from "../page/Blog";
import Cart from "../page/Cart";
import Home from "../page/Home";
import Shop from "../page/Shop";

const router = [
{path:'/', component: Home},
{path:'/shop', component: Shop},
{path:'/cart', component: Cart},
{path:'/about', component:About },
{path:'/blog', component:Blog}
]
export default router