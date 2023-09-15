

import { Link, NavLink, useNavigate } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { TbBooks, TbDashboard } from "react-icons/tb";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";
import logo from "../../../public/main-logo.png"
import darkLogo from "../../../public/dark.png"
import { BsCart3 } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import SearchBar from "../../pages/home/SearchBar/SearchBar";
import SearchResultsList from "../../pages/home/SearchBar/SearchResultsList";
import './NavbarTwo.css';
import Headroom from "react-headroom";
import { FaBook, FaBookReader, FaHome } from "react-icons/fa";
import { RiArrowDownSLine} from "react-icons/ri";




const Navbar = () => {

  

  // const handleToggle = (e) => {
  //   if (e.target.checked) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };




  const { addToCartData, user, logOut ,darkMode,setDarkMode} = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [results, setResults] = useState([]);

  //  Tonmoy start

  // const handleToggle = () => {
  //   setDarkMode((prevDarkMode) => !prevDarkMode);

    
  // };

  //  Tonmoy end


  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDrawer, setOpenDrawer]= useState(false);

  const [closeButtonVisible, setCloseButtonVisible] = useState(drawerOpen);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    setCloseButtonVisible(drawerOpen);
    
    if(drawerOpen === true){
     return setOpenDrawer(false)
    }if(drawerOpen === false){
     return setOpenDrawer(true)
    }

  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setCloseButtonVisible(false);
  };

const close = () =>{
setOpenDrawer(false);
}
// console.log(openDrawer)







  const navItems = (
    <>
    <li className="my-8">
      <div>
      <img className="w-[40px] rounded-full " src={user?.photoURL} />
      <span className=' text-base font-bold'>{user?.displayName}</span>
      <li className=" text-xl font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red" : "no-underline"
          }
          to="/addToCart"
        >
          <span className="mt-[5px]">
            <BsCart3 />
          </span>
          <span className="indicator-item badge bg-red text-white mt-[5px]">
            {addToCartData ? addToCartData.length : 0}
          </span>
        </NavLink>
      </li>
      </div>
    </li>
   
      <li className=" text-base font-bold ">
       
      <NavLink
  className={({ isActive }) => ({
    textDecoration: "none",
    
    color: isActive ? "red" : "inherit", // Change color accordingly
  })}
  to="/"
>
<FaHome></FaHome>Book Verse Home
</NavLink>

      </li>
      <hr className="mb-2" />
      <li className=" text-base font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red" : "no-underline"
          }
          to="/all-books"
        >
         <FaBook></FaBook> All Books
        </NavLink>
      </li>
      <li className=" text-base font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red" : "no-underline"
          }
          to="/fd"
        >
          <FaBookReader></FaBookReader>Popular Books
        </NavLink>
      </li>
      <li className=" text-base font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red" : "no-underline"
          }
          to="/old-books"
        >
          <TbBooks></TbBooks>Old Books
        </NavLink>
       
      </li>
      <hr className="m-2"/>
      <li className=" text-base font-bold">
        {user ? (
          isAdmin ? (
            <NavLink
              className={({ isActive }) =>
                isActive ? " text-red" : "no-underline"
              }
              to="/dashboard/adminHome"
            >
             <TbDashboard></TbDashboard> Dashboard
            </NavLink>
          ) : (
            <NavLink
              className={({ isActive }) =>
                isActive ? " text-red" : "no-underline"
              }
              to="/dashboard/userHome"
            >
             <TbDashboard></TbDashboard> Dashboard
            </NavLink>
          )
        ) : (
          ""
        )}
      </li>
          <hr className="m-2"/>
      <li className=" text-base font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red" : "no-underline"
          }
          to="/dashboard/userHome"
        >
          <CgProfile></CgProfile>My Profile
        </NavLink>
       
      </li>
    </>
  );


  //  Tonmoy start

  const  dashboardNavigate=useNavigate()

  const  adminNavigate=useNavigate()



