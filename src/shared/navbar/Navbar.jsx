

import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import { Bars3Icon } from "@heroicons/react/24/solid";
import logo from "../../assets/image/logo.png";
import { BsCart3 } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { addToCartData, user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();

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
    <div className="navbar bg-base-100 w-11/12 mx-auto inset-0 z-20 sticky">
      <div className="navbar-start">
        <div className="drawer lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle " />
          <div className="drawer-content">
            {/* Page content here */}
        


            <label htmlFor="my-drawer" className="">
              <Bars3Icon className="w-[24px]"></Bars3Icon>
            </label>

           


          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              <div className="flex justify-center">
                <Link to="/" className="w-[83px] h-[63px]  ">
                  <img className="" src={logo} alt="" />
                </Link>
              </div>
              {/* Sidebar content here */}
              <div>{navItems}</div>
            </ul>
          </div>
        </div>

        <Link to="/" className="w-[83px] h-[63px]  ">
          <img className="" src={logo} alt="" />
        </Link>
      </div>
      {/* ... rest of the code */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-semibold">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <div
              className="relative mr-3 w-10 rounded-full tooltip tooltip-left "
              data-tip={user?.displayName}
            >
              <img
                className="rounded-full border-2 border-red "
                referrerPolicy="no-referrer"
                src={user?.photoURL}
                alt="user"
              />
            </div>

            <button onClick={logOut} className="btn-custom">
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn-custom ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
