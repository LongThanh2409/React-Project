
import { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
interface DefaultLayoutProps {
  children: ReactNode;
}
const DefaultLayout = ({children}:DefaultLayoutProps) => {
  return (
    <div className="container">
    <div className=' fixed top-0 z-50 bg-slate-200 shadow-xl  w-full  py-3'> 
    <Header />
    </div>
        <div className="content mt-28 xl:mt-20">
            <div className="main m-auto w-screen"> {children} </div>
        </div>
    <Footer/>
    </div>
  )
}

export default DefaultLayout