const dashBoardHandler=()=>{

  dashboardNavigate("/dashboard/adminHome")

}
const myProfileHandler=()=>{

  adminNavigate("/dashboard/userHome")

}

  // Tonmoy end

  return (
  <Headroom className="" style={{
    webkitTransition: 'all .5s ease-in-out',
    mozTransition: 'all .5s ease-in-out',
    oTransition: 'all .5s ease-in-out',
    transition: 'all .5s ease-in-out'
  }}>
     <div className={` z-50 ${darkMode ? "bg-[#131313]" : 'bg-white' } shadow-sm`}>
     <div className={`navbar  ${darkMode ? "bg-[#131313]" :"bg-base-100" }  w-11/12 mx-auto inset-0 z-20 sticky`}>
      <div className="navbar-start ">
        <div className="drawer lg:hidden z-20 w-7 relative ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle " checked={drawerOpen}
            onChange={toggleDrawer}  />
          <div className="drawer-content">
            {/* Page content here */}
          <div onClick={close}>
        {openDrawer &&   <button 
              className={closeButtonVisible ? "close-button" : "visible"}
              onClick={closeDrawer}
             
              style={{
                position: "absolute",
                top: 0,
                left: 230,
                zIndex: 30,
              }}
            >
             <XCircleIcon className="w-8"></XCircleIcon>
            </button>}
            
          </div>
        


            <label htmlFor="my-drawer" className="">
              <Bars3Icon onClick={()=>setOpenDrawer(true)} className="w-[25px] mx-0"></Bars3Icon>
            </label>

           


          </div>
          <div className="drawer-side ">
            <label htmlFor="my-drawer" className="drawer-overlay "></label>
            <ul className={darkMode?"menu p-4 w-80 h-full  bg-[#2B2B2B] border-[1px] text-base-content":"menu p-4 w-80 h-full bg-base-200 text-base-content"}>
              <div className="flex justify-center">
                <Link to="/" className="w-[150px]  ">
                {darkMode? <img className="w-32 " src="/dark.png" alt="" />: 
                <img className="w-32 " src="/main-logo.png" alt="" />}
                </Link>
              </div>
              {/* Sidebar content here */}
              <div className={darkMode?'text-white':''}>{navItems}</div>
            </ul>
          </div>
        </div>



     <div className="">
     <div className=" justify-center items-center ">


<div className="  mx-auto ">
 <Link to="/" >
  {darkMode? <img className="w-[99px] h-[30px] lg:w-[200px] lg:h-[50px]"  src={darkLogo} alt="" />:
   <img className="w-[99px] h-[30px] lg:w-[200px] lg:h-[50px]"  src={logo} alt="" />}
 </Link>
 </div>

</div>


     </div>

      </div>
      {/* ... rest of the code */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">

{/* trigger="hover" */}


       <div className="">




       <div className="mx-auto flex flex-col items-center w-[800px]  relative z-10">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>


      
          {/* {navItems} */}
         
       </div>




        </ul>
      </div>
      <div className="navbar-end ">

     <div className="flex mr-2">
      
     <label className="swap swap-rotate ">
          {/* this hidden checkbox controls the state */}
          {/* <input type="checkbox" onClick={handleToggle} /> */}

          {/* sun icon */}
         
         {/* <button onClick={handleToggle}>    
           
           {darkMode===true &&    <svg
            className="swap-on fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg> 
           
          }

          {darkMode===false && <svg
           className="swap-off fill-current w-6 h-6"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
         >
           <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
         </svg>}
           
          </button> */}

          
         {darkMode===true &&    <svg  onClick={()=>setDarkMode(false)} fill="#ffffff" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>}


         
         {darkMode===false &&    <svg  onClick={()=>setDarkMode(true)} fill="#000000" width="20px" height="20px" viewBox="0 0 35 35" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"/></svg>}
         
           
          {/* moon icon */}
         
        </label>
     
     </div>

     

      {user ? (
         <div className=" dropdown dropdown-hover ">
  
   
     
      
         <label tabIndex={0} className="flex border rounded-lg px-3 py-1 m-1 justify-center items-center"> <div className="flex items-center">
         
         <img className="w-[30px] rounded-full mr-1 sm:w-[28px]" src={user?.photoURL}  />
         {/* <span className='whitespace-nowrap text-base mr-1 truncate hidden sm:inline md:inline lg:inline'> {user?.displayName}</span> */}
         <span className='whitespace-nowrap text-base mr-1 hidden sm:inline md:inline lg:inline'>
     {user?.displayName ? user.displayName.split(' ')[0] : ''}
     
   </span>
         {/* <span className="">▼</span> */}
         <span className=""><RiArrowDownSLine className=''></RiArrowDownSLine></span>
           </div></label>
         <ul tabIndex={0} className={`dropdown-content z-[1]  menu p-2 shadow ${darkMode===true?' bg-black 90 text-white ':'bg-base-100' } rounded-box w-52`}>
           <li>
             <a href="/dashboard/userHome" className={`${darkMode? 'hover:text-[#10aade]  hover:no-underline':'justify-between hover:no-underline'}`}>
               My Profile
               <span className=""></span>
             </a>
           </li>
           <li >
             {user ? (
               isAdmin ? (
                
                  <a onClick={dashBoardHandler}  className={`${darkMode? 'hover:text-[#10aade] hover:no-underline':'no-underline'}`}
                   
                   >
                     Dashboard
                  </a>
                  
                
               ) : (
                
                <a onClick={myProfileHandler}  className={`${darkMode? 'hover:text-[#10aade] hover:no-underline':'no-underline'}`}
                   
                 >
                   Dashboard
                </a>
                
              
               )
             ) : (
               ""
             )}
           </li>
           {/* <li><a className={` ${darkMode?'hover:text-[#10aade]  hover:no-underline':'hover:no-underline' } `}>Settings</a></li> */}
           <li><a className={` ${darkMode?'hover:text-[#10aade]  hover:no-underline':'hover:no-underline' } `} onClick={logOut}>Logout</a></li>
         </ul>
       
      
     </div>
//   <details className=" dropdown cursor-pointer">
  
   
     
      
//       <summary className="flex border rounded-lg px-3 py-1 m-1 justify-center items-center"> <div className="flex items-center">
      
//       <img className="w-[30px] rounded-full mr-3 " src={user?.photoURL}  />
//       {/* <span className='whitespace-nowrap text-base mr-1 truncate hidden sm:inline md:inline lg:inline'> {user?.displayName}</span> */}
//       <span className='whitespace-nowrap text-base mr-1 hidden sm:inline md:inline lg:inline'>
//   {user?.displayName ? user.displayName.split(' ')[0] : ''}
// </span>
//       {/* <span className="">▼</span> */}
//       <span className=""><RiArrowDownSLine className=''></RiArrowDownSLine></span>
//         </div></summary>
//       <ul className="mt-3 z-[1] p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
//         <li>
//           <a href="/dashboard/userHome" className="justify-between hover:no-underline">
//             My Profile
//             <span className=""></span>
//           </a>
//         </li>
//         <li >
//           {user ? (
//             isAdmin ? (
//               <NavLink
//                 className={({ isActive }) =>
//                   isActive ? " text-red hover:no-underline" : "hover:no-underline"
//                 }
//                 to="/dashboard/adminHome"
//               >
//                 Dashboard
//               </NavLink>
//             ) : (
//               <NavLink
//                 className={({ isActive }) =>
//                   isActive ? " text-red hover:no-underline" : "no-underline"
//                 }
//                 to="/dashboard/userHome"
//               >
//                 Dashboard
//               </NavLink>
//             )
//           ) : (
//             ""
//           )}
//         </li>
//         <li><a className="hover:no-underline">Settings</a></li>
//         <li><a className="hover:no-underline" onClick={logOut}>Logout</a></li>
//       </ul>
    
   
//   </details>
) : (
  <Link to="/login" className={darkMode?" btn-custom-dark":"btn-custom"}>
    Login
  </Link>
)}





        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red" : "no-underline"
          }
          to="/addToCart"
        >
         <div className="flex ">
         <span className=" ml-[15px] text-3xl ">
            <BsCart3 />
          </span>
          <span className="indicator-item badge  bg-red text-white mt-[5px]">
            {addToCartData ? addToCartData.length : 0}
          </span>
         </div>
        </NavLink>
    

      </div>
      

    </div>
    <div>
       <div className=" mx-auto lg:hidden flex flex-col items-center w-11/12 z-10   relative ">
 <SearchBar setResults={setResults} />
 {results && results.length > 0 && <SearchResultsList results={results} />}
</div>
    </div>
   </div>
  </Headroom>
  );
};



export default Navbar;
