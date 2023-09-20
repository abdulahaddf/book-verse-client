

import { Link, NavLink, useNavigate } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { TbBooks, TbDashboard, TbMoodKid } from "react-icons/tb";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";
import logo from "../../../public/main-logo.png"
import darkLogo from "../../../public/dark.png"
import darkLogo2 from "../../../public/dark2.png"
import { BsCart3 } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import SearchBar from "../../pages/home/SearchBar/SearchBar";
import SearchResultsList from "../../pages/home/SearchBar/SearchResultsList";
import './NavbarTwo.css';
import Headroom from "react-headroom";
import { FaBook, FaBookReader, FaHome, FaSignOutAlt } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { ImBooks } from "react-icons/im";




const Navbar = () => {



  // const handleToggle = (e) => {
  //   if (e.target.checked) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };




  const { addToCartData, user, logOut, darkMode, setDarkMode } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [results, setResults] = useState([]);

  //  Tonmoy start

  // const handleToggle = () => {
  //   setDarkMode((prevDarkMode) => !prevDarkMode);


  // };

  //  Tonmoy end


  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const [closeButtonVisible, setCloseButtonVisible] = useState(drawerOpen);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    setCloseButtonVisible(drawerOpen);

    if (drawerOpen === true) {
      return setOpenDrawer(false)
    } if (drawerOpen === false) {
      return setOpenDrawer(true)
    }

  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setCloseButtonVisible(false);
  };

  const close = () => {
    setOpenDrawer(false);
  }
  // console.log(openDrawer)


//  dark button Tonmoy Start


const toggleDarkMode = () => {
  const newDarkMode = !darkMode;
  setDarkMode(newDarkMode);
  localStorage.setItem('darkMode', newDarkMode); // Store the state in local storage
};

useEffect(() => {
  if (darkMode) {
    // Apply dark mode styles
    document.body.classList.add('dark-mode');
  } else {
    // Apply light mode styles
    document.body.classList.remove('dark-mode');
  }
}, [darkMode]);

