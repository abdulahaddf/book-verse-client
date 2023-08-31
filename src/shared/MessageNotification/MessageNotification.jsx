import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

import logo from '../../../public/logo.png'


const MessageNotification = ({ data}) => {

    const { showAlert, setShowAlert, user } = useContext(AuthContext)

    // console.log(showAlert)



    console.log(data,'sswasdadad')


    return (
        <div className="flex justify-center p-8 fixed z-30 top-[100px] right-4">
            <div className="flex w-64 items-center rounded-lg shadow-lg mb-4  bg-indigo-500 p-4 text-white
            relative">
                <div className="w-64 ">

                    <div className=" flex gap-3 items-center">
                        <img src={data?.name !=='Admin'? {logo} : data?.img} className="w-[50px] h-[50px] rounded-[100%]" alt="" />
                        <h4 className="mb-2 font-bold">{data?.name ==='Admin'? "Book Vers" : data?.name}</h4>
                    </div>
                    <p className="my-10 p-[10px]">{data?.text} ... </p>
                </div>
                <div className="w-12 ">
                    <div className="text-2xl p-2 bg-indigo-600 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                    </div>


                </div>

                <div className=" absolute bottom-0 right-[10px] flex gap-[20px] p-[10px]    ">

                    <Link onClick={()=> setShowAlert(false)}  className=" ">X</Link>
                </div>
                <div className=" absolute bottom-0 left-[10px] flex gap-[20px] p-[10px]  ">

                    <Link  className=" "> View</Link>
                </div>
            </div>
        </div>
    );

};

export default MessageNotification;