// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAllUsersData } from "../../hooks/useAllUsersData";
import { useEffect } from "react";


const ManageChats = () => {


  // useEffect(() => {
  //   fetch(`https://book-verse-server-phi.vercel.app/allUserData`)
  //     .then((res) => res.json())
  //     .then((res) => setAllData(res))
  //     .catch((error) => console.log(error));
  // }, []);


  const [allUsersData, allUsersRefetch] = useAllUsersData()

  console.log(allUsersData)




  const filterUser = allUsersData?.filter((a) => a?.role === 'user');

  const allChatsUsers = filterUser.filter(a => a?.chat)







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
      allUsersRefetch()


    }, 3000); // Check every 3 seconds

    return () => {
      clearInterval(refetchInterval);
    };
  }, []);


  return (


    <div className="px-20  grid md:grid-cols-3 lg:grid-cols-3 gap-10 w-full   ">
      {allChats?.map((a) => (
        <div style={{ boxShadow: '10px 10px 10px black' }}
          key={a?._id}
          className="my-10 p-[20px] space-y-3  rounded-tr-[50px] rounded-bl-[50px] overflow-hidden  
         
          outline  hover:scale-105 duration-[1s]  hover:rounded-tr-[0px] hover:rounded-bl-[0px] 
          "
        >

          <div className=" flex justify-center mb-5">
            <img src={a?.photoURL} className=" rounded-[100%] h-[100px] w-[100px]" alt="" />
          </div>
          <p className="text-20px font-400   font-[500]">Name: {a?.displayName?.slice(0,30)}</p>

          {a?.role === 'Admin' ? (
            a?.chat && a?.chat.length > 0 ? (
              <p className="text-25px font-500  text-[500] font-[500]">
                Your reply: {a?.chat[a?.chat.length - 1]?.text.slice(0,27)}
              </p>
            ) : (
              <p className="text-25px font-500 ">No reply available</p>
            )
          ) : (
            a?.chat && a?.chat.length > 0 ? (
              <p className="text-15px font-700 font-[500]">
                {a?.chat[a?.chat.length - 1]?.name === 'Admin' ? 'You' : 'New text'} : {a?.chat[a?.chat.length - 1]?.text.slice(0,27)}
              </p>
            ) : (
              <p className="text-15px font-700 ">No new text available</p>
            )
          )}

          <div className="mb-5 mt-20  w-full">
            <Link to={`singleChat/${a?._id}`} className=" w-full text-center rounded-[10px]  font-[500]
            group relative inline-block overflow-hidden border border-gray-900 px-8 py-1 focus:outline-none focus:ring">


              <span
                className="absolute inset-y-0 left-0 w-[50px] bg-gray-900 transition-all group-hover:w-full group-active:bg-indigo-500  duration-[1s] "
              ></span>

              <span
                className="relative text-sm font-medium text-gray-900 transition-colors group-hover:text-white"
              >
                View
              </span>



            </Link>
          </div>


        </div>
      ))}
    </div>


  );
};

export default ManageChats;
