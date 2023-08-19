import { Link, Outlet } from "react-router-dom";
import { FaBars, FaBook, FaBookReader, FaHome, FaUsers } from "react-icons/fa";
import { useContext } from "react";
import avatar from "../assets/avatar/avatar.png";
import { AuthContext } from "../provider/AuthProvider";
const Dashboard = () => {
  const { user } = useContext(AuthContext);

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
        <Outlet></Outlet>
      </div>
      <div className="drawer-side shadow-xl">
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay shadow-xl"
        ></label>
        <div className="menu p-4 w-80 h-full bg-slate-100">
          <div className="text-center mx-auto">
            <img
              className="rounded-full w-24 h-24 mx-auto"
              src={user && user.photoURL ? user.photoURL : avatar}
            />
            <h3 className="font-bold text-2xl text-[#d71d24] uppercase">
              {user?.displayName}
            </h3>
          </div>

          <ul className="font-semibold text-black mt-8">
            {/* Sidebar content here */}

            <>
              
              <li>
                <Link to="/dashboard/adminHome">
                  <FaHome></FaHome>Admin Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addBook">
                  <FaBookReader></FaBookReader>Add Book
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageUsers">
                  <FaUsers></FaUsers>Manage Users
                </Link>
              </li>
            </>

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
