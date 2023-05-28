
const Main_Banner = () => {
  
  return (
    <section
    className="relative  bg-cover bg-center bg-no-repeat mt-16"
    style={{  backgroundImage: "url('../../../../../src/assets/banner.jpg')",
            backgroundPosition:"right",
          
           
           }}
  >
    <div
 
      className="absolute  inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25"
    ></div>
  
    <div
      className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 lg:justify-end"
    >
      <div className="max-w-xl text-center sm:text-left">
        <h4 className="tieude1 text-5xl font-bold sm:text-2xl text-[#222] mb-4">
          Trade-in-offer
        </h4>
        <h2 className="tieude2 block font-bold text-6xl text-[#222]">
          Super value deals
        </h2>
        <h1
          className="tieude3 block font-bold text-7xl text-[#088178] tracking-normal"
        >
          On All Products
        </h1>
        <p className="tieude4 mt-4 max-w-lg sm:text-xl/relaxed opacity-60 my-4">
          Save more with coupons & up to
          <span className="tieude5 relative text-white text-9xl">70%</span>
        </p>
        <div className=" tieude3 mt-8 flex flex-wrap gap-4 text-center">
          <a
            href="#"
            className="block w-full rounded-full bg-teal-600 px-12 py-3 text-xl font-medium text-yellow-300 hover:text-yellow-400 shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-700 sm:w-auto"
            >Shop now</a
          >
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Main_Banner