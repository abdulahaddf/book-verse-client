import { useEffect } from "react";

import MessageNotification from "../MessageNotification/MessageNotification";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useUserMessage } from "../../hooks/useUserMessage";
import { useState } from "react";


const Alert = () => {

    const { showAlert, setShowAlert, user } = useContext(AuthContext);

    // const [adminData, setAdminData] = useState([])
    // const [userData, setUserData] = useState([])




    // const [messages, userRefetch] = useUserMessage(user?.email);

    const userDataByLocalStorage = localStorage.getItem('userData');

    const userData = JSON.parse(userDataByLocalStorage)

    const adminDataByLocalStorage = localStorage.getItem('adminData')

    const adminData = JSON.parse(adminDataByLocalStorage)

    // setUserData(userDatas)

    // setAdminData(adminDatas)


    console.log(adminData, 'admin')
    console.log(userData, 'user')

    const messages = adminData || userData;




    let data = [];



    if (messages.chat && messages.chat.length > 0) {
        // console.log(messages.chat[messages.chat.length - 1].text);

        data = messages.chat[messages.chat.length - 1]
    } else {
        console.log("No chat messages available.");
    }




    // useEffect(() => {
    //     const refetchInterval = setInterval(() => {


         


    //     }, 3000); // Check every 5 seconds

    //     return () => {
    //         clearInterval(refetchInterval);
    //     };
    // }, []);


    //   console.log(messages,'tonu')


    return (
        <div className="App">
            {showAlert && (
                <MessageNotification data={data} />
            )}

        </div>
    );



};

export default Alert;