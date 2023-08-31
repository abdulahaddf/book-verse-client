import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/footer/Footer";
import ChatIcon from "../shared/ChatIcon/ChatIcon";
import Alert from "../shared/Alert/Alert";
import UserHandleRoute from "../routes/UserHandleRoute";
import { useUserMessage } from "../hooks/useUserMessage";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Main = () => {
    const { showAlert, setShowAlert, user } = useContext(AuthContext);
    const [messages, userRefetch] = useUserMessage(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            { messages?.role !=='admin' && <UserHandleRoute>
                <Alert />
            </UserHandleRoute>}
            <Outlet></Outlet>
            <ChatIcon></ChatIcon>
            <Footer></Footer>
        </div>
    );
};

export default Main;