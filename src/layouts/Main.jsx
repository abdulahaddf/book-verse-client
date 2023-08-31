import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import ChatIcon from "../shared/ChatIcon/ChatIcon";
// import Alert from "../shared/Alert/Alert";
// import UserHandleRoute from "../routes/UserHandleRoute";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <UserHandleRoute>
                <Alert />
            </UserHandleRoute> */}
            <Outlet></Outlet>
            <ChatIcon></ChatIcon>
            <Footer></Footer>
        </div>
    );
};

export default Main;