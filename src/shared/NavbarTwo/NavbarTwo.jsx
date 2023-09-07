

import { Link, NavLink } from "react-router-dom";


import { Bars3Icon } from "@heroicons/react/24/solid";
import logo from "../../../public/main-logo.png"
import { BsCart3 } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import SearchBar from "../../pages/home/SearchBar/SearchBar";
import SearchResultsList from "../../pages/home/SearchBar/SearchResultsList";
import './NavbarTwo.css';



const Navbar = () => {
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
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red hover:text-orange-400" : " no-underline"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red" : "no-underline"
          }
          to="/all-books"
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red" : "no-underline"
          }
          to="/fd"
        >
          Popular Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red" : "no-underline"
          }
          to="/fd"
        >
          Old Books
        </NavLink>
      </li>
      <li>
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
    </>
  );

  return (
   <div>
     <div className="navbar  bg-base-100 w-11/12 mx-auto inset-0 z-20 sticky">
      <div className="navbar-start ">
        <div className="drawer lg:hidden z-20 w-7 ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle " checked={drawerOpen}
            onChange={toggleDrawer}  />
          <div className="drawer-content">
            {/* Page content here */}
          <div onClick={close}>
        {openDrawer &&   <button 
              className={closeButtonVisible ? "close-button" : "visible"}
              onClick={closeDrawer}
             
              style={{
                position: "relative",
                top: 0,
                left: 0,
                zIndex: 30,
              }}
            >
              close
            </button>}
            
          </div>
        


            <label htmlFor="my-drawer" className="">
              <Bars3Icon onClick={()=>setOpenDrawer(true)} className="w-[25px] mx-0"></Bars3Icon>
            </label>

           


          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              <div className="flex justify-center">
                <Link to="/" className="w-[150px]  ">
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
   <img className=" w-[200px] "  src={logo} alt="" />
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
          <div className="flex items-center">
            <span className='lg:mr-1 text-base'>Hello, {user?.displayName}</span>
            <div
              className="relative mr-3 w-10 rounded-full tooltip tooltip-left "
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
            <span className="badge"></span>
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
          <Link to="/login" className="btn-fifth h-8 w-16 ">
            Login
          </Link>
        )}


        <NavLink
          className={({ isActive }) =>
            isActive ? " text-red" : "no-underline"
          }
          to="/addToCart"
        >
         <div className="flex">
         <span className="mt-[5px] ml-[10px] text-3xl">
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
  );
};


export default Navbar;
