import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { useUserToUserMessageById } from "../../hooks/useUserToUserMessageById";
import UseSingleUser from "../../hooks/useSingleUser";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import moment from "moment";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";

const UserToUserChat = () => {
  const { user, darkMode } = useContext(AuthContext);

  const { id } = useParams();

  const [messages, refetchMessages] = useUserToUserMessageById(id);
  const [myData, myDataRefetch] = UseSingleUser(user?.email);

  const findOtherUser = messages?.array?.find((a) => a !== user?.email);

  const [otherUserData, outherUserRefetch] = UseSingleUser(findOtherUser);

  console.log(otherUserData);

  const buttonHandler = (e) => {
    event.preventDefault();

    let filter = messages?.chat?.filter((a) => a) || [];

    const text = e.target.name.value;

    const chat = [
      ...filter,
      {
        name: myData?.displayName,
        email: myData?.email,
        text: text,
        img: myData?.photoURL,
        time: new Date().getTime(),
      },
    ];

    fetch(
      `https://book-verse-team-project-server.up.railway.app/postChatUserToUser?id=${messages?._id}`,
      {
        method: "POST",

        headers: {
          "content-type": "application/json",
        },

        body: JSON.stringify(chat),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res?.modifiedCount > 0) {
          e.target.reset();

          //   setShowAlert(true)

          refetchMessages();
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const refetchInterval = setInterval(() => {
      refetchMessages();
    }, 3000); // Check every 3 seconds

    return () => {
      clearInterval(refetchInterval);
    };
  }, []);

  const chatContainerRef = useRef(null);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="mt-5 w-full md:w-[50%] lg:w-[50%]   xl:w-[35%]  flex items-center mx-auto">
      <div
        className={
          darkMode
            ? "flex-1 justify-between flex flex-col h-[600px] rounded-2xl  lg:max-w-[800px] md:mx-auto mt-0  border-[1px]  my-5 md:pt-0 "
            : "flex-1 justify-between flex flex-col h-[600px] rounded-2xl  lg:max-w-[800px] md:mx-auto  bg-slate-300  "
        }
      >
        {/* Head chat section  */}
        <div
          className={
            darkMode
              ? "flex items-center  bg-white/10    rounded-t-[15px] relative  border-b-[1px] sm:gap-10 justify-between sm:justify-start p-3"
              : "flex items-center sm:gap-10 justify-between sm:justify-start p-3 bg-gradient-to-r  from-[#82bdd2] from-80% to-cyan-500  rounded-t-2xl relative  "
          }
        >
          <div className=" flex items-center space-x-4">
            <div>
              <img
                src={otherUserData?.photoURL}
                className="w-[60px] h-[60px] rounded-[100%]"
              />
            </div>
            <div className="flex flex-col leading-tight ">
              <p className="mr-3  font-bold text-[20px] text-slate-50">
                {otherUserData?.displayName}
                <HiOutlineChatBubbleLeftRight className=" absolute text-[40px]   right-[7%] top-[20%] " />
              </p>
              <p className=" text-slate-50  text-[14px] mr-3">
                {otherUserData?.email}
              </p>
            </div>
          </div>
        </div>

        <div
          className={
            darkMode
              ? "flex flex-col   justify-end h-full  rounded-b-2xl"
              : "flex flex-col bg-slate-200 justify-end h-full rounded-b-2xl"
          }
        >
          {/* message display section  */}
          <div
            ref={chatContainerRef}
            id="messages"
            className="flex flex-col space-y-4 p-3 overflow-y-auto   overflow-x-hidden scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch max-h-[27rem] "
          >
            {messages?.chat?.map((message, index) => (
              <div key={index}>
                {user?.email !== message?.email ? (
                  <div className="chat-message">
                    <div className="flex items-end">
                      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                        <div>
                          <span
                            className={
                              darkMode
                                ? "px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray  text-white  tooltip  tooltip-right"
                                : "px-4 py-2 rounded-lg inline-block rounded-bl-none bg-blue-400 text-white  tooltip  tooltip-right"
                            }
                            data-tip={moment(message?.time).format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )}
                          >
                            {message?.text}
                          </span>
                        </div>
                      </div>
                      <img
                        src={message?.img}
                        className="w-[30px] h-[30px] rounded-[100%]"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="chat-message">
                    <div className="flex items-end justify-end">
                      <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                        <div>
                          <span
                            className={
                              darkMode
                                ? "px-4 py-2 rounded-lg inline-block rounded-br-none bg-slate-700 text-white  tooltip  tooltip-left"
                                : "px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white tooltip  tooltip-left"
                            }
                            data-tip={moment(message?.time).format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )}
                          >
                            {message?.text}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* foot section  */}
          <div
            className={
              darkMode
                ? "border-t-[1px] border-white px-4 p-2  rounded-b-2xl mb-2 sm:mb-0"
                : "border-t-[2px] border-white px-4 p-2 rounded-b-2xl mb-2 sm:mb-0"
            }
          >
            <form
              onSubmit={buttonHandler}
              className="relative flex  gap-5 items-center "
            >
              <span className="absolute inset-y-0 flex items-center"></span>
              <input
                name="name"
                type="text"
                placeholder="Write your message!"
                className={
                  darkMode
                    ? "w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 border-[1px] rounded-md py-2"
                    : "w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-white rounded-md py-2"
                }
                required
              />

              <button
                className={
                  darkMode
                    ? "inline-flex items-center    justify-center rounded-lg px-4 py-[6px] transition duration-500 ease-in-out text-white border-[1px] focus:outline-none"
                    : "inline-flex items-center justify-center rounded-lg px-4 py-[6px] transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="  ml-[5px] transform rotate-90 "
                  width="20px"
                  height="20px"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserToUserChat;
