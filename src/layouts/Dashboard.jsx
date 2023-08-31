import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBars, FaBook, FaBookReader, FaHome, FaUsers } from "react-icons/fa";
import { ImBooks, ImEarth } from "react-icons/im";
import { GrOverview } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { BsCalendarDate, BsCalendarDayFill } from "react-icons/bs";
import { useContext } from "react";
import avatar from "../assets/avatar/avatar.png";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import UseUser from "../hooks/UseUser";
const Dashboard = () => {
  const { user } = useContext(AuthContext);
  // console.log(user)
  const [userinfo] = UseUser();

  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer lg:drawer-open">
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
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay shadow-xl"
        ></label>
        <div className="menu p-4 w-60 bg-slate-100">
          <div className="text-center mx-auto">
            <img
              className="rounded-full w-24 h-24 mx-auto"
              src={user && userinfo?.photoURL ? userinfo?.photoURL : avatar}
            />
            <h3 className="font-bold text-2xl uppercase">
              {userinfo?.displayName}
            </h3>
          </div>

          <ul className="font-medium text-black mt-8">
            {/* Sidebar content here */}

            {isAdmin ? (
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

                <h2 className="text-lg px-4 mt-5 font-bold">Sales</h2>
                <li>
                  <NavLink to="/dashboard/overview">
                    <GrOverview></GrOverview>Overview
                  </NavLink>
                </li>
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
                <li>
                  <NavLink to="/dashboard/geography">
                    <ImEarth></ImEarth>Geography
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
                    <FaUsers></FaUsers>Manage Chats
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/userHome">
                    <FaHome></FaHome>User Home
                  </Link>
                </li>

                <li>
                  <NavLink to="/dashboard/purchasedBooks">
                    <ImBooks />
                    Purchased Books
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/sell">
                    <ImBooks />
                    Sell Your Old Books
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-books">
                    <ImBooks />
                    Selling Books
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
