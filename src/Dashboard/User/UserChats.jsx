import { useContext, useEffect } from "react";
import UseUserAllChats from "../../hooks/useUserAllChats";
import { AuthContext } from "../../provider/AuthProvider";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { useAllUsersData } from "../../hooks/useAllUsersData";

import logo from '../../../public/logo.png'

const UserChats = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const [userAllChats, userAllChatsRefetch] = UseUserAllChats(user?.email);

    const [allUsersData, allUsersRefetch] = useAllUsersData();


    const findTheChat = userAllChats?.filter(a => a?.chat)


    const Chats = findTheChat?.filter(a => a?.chat?.length > 0);


    const allChats = [...Chats].sort((a, b) => {
        const lastMessageA = a?.chat[a?.chat.length - 1];
        const lastMessageB = b?.chat[b?.chat.length - 1];

        if (!lastMessageA || !lastMessageB) {
            return 0; // Handle cases where messages are missing
        }

        return lastMessageB?.time - lastMessageA?.time;
    });



    // Filter out duplicate entries from allUsersData based on email
    const uniqueUsersData = allUsersData?.filter((user, index, self) =>
        index === self.findIndex((u) => u?.email === user?.email)
    );


    const routeHandler = (data) => {

        if (data?.email) {

            return navigate('/dashboard/userChat')
        }

        navigate(`userToUserChat/${data?._id}`)


    }


    useEffect(() => {
        const refetchInterval = setInterval(() => {
            allUsersRefetch()
            userAllChatsRefetch()

        }, 1000); // Check every 3 seconds

        return () => {
            clearInterval(refetchInterval);
        };
    }, []);

    console.log(allChats)

    return (
        <div className="px-5 md:px-20 lg:px-20 w-full">
            {allChats?.map((a) => (
                <div key={a?._id}>




                    <button onClick={() => routeHandler(a)} className="w-full">

                        <div className="my-10 p-[5px] py-[15px]    space-y-3 overflow-hidden hover:rounded-[0px]  border-b-[2px]  border-r-[2px] hover:bg-gray-200 flex ">
                            <section className="w-[15%] mt-2 pl-2">
                                {uniqueUsersData.map((userData) => {
                                    const otherUserEmail = a?.array?.find((email) => email !== user?.email);
                                    if (userData?.email === otherUserEmail) {
                                        return (
                                            <img
                                                src={userData?.photoURL ? userData?.photoURL : logo} // Assuming 'photoURL' contains the image URL
                                                className="rounded-[100%] h-[60px] w-[60px]"
                                                alt=""
                                                key={userData?.email}
                                            />
                                        );
                                    }
                                    return null;
                                })}
                            </section>
                            <section className="w-[60%] md:w-[70%] lg:w-[70%] pl-[15px] md:pl-0 lg:p-0 space-y-1
                             text-start">
                                {uniqueUsersData.map((userData) => {
                                    const otherUserEmail = a?.array?.find((email) => email !== user?.email);
                                    if (userData?.email === otherUserEmail) {
                                        return (
                                            <p key={userData?.email} className="text-[17px]    font-[500]  text-gray-600">
                                                {userData?.displayName ? userData?.displayName?.slice(0, 30) : 'Books Vers'}</p>
                                        );
                                    }
                                    return null;
                                })}


                                {
                                    a?.chat[a?.chat.length - 1].email === user?.email && <p className="text-[15px] font-[400] text-gray-600">
                                        Your reply: {a?.chat[a?.chat.length - 1]?.text.slice(0, 27)}
                                    </p>
                                }
                                {
                                    a?.chat[a?.chat.length - 1].email !== user?.email && <p className=" text-[15px]  font-[600] text-gray-600">
                                        New text: {a?.chat[a?.chat.length - 1]?.text.slice(0, 27)}
                                    </p>
                                }


                            </section>
                            <section>
                                {a?.chat && a?.chat?.length > 0 && (
                                    <p className="text-[12px] font-[500] text-gray-500 pt-[25px]">
                                        {moment(a?.chat[a?.chat?.length - 1]?.time).format('h:mm:ss a')}
                                    </p>
                                )}
                            </section>
                        </div>

                    </button>

                </div>
            ))}
        </div>
    );
};

export default UserChats;
