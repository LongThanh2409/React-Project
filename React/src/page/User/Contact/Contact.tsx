
import { Image } from 'antd';
const Contact = () => {
 
  return <>
  <div className="p-16 mt-10  bg-gray-50">
  <div className="p-8 bg-white shadow-2xl  mt-24">
    <div className="">
    
      
        <div
          className="  mx-auto  -mt-24 flex items-center justify-center text-indigo-500 ">
       
          <Image
         width={160}
            height={160}
         className='rounded-full'
       
       src="error"
       fallback="https://media-cdn-v2.laodong.vn/storage/newsportal/2021/6/24/923749/Taylor-Swift-Nu-Nghe.jpg"
  />
      </div>
    </div>
    <div className=" text-center border-b pb-12">
      <div className="mt-10 text-center border-b pb-12">
        <div className="flex items-center justify-center">
          <form className="max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Name
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                  email
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                  Password
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
                <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
              </div>
            </div>

          </form>
        </div>
        <div className="mt-12 flex flex-col justify-center">
      <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center"><button
        className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transhtmlForm hover:-translate-y-0.5">
        sửa</button> <button
        className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transhtmlForm hover:-translate-y-0.5">
        Thông tin</button> </div>
  </div>

  </div>
  </div>
  </div>
  </div>

  </>
}

export default Contact