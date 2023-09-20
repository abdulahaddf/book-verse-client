import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaBook, FaBookReader, FaHome, FaUsers,FaMapMarkedAlt } from "react-icons/fa";
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
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content w-11/12 md:w-full  flex flex-col items-center justify-center">
            <label
              htmlFor="my-drawer-2"
              className=" text-lg drawer-button lg:hidden mt-4 w-full ml-8"
            >
              <FaBars></FaBars>
            </label>
            {/* <DashboardNavbar></DashboardNavbar> */}
            <div className={darkMode ? "bg-graytext-white absolute flex gap-5 items-center top-2 right-3 border-[1px] rounded-xl shadow-md p-3 " : " bg-white text-white absolute flex gap-5 items-center top-2 right-3 border-[1px] rounded-xl shadow-md p-3"}>
              <div >
                <button>


                  {/*           
         {darkMode===true &&    <svg  onClick={()=>setDarkMode(false)} fill="#ffffff" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>} */}



                  {/* {darkMode===false &&    <svg  onClick={()=>setDarkMode(true)} fill="#000000" width="20px" height="20px" viewBox="0 0 35 35" data-name="Layer 2" id="Layer_2" xmlns="http://www.w3.org/2000/svg"><path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"/></svg>} */}





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


                  {/* moon icon */}
                </button>
              </div>
              <div>
                {darkMode ? <img className="w-32 " src="/dark.png" alt="" /> : <img className="w-32 " src="/main-logo.png" alt="" />}
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
              className={`menu flex-row p-4 w-60 ${darkMode ? "bg-gray border-r-[1px]" : "bg-slate-100"
                } ${isAdmin ? "h-screen " : "h-screen"}`}
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
                            : "focus:no-underline hover:no-underline"
                        }
                        to="/dashboard/adminHome"
                      >
                        <FaHome></FaHome>Admin Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
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
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
                        to="/dashboard/daily"
                      >
                        <BsCalendarDayFill></BsCalendarDayFill>Daily
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
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
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
                        to="/dashboard/addBook"
                      >
                        <FaBookReader></FaBookReader>Add Book
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
                        to="/dashboard/manageBooks"
                      >
                        <ImBooks></ImBooks>Manage Books
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
                        to="/dashboard/manageUsers"
                      >
                        <FaUsers></FaUsers>Manage Users
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
                        to="/dashboard/manageChats"
                      >
                        <AiFillWechat /> Manage Chats
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
                        to="/dashboard/OrderStatus"
                      >
                        <FaMapMarkedAlt className="focus:text-white" /> Order Status
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
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
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
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
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
                        to="/dashboard/userHome"
                      >
                        <FaHome></FaHome>User Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline "
                            : "focus:no-underline hover:no-underline"
                        }
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
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
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
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
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
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
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
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
                        to="/"
                      >
                        <FaHome></FaHome>Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className={
                          darkMode
                            ? " text-white  hover:text-[#10aade]  focus:no-underline hover:no-underline"
                            : "focus:no-underline hover:no-underline"
                        }
                        to="/all-books"
                      >
                        <FaBook></FaBook>All Books
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
