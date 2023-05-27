
const Banner1 = () => {
  return (
    <section id="page-header" 
    className="w-full h-[40vh] flex items-center justify-center"
    style={{  
        backgroundImage: "url('../../../../../src/assets/banner1.jpg')",
        backgroundSize: "cover",
    }}
    >     
    
   <div className="text-center flex flex-col items-center  ">
        <h4 className="text-white text-lg font-medium">Repair Services</h4>
        <h2 className="text-3xl text-white py-5 font-medium">Up to <span className="text-red-600">70%Off</span> -Allt-Shirts&amp;Accessories</h2>
        <button className="normal p-4 bg-white rounded-md font-medium hover:bg-[#07a6ac] hover:text-white transition duration-500 ease-in-out"> Explore More</button>
   </div>

</section>

  )
}

export default Banner1