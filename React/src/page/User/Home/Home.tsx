import Banner1 from "../../../components/User/Banner/Banner1"
import List_Products from "../../../components/User/ListProducts/List_Products"
import Main_Banner from "./MainBanner/Main_Banner"


const Home = () => {
  return (
  <>
  <div>
  <div className="main-banner">  <Main_Banner/></div>
<div className="list my-16">
    <div className="text">
      <h2 className="text-5xl text-[#222] text-center font-bold tracking-wider">
        Featured Products
      </h2>
      <p className="text-base text-[#465b52] text-center my-6 opacity-90">
        Summer Collection New Morden Design
      </p>
    </div>
    <div className="list-products text-center">
      <List_Products/>
    </div>
</div>
    <div className="banner1 px-16">
      <Banner1/>
    </div>
  </div>
  </>
  )
}

export default Home