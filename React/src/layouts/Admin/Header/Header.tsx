import Logo from "../../../components/Logo/Logo";
import SidebarMobile from "../SidebarMoblie/SidebarMobile";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <div className="mr-3">
              <Logo />
            </div>
            <div>
              <SidebarMobile />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
