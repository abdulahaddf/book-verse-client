import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import ChatIcon from "../shared/ChatIcon/ChatIcon";
// import Alert from "../shared/Alert/Alert";
// import UserHandleRoute from "../routes/UserHandleRoute";
// import { useUserMessage } from "../hooks/useUserMessage";
// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";

import PrivateRoute from '../routes/PrivateRoute'


const Main = () => {
    // const { showAlert, setShowAlert, user } = useContext(AuthContext);
    // const [messages, userRefetch] = useUserMessage(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            {/* {(messages?.role !== 'admin' && messages.chat) && (
                <UserHandleRoute>
                    <Alert />
                </UserHandleRoute>
            )} */}
            <Outlet></Outlet>
           <PrivateRoute>
           <ChatIcon></ChatIcon>
           </PrivateRoute>
            <Footer></Footer>
        </div>
    );
};

export default Main;