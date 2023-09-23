
import { Link } from "react-router-dom";
import { useAllUsersData } from "../../hooks/useAllUsersData";
import { useContext, useEffect } from "react";
import moment from "moment";
import { AuthContext } from "../../provider/AuthProvider";

const ManageChats = () => {
  const { user, darkMode } = useContext(AuthContext);

  const [allUsersData, allUsersRefetch] = useAllUsersData();

  console.log(allUsersData);

  const filterUser = allUsersData?.filter((a) => a?.role === "user");

  const allChatsUsers = filterUser.filter((a) => a?.chat);

  const allChats = [...allChatsUsers].sort((a, b) => {
    const lastMessageA = a.chat[a.chat.length - 1];
    const lastMessageB = b.chat[b.chat.length - 1];

    if (!lastMessageA || !lastMessageB) {
      return 0; // Handle cases where messages are missing
    }

    return lastMessageB.time - lastMessageA.time;
  });

  useEffect(() => {
    const refetchInterval = setInterval(() => {
      allUsersRefetch();
    }, 1000); // Check every 1 seconds

    return () => {
      clearInterval(refetchInterval);
    };
  }, []);

  return (
  

    <div
      className={
        darkMode
          ? " px-5 md:px-20 lg:px-20 w-[90%]     "
          : " md:px-20 lg:px-20 w-[90%]   "
      }
    >
      <h1 className={darkMode ? "dashboard-heading-dark" : "dashboard-heading"}>
        All Your Chats
      </h1>
      {allChats?.map((a) => (
        <div key={a?._id} className="w-full">
          <Link
            to={`singleChat/${a?._id}`}
            className={
              darkMode
                ? "my-2 p-[5px] py-[15px]    space-y-3 overflow-hidden   rounded-md bg-gray  hover:bg-gray/30 hover:no-underline  flex  shadow-md w-full mx-auto "
                : "my-2 p-[5px] py-[15px]  hover:text-black/70 hover:no-underline   space-y-3 overflow-hidden   rounded-md   hover:bg-[#f3f4f6]  flex shadow-md w-full mx-auto"
            }
          >
            <section className=" w-[15%] mt-2 pl-2 ">
              <span className="indicator">
                <span className="indicator-item indicator-bottom badge badge-xs badge-success left-10 bottom-2 "></span>
                <img
                  src={a?.photoURL}
                  className=" rounded-[100%] h-[60px] w-[60px]"
                  alt=""
                />
              </span>
            </section>

            <section className="w-[60%] md:w-[70%] lg:w-[70%] pl-[50px]  md:pl-0 lg:p-0 space-y-1
                             text-start">
              <p
                className={
                  darkMode
                    ? "text-[15px] font-[400] text-white"
                    : "text-[15px] font-[400] text-gray-600"
                }
              >
                {" "}
                {a?.displayName?.slice(0, 30)}
              </p>

              {a?.role === "Admin" ? (
                a?.chat && a?.chat.length > 0 ? (
                  <p
                    className={
                      darkMode
                        ? "text-[15px] font-[400] text-white"
                        : "text-[15px] font-[400] text-gray-600"
                    }
                  >
                    Your reply: {a?.chat[a?.chat.length - 1]?.text.slice(0, 15)}
                  </p>
                ) : (
                  <p className="text-[25px] font-500 ">No reply available</p>
                )
              ) : a?.chat && a?.chat.length > 0 ? (
                <p
                  className={
                    darkMode
                      ? ` text-[15px] ${a?.chat[a?.chat.length - 1]?.name === "Admin"? "font-[400]":"font-[600]"}  text-white`
                      : ` text-[15px]  ${a?.chat[a?.chat.length - 1]?.name === "Admin"? "font-[400]":"font-[600] "}text-gray-600`
                  }
                >
                  {a?.chat[a?.chat.length - 1]?.name === "Admin"
                    ? "You"
                    : "New text"}
                  :{" "}
                  {`${a?.chat[a?.chat.length - 1]?.text.slice(0, 15)}${
                    a?.chat[a?.chat.length - 1]?.text.length > 15 ? ` ...` : ""
                  }`}
                </p>
              ) : (
                <p
                  className={
                    darkMode
                      ? " text-[15px]  font-[600] text-white"
                      : " text-[15px]  font-[600] text-gray-600"
                  }
                >
                  No new text available
                </p>
              )}
            </section>
      

            <section >
              {a?.chat && a?.chat?.length > 0 && (
                <p
                  className={
                    darkMode
                      ? "text-[12px] font-[500] text-white pt-[25px]"
                      : "text-[12px] font-[500] text-gray-500 pt-[25px]"
                  }
                >
                  {" "}
                  {moment(a?.chat[a?.chat?.length - 1]?.time).format(
                    "h:mm:ss a"
                  )}
                </p>
              )}
            </section>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ManageChats;