//  dark button Tonmoy end




  const navItems = (
    <>
      <li className="my-8">
        <div className={` ${darkMode ? 'hover:text-[#10aade]  hover:no-underline text-base font-bold flex justify-between' : 'hover:no-underline text-base font-bold flex justify-between'} `}>
          {
            user? (
              <div className="flex justify-center items-center">
          <img className="w-[40px] rounded-full " src={user?.photoURL} />
          <span className={` ${darkMode ? 'hover:text-[#10aade]  hover:no-underline text-base font-bold ml-3' : 'hover:no-underline text-base font-bold ml-3'} `}>{user?.displayName}</span>
          </div>
            ): 
              (
                  <Link to="/login" className={darkMode?"btn bg-black/0 text-white btn-sm normal-case ps-5 pe-0 rounded-3xl hover:no-underline hover:text-cyan-700":"btn bg-[#10aade] text-white btn-sm normal-case ps-5 pe-0 rounded-3xl hover:no-underline hover:text-cyan-700"}>
                    {/* hidden  md:hidden lg:hidden xl:inline xxl:inline */}
           <span className=" " > Sign IN</span> <span className="rounded-full p-1 bg-white"><FaSignOutAlt className={darkMode?"bg-white text-[#10aade] text-xl rounded-full":"bg-white text-[#10aade] text-xl rounded-full"}/></span> 
          </Link>
              )
          }

        
        
     
          
      
         <div>
         <li className=" text-xl font-bold">
            <Link
              
              className={` ${darkMode ? 'hover:text-[#10aade]  hover:no-underline ' : 'hover:no-underline '} `}
              
              to="/addToCart"
            >
              <span className="mt-[5px]">
                <BsCart3 />
              </span>
              <span className="indicator-item badge bg-red text-white mt-[5px]">
                {addToCartData ? addToCartData.length : 0}
              </span>
            </Link>
          </li>
         </div>
        </div>
      </li>

      <li className=" text-base font-bold ">

        <NavLink
         className={` ${darkMode ? 'hover:text-[#10aade]  hover:no-underline text-base font-bold' : 'hover:no-underline text-base font-bold'} `}
           
          to="/"
        >
          <FaHome></FaHome>Book Verse Home
        </NavLink>

      </li>
      <hr className="mb-2 mt-2" />
      <li className=" text-base font-bold">
        <NavLink
        className={` ${darkMode ? 'hover:text-[#10aade]  hover:no-underline text-base font-bold ' : 'hover:no-underline text-base font-bold'} `}
          
          to="/all-books"
        >
          <FaBook></FaBook> All Books
        </NavLink>
      </li>
      <li className=" text-base font-bold">
        <NavLink
        className={` ${darkMode ? 'hover:text-[#10aade]  hover:no-underline text-base font-bold' : 'hover:no-underline text-base font-bold'} `}
           
          to="/allBestSelling"
        >
          <ImBooks></ImBooks>Best Selling Books
        </NavLink>
      </li>
      <li className=" text-base font-bold">
        <NavLink
        className={` ${darkMode ? 'hover:text-[#10aade]  hover:no-underline text-base font-bold' : 'hover:no-underline text-base font-bold'} `}
           
          to="/allRecentSelling"
        >
          <FaBookReader></FaBookReader>Recent Selling Books
        </NavLink>
      </li>
      <li className=" text-base font-bold">
        <NavLink
        className={` ${darkMode ? 'hover:text-[#10aade]  hover:no-underline text-base font-bold' : 'hover:no-underline text-base font-bold'} `}
           
          to="/allkidsbooks"
        >
          <TbMoodKid></TbMoodKid>Kids Zone
        </NavLink>
      </li>
      <li className=" text-base font-bold">
        <NavLink
         className={` ${darkMode ? 'hover:text-[#10aade]  hover:no-underline text-base font-bold' : 'hover:no-underline text-base font-bold'} `}
          
          
          to="/old-books"
        >
          <TbBooks></TbBooks>Old Books
        </NavLink>

      </li>
     
      <hr className="mb-2 mt-2" />

       <span>
       <li className={`text-base font-bold ${user ? '' : 'hidden'}`}>
  {isAdmin ? (
    <NavLink
      className={` ${darkMode ? 'hover:text-[#10aade]  hover:no-underline text-base font-bold' : 'hover:no-underline text-base font-bold'}`}
      to="/dashboard/adminHome"
    >
      <TbDashboard></TbDashboard> Dashboard
    </NavLink>
  ) : (
    <NavLink
      className={` ${darkMode ? 'hover:text-[#10aade]  hover:no-underline text-base font-bold' : 'hover:no-underline text-base font-bold'}`}
      to="/dashboard/userHome"
    >
      <TbDashboard></TbDashboard> Dashboard
    </NavLink>
  )}
</li>

       </span>
     
      
      {user? (
        <li>
        <NavLink
         className={` ${darkMode ? 'hover:text-[#10aade]  hover:no-underline text-base font-bold' : 'hover:no-underline text-base font-bold'} `}
            
          
          to="/dashboard/userHome"
        >
          <CgProfile></CgProfile>My Profile
        </NavLink>

      </li>
      ): (
        ""
      )}

      {user? (
       <li className="text-base font-bold"><a className={` ${darkMode ? 'hover:text-[#10aade]  hover:no-underline' : 'hover:no-underline'} `} onClick={logOut}><FaSignOutAlt></FaSignOutAlt>Sign Out</a></li>
      ): (
        ""
      )}
    </>
  );


  //  Tonmoy start

  const dashboardNavigate = useNavigate()

  const adminNavigate = useNavigate()



  const dashBoardHandler = () => {

    dashboardNavigate("/dashboard/adminHome")

  }
  const myProfileHandler = () => {

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
      <div className={` z-50 ${darkMode ? "bg-[#131313]" : 'bg-white'} shadow-sm`}>
        <div className={`navbar  ${darkMode ? "bg-[#131313]" : "bg-base-100"} overflow-hidden  w-11/12 md:w-11/12 mx-auto  lg:w-11/12 xl:w-11/12  inset-0 z-20 sticky`}>
          <div className="navbar-start ">
            <div className="drawer lg:hidden z-20 w-7 relative ">
              <input id="my-drawer" type="checkbox" className="drawer-toggle " checked={drawerOpen}
                onChange={toggleDrawer} />
              <div className="drawer-content ">
                {/* Page content here */}
                <div onClick={close}>
                  {openDrawer && <button
                    className={closeButtonVisible ? "close-button" : "visible"}
                    onClick={closeDrawer}

                    style={{
                      position: "absolute",
                      top: -5,
                      left: 230,
                      zIndex: 30,
                    }}
                  >
                    <XCircleIcon className="w-8"></XCircleIcon>
                  </button>}

                </div>



                <label htmlFor="my-drawer" className="">
                  <Bars3Icon onClick={() => setOpenDrawer(true)} className="w-[25px] mx-0"></Bars3Icon>
                </label>




              </div>
              <div className="drawer-side ">
                <label htmlFor="my-drawer" className="drawer-overlay "></label>
                <ul className={darkMode ? "menu p-4 w-80 h-full  bg-[#2B2B2B] border-[1px] text-base-content" : "menu p-4 w-80 h-full bg-base-200 text-base-content"}>
                  <div className="flex ">
                    <Link to="/" >
                      {darkMode ? <img className="w-[99px] h-[30px] lg:w-[200px] lg:h-[50px] sm:mx-auto" src={darkLogo} alt="" /> :
                        <img className="w-[99px] h-[30px] lg:w-[200px] lg:h-[50px] " src={logo} alt="" />}
                    </Link>
          
        
         <label for="theme" className="theme ml-3">
	
	<span className="theme__toggle-wrap lg:hidden xl:hidden xxl:hidden md:inline-block inline-block">
		<input id="theme" className="theme__toggle  " type="checkbox" role="switch" name="theme" value="dark" checked={darkMode} onChange={toggleDarkMode}/>
		<span className="theme__icon ">
		<span className="theme__fill"></span>
			<span className="theme__icon-part "></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
		</span>
	</span>

</label>
        
                  </div>

             

                  {/* Sidebar content here */}
                  <div className={darkMode ? 'text-white' : ''}>{navItems}</div>
                </ul>
              </div>
            </div>



            <div className="">
              <div className=" justify-center items-center ">


                <div className="  mx-auto ">
                  <Link to="/" >
                    {darkMode ? <img className="w-[99px] h-[30px]  lg:w-[200px] lg:h-[50px]" src={darkLogo} alt="" /> :
                      <img className="w-[99px] h-[30px] lg:w-[200px] lg:h-[50px] " src={logo} alt="" />}
                  </Link>
                </div>

              </div>


            </div>

          </div>
         
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">

              
              <div className="">




                <div className="mx-auto flex flex-col items-center sm:w-[400px] md:w-[400px] lg:w-[450px] xl:w-[800px] xxl:w-[800px]   relative z-10">
                  <SearchBar setResults={setResults} />
                  {results && results.length > 0 && <SearchResultsList results={results} />}
                </div>



               

              </div>




            </ul>
          </div>

          <div className="navbar-end ">

            <div className="flex mr-2">
              
          

<label for="theme" className="theme ">
	
	<span className="theme__toggle-wrap  lg:inline xl:inline xxl:inline md:hidden hidden">
		<input id="theme" className="theme__toggle  " type="checkbox" role="switch" name="theme" value="dark" checked={darkMode} onChange={toggleDarkMode}/>
		<span className="theme__icon ">
		<span className="theme__fill"></span>
			<span className="theme__icon-part "></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
			<span className="theme__icon-part"></span>
		</span>
	</span>

</label>

{/*  */}

            </div>




            {user ? (
              <div className=" dropdown dropdown-hover ">




                <label tabIndex={0} className=" flex border rounded-lg px-3 py-1 m-1 justify-center items-center overflow-hidden lg:inline-block xl:inline-block xxl:inline-block md:hidden hidden "> <div className="flex items-center">

                  <img className="w-[30px] rounded-full mr-1 sm:w-[28px]" src={user?.photoURL} />
                  
                  <span className='whitespace-nowrap text-base mr-2 '>
                    {user?.displayName ? user.displayName.split(' ')[0] : ''}

                  </span>
                  
                  <span className=""><RiArrowDownSLine className=''></RiArrowDownSLine></span>
                </div></label>
                <ul tabIndex={0} className={`dropdown-content z-[1]  menu p-2 shadow ${darkMode === true ? ' bg-black 90 text-white   w-32 md:w-52 lg:w-52' : 'bg-base-100'} rounded-box  w-32 md:w-52 lg:w-52 `}>
                  <li>
                    <a href="/dashboard/userHome" className={`${darkMode ? 'hover:text-[#10aade]  hover:no-underline' : 'justify-between hover:no-underline'}`}>
                      My Profile
                      <span className=""></span>
                    </a>
                  </li>
                  <li >
                    {user ? (
                      isAdmin ? (

                        <a onClick={dashBoardHandler} className={`${darkMode ? 'hover:text-[#10aade] hover:no-underline' : 'hover:no-underline'}`}

                        >
                          Dashboard
                        </a>


                      ) : (

                        <a onClick={myProfileHandler} className={`${darkMode ? 'hover:text-[#10aade] hover:no-underline' : 'hover:no-underline'}`}

                        >
                          Dashboard
                        </a>


                      )
                    ) : (
                      ""
                    )}
                  </li>
                  {/* <li><a className={` ${darkMode?'hover:text-[#10aade]  hover:no-underline':'hover:no-underline' } `}>Settings</a></li> */}
                  <li><a className={` ${darkMode ? 'hover:text-[#10aade]  hover:no-underline' : 'hover:no-underline'} `} onClick={logOut}>Logout</a></li>
                </ul>


              </div>
              
            ) : (
             
              <Link to="/login" className={darkMode?"btn bg-black/0 text-white btn-sm normal-case ps-5 pe-0 rounded-3xl hover:no-underline hover:text-cyan-700":"btn bg-[#10aade] text-white btn-sm normal-case ps-5 pe-0 rounded-3xl hover:no-underline hover:text-cyan-700"}>
                {/* hidden  md:hidden lg:hidden xl:inline xxl:inline */}
           <span className=" " > Sign IN</span> <span className="rounded-full p-1 bg-white"><FaSignOutAlt className={darkMode?"bg-white text-[#10aade] text-xl rounded-full":"bg-white text-[#10aade] text-xl rounded-full"}/></span> 
          </Link>
            )}





            <NavLink
              className={({ isActive }) =>
                isActive ? `${darkMode ? 'text-white lg:inline-block xl:inline-block xxl:inline-block md:hidden hidden ' : 'text-red lg:inline xl:inline xxl:inline md:inline sm:hidden'}` : "no-underline lg:inline-block xl:inline-block xxl:inline-block md:hidden hidden"
              }
              to="/addToCart"
            >
              <div className="flex ">
                <span className=" ml-[15px] text-3xl lg:inline xl:inline xxl:inline md:inline hidden">
                  <BsCart3 />
                </span>
                <span className={darkMode ? "indicator-item badge  bg-white text-black mt-[5px] lg:inline xl:inline xxl:inline md:inline hidden" : "indicator-item badge  bg-red text-white mt-[5px] lg:inline xl:inline xxl:inline md:inline hidden"}>
                  {addToCartData ? addToCartData.length : 0}
                </span>
              </div>
            </NavLink>


          </div>


        </div>
        <div className=" ">
          <div className=" mx-auto lg:hidden   flex flex-col items-center w-11/12 z-10   relative ">
            <SearchBar setResults={setResults} />
            {results && results.length > 0 && <SearchResultsList results={results} />}
          </div>
        </div>
      </div>
    </Headroom>
  );
};



export default Navbar;
