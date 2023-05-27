
import { ReactNode } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
interface DefaultLayoutProps {
  children: ReactNode;
}
const DefaultLayout = ({children}:DefaultLayoutProps) => {
  return (
    <div className="container">
        <Header />
        <div className="content">
            <div className="main"> {children} </div>
        </div>
    <Footer/>
    </div>
  )
}

export default DefaultLayout