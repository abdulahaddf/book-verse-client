import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import NavbarTwo from "../shared/NavbarTwo/NavbarTwo";
import CategoryNav from "../shared/CategoryNav/CategoryNav";


const Main = () => {
    return (
        <div>
            <NavbarTwo></NavbarTwo>
            <CategoryNav></CategoryNav>
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;