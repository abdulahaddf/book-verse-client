import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import ChatIcon from "../shared/ChatIcon/ChatIcon";
// import Alert from "../shared/Alert/Alert";
// import UserHandleRoute from "../routes/UserHandleRoute";
// import { useUserMessage } from "../hooks/useUserMessage";
// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";
import NavbarTwo from "../shared/NavbarTwo/NavbarTwo";
import CategoryNav from "../shared/CategoryNav/CategoryNav";
import PrivateRouteWithOutLoading from "../routes/PrivateRouteWithOutLoading";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";






const Main = () => {
    
    // const { showAlert, setShowAlert, user } = useContext(AuthContext);
    // const [messages, userRefetch] = useUserMessage(user?.email);
    const { darkMode} = useContext(AuthContext);

    
    return (
        <div className={`${darkMode?'dark-style':''}`} >
            <NavbarTwo></NavbarTwo>
            <CategoryNav></CategoryNav>
            {/* <Navbar></Navbar> */}
            {/* {(messages?.role !== 'admin' && messages.chat) && (
                <UserHandleRoute>
                    <Alert />
                </UserHandleRoute>
            )} */}
            <Outlet></Outlet>
            <PrivateRouteWithOutLoading>
                <ChatIcon></ChatIcon>
            </PrivateRouteWithOutLoading>


            <Footer></Footer>
        </div>
    );
};

export default Main;