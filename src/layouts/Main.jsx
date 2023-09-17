import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";
import ChatIcon from "../shared/ChatIcon/ChatIcon";
import NavbarTwo from "../shared/NavbarTwo/NavbarTwo";
import CategoryNav from "../shared/CategoryNav/CategoryNav";
import PrivateRouteWithOutLoading from "../routes/PrivateRouteWithOutLoading";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";

const Main = () => {

  const { darkMode } = useContext(AuthContext);

  return (
    <div className={`${darkMode ? "dark-style" : ""}`}>
      <NavbarTwo></NavbarTwo>
      <CategoryNav></CategoryNav>
      <Outlet></Outlet>
      <PrivateRouteWithOutLoading>
      <ChatIcon></ChatIcon>
      </PrivateRouteWithOutLoading>
      <Footer></Footer>
    </div>
  );
};

export default Main;
