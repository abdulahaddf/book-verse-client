/* eslint-disable react/no-unknown-property */
import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaBook,
  FaBookReader,
  FaHome,
  FaUsers,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { ImBook, ImBooks } from "react-icons/im";
// import { GrOverview } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { BsCalendarDate, BsCalendarDayFill } from "react-icons/bs";
import { useContext, useEffect } from "react";
import avatar from "../assets/avatar/avatar.png";
import { AuthContext } from "../provider/AuthProvider";
import UseUser from "../hooks/UseUser";
import { MdSell } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { AiFillWechat } from "react-icons/ai";
import Loader from "../shared/components/loader/Loader";
import UseSingleUser from "../hooks/useSingleUser";
import { CiSignpostDuo1 } from "react-icons/ci";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const { user, darkMode, setDarkMode } = useContext(AuthContext);
  // console.log(user)
  const [userinfo] = UseUser();

  // const isAdmin = true;
  // const [isAdmin] = useAdmin();

  //  Tonmoy Start

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode); // Store the state in local storage
  };

  useEffect(() => {
    if (darkMode) {
      // Apply dark mode styles
      document.body.classList.add("dark-mode");
    } else {
      // Apply light mode styles
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const [singleUser] = UseSingleUser(user?.email);
  const isAdmin = singleUser?.role === "admin";

  if (!userinfo || !singleUser || !user) {
    return <Loader />;
  }






  //  Tonmoy End

  return (
    <div className={darkMode ? "dark-style" : ""}>
      <Helmet>
        <title>Book Verse | Dashboard | {user?.displayName}</title>
      </Helmet>
      {user && singleUser && userinfo && (
        <div className="drawer lg:drawer-open max-w-full">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          {/* solve issue overflox fixed fosial */}
          <div className="drawer-content max-w-full  flex flex-col items-center justify-center overflow-x-hidden">
            <label
              htmlFor="my-drawer-2"
              className=" text-lg drawer-button lg:hidden mt-4 w-full ml-8"
            >
              <FaBars></FaBars>
            </label>
            {/* <DashboardNavbar></DashboardNavbar> */}
            <div className={darkMode ? "bg-gray hidden md:block lg:block xl:block xxl:block text-white absolute md:flex lg:flex xl:flex xxl:flex gap-5 items-center top-2 right-3 border-[1px] rounded-xl shadow-md p-3 " : " bg-white text-white absolute flex gap-5 items-center top-2 right-3 border-[1px] rounded-xl shadow-md p-3 hidden md:block lg:block xl:block xxl:block md:flex lg:flex xl:flex xxl:flex"}>
              <div >
                <button>








                  <label for="theme" className="theme">
                    <span className="theme__toggle-wrap ">
                      <input
                        id="theme"
                        className="theme__toggle  "
                        type="checkbox"
                        role="switch"
                        name="theme"
                        value="dark"
                        checked={darkMode}
                        onChange={toggleDarkMode}
                      />
                      <span className="theme__icon ">
                        <span className="theme__fill"></span>
                        <span className="theme__icon-part"></span>
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

                  {/* moon icon */}
                </button>
              </div>
              <div>
                {darkMode ? (
                  <img className="w-32 " src="/dark.png" alt="" />
                ) : (
                  <img className="w-32 " src="/main-logo.png" alt="" />
                )}
              </div>
            </div>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-2"
              className="drawer-overlay shadow-xl"
            ></label>
            <div
              className={`menu p-4 w-60 ${
                darkMode ? "bg-gray border-r-[1px]" : "bg-slate-100"
              } ${isAdmin ? "h-auto" : "h-full"}`}
            >
              <div className="text-center mx-auto">
                <img
                  className="rounded-full w-24 h-24 mx-auto"
                  src={user && userinfo?.photoURL ? userinfo?.photoURL : avatar}
                />
                <h3 className="font-bold text-2xl uppercase">
                  {userinfo?.displayName}
                </h3>
              </div>

              <ul className="font-medium text-black mt-1 w-full">
                {/* Side bar  content here */}

                {singleUser?.role === "admin" && (
                  <>
                    <h2
                      className={
                        darkMode
                          ? " text-white text-lg px-4 font-bold"
                          : "text-lg px-4 font-bold"
                      }
                    >
                      Admin
                    </h2>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        to="/dashboard/adminHome"
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                      >
                        <FaHome></FaHome>Admin Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/dashboard/userHome"
                      >
                        <CgProfile></CgProfile>Profile
                      </NavLink>
                    </li>

                    <h2
                      className={
                        darkMode
                          ? "text-white text-lg px-4 mt-2 font-bold"
                          : "text-lg px-4 mt-2 font-bold"
                      }
                    >
                      Sales
                    </h2>
                    {/* <li>
                  <NavLink to="/dashboard/overview">
                    <GrOverview></GrOverview>Overview
                  </NavLink>
                </li> */}
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/dashboard/daily"
                      >
                        <BsCalendarDayFill></BsCalendarDayFill>Daily
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/dashboard/monthly"
                      >
                        <BsCalendarDate></BsCalendarDate>Monthly
                      </NavLink>
                    </li>

                    <h2
                      className={
                        darkMode
                          ? "text-white text-lg px-4 mt-2 font-bold"
                          : "text-lg px-4 mt-2 font-bold"
                      }
                    >
                      Management
                    </h2>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/dashboard/addBook"
                      >
                        <FaBookReader></FaBookReader>Add Book
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/dashboard/manageBooks"
                      >
                        <ImBooks></ImBooks>Manage Books
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/dashboard/manageUsers"
                      >
                        <FaUsers></FaUsers>Manage Users
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/dashboard/manageChats"
                      >
                        <AiFillWechat /> Manage Chats
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/dashboard/OrderStatus"
                      >
                        <FaMapMarkedAlt className="focus:text-white" /> Order
                        Status
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/dashboard/promo"
                      >
                        <CiDiscount1 className="font-semibold" /> Add Promo
                        Codes
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/dashboard/manageBanner"
                      >
                        <CiSignpostDuo1 className="font-semibold" /> Manage
                        banner
                      </NavLink>
                    </li>
                  </>
                )}

                {singleUser?.role === "user" && (
                  <>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/dashboard/userHome"
                      >
                        <FaHome></FaHome>User Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/dashboard/purchasedBooks"
                      >
                        <ImBook />
                        Purchased Books
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/dashboard/sell"
                      >
                        <MdSell />
                        Sell Your Old Books
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/dashboard/my-books"
                      >
                        <ImBooks />
                        Selling Books
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/dashboard/userChats"
                      >
                        <FaUsers />
                        Your Chats
                      </NavLink>
                    </li>
                  </>
                )}

                {user && (
                  <>
                    {" "}
                    <div className="divider"></div>

                    
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/"
                      >
                        <FaHome></FaHome>Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white nav-link  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:text-[#10aade]  hover:no-underline "
                        }
                        style={({ isActive }) => {
                          return {
                            backgroundColor: isActive ? "#10aade" : "",
                          };
                        }}
                        to="/all-books"
                      >
                        <FaBook></FaBook>All Books
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
              <section className=" mt-5 block md:hidden lg:hidden xl:hidden xxl:hidden">
                <label for="theme" className="theme">

                  <span className="theme__toggle-wrap ">
                    <input id="theme" className="theme__toggle  " type="checkbox" role="switch" name="theme" value="dark" checked={darkMode} onChange={toggleDarkMode} />
                    <span className="theme__icon ">
                      <span className="theme__fill"></span>
                      <span className="theme__icon-part"></span>
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
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
