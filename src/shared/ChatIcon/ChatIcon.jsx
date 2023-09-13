
import { BsChatSquareDotsFill } from 'react-icons/bs';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';





const ChatIcon = () => {

    const [userData,setUserData]=useState()

    const {user,darkMode} = useContext(AuthContext);

    const navigate=useNavigate();

    useEffect(() => {

        fetch(`https://book-verse-server-phi.vercel.app/singleUserDataByEmail/${user?.email}`)
            .then(res => res.json())
            .then(res => setUserData(res))
            .catch(error => console.log(error))

    }, [user])

    // console.log(userData,'tonmoy')

 const chatHandler=()=>{

  if(!user){

    return   Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please Login",
        showConfirmButton: false,
        timer: 1500,
      });
  }

  
  if(userData?.role ==='admin'){

    return navigate("/dashboard/manageChats")
  }
 

 navigate('/dashboard/userChat')


 }

//  console.log(userData)


    return (
        <div className='fixed z-30 bottom-[30px] right-4'>

           

            <div onClick={chatHandler} className={darkMode?'bg-white/90 rounded-full w-16 h-16 flex justify-center items-center':'bg-black  rounded-full w-16 h-16 flex justify-center items-center'}>
               <button>
               <BsChatSquareDotsFill className={darkMode?'text-black text-xl':'text-white text-xl'} />
               </button>
            </div>
        </div>
    );
};

export default ChatIcon;