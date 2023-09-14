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
import UseUser from "../hooks/UseUser";
import { MdSell } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { AiFillWechat } from "react-icons/ai";
import Loader from "../shared/components/loader/Loader";
import UseSingleUser from "../hooks/useSingleUser";
import { CiSignpostDuo1 } from "react-icons/ci";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  // console.log(user)
  const [userinfo] = UseUser();

  // const isAdmin = true;
  // const [isAdmin] = useAdmin();

  //  Tonmoy Start
  const [singleUser] = UseSingleUser(user?.email)

     if(!userinfo || !singleUser || !user){
      return <Loader/>
     }

  //  Tonmoy End

 

  return (
    <div>
      
      {(user && singleUser && userinfo) && <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        
        <div className="drawer-content relative flex flex-col items-center justify-center  ">
          
          <label
            htmlFor="my-drawer-2"
            className=" text-lg drawer-button lg:hidden mt-4 w-full ml-8"
          >
            <FaBars></FaBars>
          </label>
          {/* <DashboardNavbar></DashboardNavbar> */}
          <div className="absolute top-2 right-3 bg-white rounded-xl shadow-md p-3">
            <img  className="w-32 " src="/main-logo.png" alt="" />
          </div>
          
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            className="drawer-overlay shadow-xl"
          ></label>
          <div className="menu p-4 w-60 bg-slate-100 ">
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
            {/* Sidebar content here */}

              {singleUser?.role === 'admin' && (
                <>
                  <h2 className="text-lg px-4 font-bold">Admin</h2>
                  <li>
                    <NavLink to="/dashboard/adminHome">
                      <FaHome></FaHome>Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <Link to="/dashboard/userHome">
                      <CgProfile></CgProfile>Profile
                    </Link>
                  </li>

                <h2 className="text-lg px-4 mt-2 font-bold">Sales</h2>
                {/* <li>
                  <NavLink to="/dashboard/overview">
                    <GrOverview></GrOverview>Overview
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to="/dashboard/daily">
                    <BsCalendarDayFill></BsCalendarDayFill>Daily
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/monthly">
                    <BsCalendarDate></BsCalendarDate>Monthly
                  </NavLink>
                </li>

                  <h2 className="text-lg px-4 mt-5 font-bold">Management</h2>
                  <li>
                    <NavLink to="/dashboard/addBook">
                      <FaBookReader></FaBookReader>Add Book
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageBooks">
                      <ImBooks></ImBooks>Manage Books
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageUsers">
                      <FaUsers></FaUsers>Manage Users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/manageChats">
                      <AiFillWechat/> Manage Chats
                    </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/OrderStatus">
                    <GrMapLocation/> Order Status
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/promo">
                   <CiDiscount1 className="font-semibold"/> Add Promo Codes
                  </NavLink>
                  </li>
                  <li>
                  <NavLink to="/dashboard/manageBanner">
                   <CiSignpostDuo1 className="font-semibold"/> Manage banner
                  </NavLink>
                </li>
                </>
              )}

              
              {singleUser?.role === 'user' && (
                <>
                  <li>
                    <Link to="/dashboard/userHome">
                      <FaHome></FaHome>User Home
                    </Link>
                  </li>

                  <li>
                    <NavLink to="/dashboard/purchasedBooks" >
                      <ImBook />
                      Purchased Books
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/sell">
                      <MdSell />
                      Sell Your Old Books
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/my-books">
                      <ImBooks />
                      Selling Books
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/userChats">
                      <FaUsers />
                      Your Chats
                    </NavLink>
                  </li>
                </>
              )}
           

              {user && (<> <div className="divider"></div>
                <li>
                  <Link to="/">
                    <FaHome></FaHome>Home
                  </Link>
                </li>
                <li>
                  <Link to="/all-books">
                    <FaBook></FaBook>All Books
                  </Link>
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