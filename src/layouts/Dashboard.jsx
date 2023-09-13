import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBars, FaBook, FaBookReader, FaHome, FaUsers } from "react-icons/fa";
import { ImBook, ImBooks } from "react-icons/im";
// import { GrOverview } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { BsCalendarDate, BsCalendarDayFill } from "react-icons/bs";
import { GrMapLocation } from "react-icons/gr";
import { useContext } from "react";
import avatar from "../assets/avatar/avatar.png";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import UseUser from "../hooks/UseUser";
import { MdSell } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { AiFillWechat } from "react-icons/ai";
import Loader from "../shared/components/loader/Loader";
import UseSingleUser from "../hooks/useSingleUser";
import { CiSignpostDuo1 } from "react-icons/ci";
const Dashboard = () => {
  const { user, darkMode } = useContext(AuthContext);
  // console.log(user)
  const [userinfo] = UseUser();

  // const isAdmin = true;
  // const [isAdmin] = useAdmin();

  //  Tonmoy Start
  const [singleUser] = UseSingleUser(user?.email)

  if (!userinfo || !singleUser || !user) {
    return <Loader />
  }

  //  Tonmoy End



  return (
    <div className={darkMode ? "dark-style" : ""}>
      {(user && singleUser && userinfo) && <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className=" text-lg drawer-button lg:hidden mt-4 w-full ml-8"
          >
            <FaBars></FaBars>
          </label>
          {/* <DashboardNavbar></DashboardNavbar> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            className="drawer-overlay shadow-xl"
          ></label>
          <div className={darkMode ? "menu p-4 w-60 bg-white/10 border-r-[1px] h-screen" : "menu p-4 w-60 bg-slate-100 h-screen"}>
            <div className="text-center mx-auto">
              <img
                className="rounded-full w-24 h-24 mx-auto"
                src={user && userinfo?.photoURL ? userinfo?.photoURL : avatar}
              />
              <h3 className="font-bold text-2xl uppercase">
                {userinfo?.displayName}
              </h3>
            </div>

            <ul className="font-medium text-black mt-1">
              {/* Side bar  content here */}

              {singleUser?.role === 'admin' && (
                <>
                  <h2 className={darkMode ? " text-white text-lg px-4 font-bold" : "text-lg px-4 font-bold"}>Admin</h2>
                  <li >
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/dashboard/adminHome">
                      <FaHome ></FaHome>Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/dashboard/userHome">
                      <CgProfile></CgProfile>Profile
                    </NavLink>
                  </li>

                  <h2 className={darkMode ? "text-white text-lg px-4 mt-2 font-bold" : "text-lg px-4 mt-2 font-bold"}>Sales</h2>
                  {/* <li>
                  <NavLink to="/dashboard/overview">
                    <GrOverview></GrOverview>Overview
                  </NavLink>
                </li> */}
                  <li>
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/dashboard/daily">
                      <BsCalendarDayFill></BsCalendarDayFill>Daily
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/dashboard/monthly">
                      <BsCalendarDate></BsCalendarDate>Monthly
                    </NavLink>
                  </li>

                  <h2 className={darkMode ? "text-white text-lg px-4 mt-2 font-bold" : "text-lg px-4 mt-2 font-bold"}>Management</h2>
                  <li>
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/dashboard/addBook">
                      <FaBookReader></FaBookReader>Add Book
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/dashboard/manageBooks">
                      <ImBooks></ImBooks>Manage Books
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/dashboard/manageUsers">
                      <FaUsers></FaUsers>Manage Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/dashboard/manageChats">
                      <AiFillWechat /> Manage Chats
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/dashboard/OrderStatus">
                      <GrMapLocation /> Order Status
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/dashboard/promo">
                      <CiDiscount1 className="font-semibold" /> Add Promo Codes
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/dashboard/manageBanner">
                      <CiSignpostDuo1 className="font-semibold" /> Manage banner
                    </NavLink>
                  </li>
                </>
              )}


              {singleUser?.role === 'user' && (
                <>
                  <li >
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/dashboard/userHome">
                      <FaHome></FaHome>User Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline " : "hover:no-underline"} to="/dashboard/purchasedBooks">
                      <ImBook />
                      Purchased Books
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/dashboard/sell">
                      <MdSell />
                      Sell Your Old Books
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/dashboard/my-books">
                      <ImBooks />
                      Selling Books
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/dashboard/userChats">
                      <FaUsers />
                      Your Chats
                    </NavLink>
                  </li>
                </>
              )}

              {user && (<> <div className="divider"></div>
                <li>
                  <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/">
                    <FaHome></FaHome>Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className={darkMode ? " text-white  hover:text-[#10aade]  hover:no-underline" : "hover:no-underline"} to="/all-books">
                    <FaBook></FaBook>All Books
                  </NavLink>
                </li>
              </>)}
            </ul>
          </div>
        </div>
      </div>}
    </div>
  );
};

export default Dashboard;