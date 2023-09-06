

import { Link, NavLink } from "react-router-dom";

import { TbBooks, TbDashboard } from "react-icons/tb";
import { FaBars, FaBook, FaBookReader, FaHome, FaUsers } from "react-icons/fa";
import { Bars3Icon , XCircleIcon} from "@heroicons/react/24/solid";
import logo from "../../assets/image/logo.png";
import { BsCart3} from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import SearchBar from "../../pages/home/SearchBar/SearchBar";
import SearchResultsList from "../../pages/home/SearchBar/SearchResultsList";
import './NavbarTwo.css';
import Headroom from "react-headroom";




const Navbar = () => {

 

  // const { theme, toggleTheme } = useTheme();

  // const [theme, setTheme] = useState(
  //   localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  // );
  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   const localTheme = localStorage.getItem("theme");
  //   document.querySelector("html").setAttribute("data-theme", localTheme);
  // }, [theme]);

  // const handleToggle = (e) => {
  //   if (e.target.checked) {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };


  const { addToCartData, user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [results, setResults] = useState([]);




  const [drawerOpen, setDrawerOpen] = useState(true);
  const [openDrawer, setOpenDrawer]= useState(true);

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
console.log(openDrawer)







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
          <span className="indicator-item badge bg-[#fc494f] text-white mt-[5px]">
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
<FaHome></FaHome> Home
</NavLink>
      </li>
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
          to="/fd"
        >
          <TbBooks></TbBooks>Old Books
        </NavLink>
      </li>
      {/* <li className=" text-base font-bold">
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red" : "no-underline"
          }
          to="/addToCart"
        >
          <span className="mt-[5px]">
            <BsCart3 />
          </span>
          <span className="indicator-item badge bg-[#fc494f] text-white mt-[5px]">
            {addToCartData ? addToCartData.length : 0}
          </span>
        </NavLink>
      </li> */}
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
    </>
  );

  return (
  <Headroom   style={{
    webkitTransition: 'all .5s ease-in-out',
    mozTransition: 'all .5s ease-in-out',
    oTransition: 'all .5s ease-in-out',
    transition: 'all .5s ease-in-out'
  }}>
     <div>
     <div className="navbar  bg-base-100 w-11/12 mx-auto inset-0 z-20 sticky">
      <div className="navbar-start ">
        <div className="drawer lg:hidden z-20 w-7 relative">
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
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              <div className="flex justify-center mb-9">
                <Link to="/" className="w-[83px] h-[63px]  ">
                  <img className="" src={logo} alt="" />
                </Link>
              </div>
              {/* Sidebar content here */}
              <div>{navItems}</div>
            </ul>
          </div>
        </div>



     <div className="">
     <div className=" justify-center items-center ">


<div className="  mx-auto ">
 <Link to="/" >
   <img className=" h-[73px] "  src={logo} alt="" />
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


      {user ? (
  <details className=" dropdown cursor-pointer">
  
   
     
      
      <summary className="flex border rounded-lg px-3 py-1 m-1 justify-center items-center"> <div className="flex items-center">
      
      <img className="w-[30px] rounded-full mr-3" src={user?.photoURL}  />
      <span className=' text-base mr-1'> {user?.displayName}</span>
      <span className="">▼</span>
        </div></summary>
      <ul className="mt-3 z-[1] p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a href="/userHome" className="justify-between hover:no-underline">
            Profile
            <span className=""></span>
          </a>
        </li>
        <li >
          {user ? (
            isAdmin ? (
              <NavLink
                className={({ isActive }) =>
                  isActive ? " text-red hover:no-underline" : "hover:no-underline"
                }
                to="/dashboard/adminHome"
              >
                Dashboard
              </NavLink>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? " text-red hover:no-underline" : "no-underline"
                }
                to="/dashboard/userHome"
              >
                Dashboard
              </NavLink>
            )
          ) : (
            ""
          )}
        </li>
        <li><a className="hover:no-underline">Settings</a></li>
        <li><a className="hover:no-underline" onClick={logOut}>Logout</a></li>
      </ul>
    
   
  </details>
) : (
  <Link to="/login" className="btn-custom">
    Login
  </Link>
)}



      
{/* 
      {user ? (
  <div className="flex items-center border rounded-lg px-3 ">
    <span className='lg:mr-1 text-base'> {user?.displayName}</span>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className=" rounded-full ">
          <img src={user?.photoURL} alt={`${user?.displayName}'s profile`} />
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">▼</span>
        </div>
        
      </label>
      <span >{}</span>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className=""></span>
          </a>
        </li>
        <li>
          {user ? (
            isAdmin ? (
              <NavLink
                className={({ isActive }) =>
                  isActive ? " text-red" : "no-underline"
                }
                to="/dashboard/adminHome"
              >
                Dashboard
              </NavLink>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? " text-red" : "no-underline"
                }
                to="/dashboard/userHome"
              >
                Dashboard
              </NavLink>
            )
          ) : (
            ""
          )}
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={logOut}>Logout</a></li>
      </ul>
    </div>
   
  </div>
) : (
  <Link to="/login" className="btn-custom">
    Login
  </Link>
)} */}

     

        {/* {user ? (
          <div className="flex items-center">
            <span className='lg:mr-1 text-base'>Hello, {user?.displayName}</span>
            <div
              // className="relative mr-3 w-10 rounded-full tooltip tooltip-left "
              // data-tip={user?.displayName}
            >


<div className="dropdown dropdown-end">
  
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        
        
        <div className="w-10 rounded-full">
       
          <img src= {user?.photoURL}/>
         
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className=""></span>
          </a>
        </li>

        <li>
        {user ? (
          isAdmin ? (
            <NavLink
              className={({ isActive }) =>
                isActive ? " text-red" : "no-underline"
              }
              to="/dashboard/adminHome"
            >
              Dashboard
            </NavLink>
          ) : (
            <NavLink
              className={({ isActive }) =>
                isActive ? " text-red" : "no-underline"
              }
              to="/dashboard/userHome"
            >
              Dashboard
            </NavLink>
          )
        ) : (
          ""
        )}
      </li>


        <li><a>Settings</a></li>
        <li><a onClick={logOut}>Logout</a></li>
      </ul>
    </div>


            </div>

            
          </div>
        ) : (
          <Link to="/login" className="btn-custom ">
            Login
          </Link>
        )} */}


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
          <span className="indicator-item badge  bg-[#fc494f] text-white mt-[5px]">
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
