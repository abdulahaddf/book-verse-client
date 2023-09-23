import { useContext } from "react";
import "rsuite/dist/rsuite.min.css";
import "./CategoryNav.css";
import { RiArrowDownSLine } from "react-icons/ri";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const CategoryNav = () => {
  const { darkMode, setDarkMode } = useContext(AuthContext);

  return (
    <div className="navbar h-[15px] relative w-11/12 mx-auto">
      <div className="flex-none mx-auto">
        <p className="menu menu-horizontal flex gap-6 items-center text-xl">
          <>
            <div className="dropdown dropdown-hover dropdown-bottom ">
              <label
                tabIndex={0}
                className={`${
                  darkMode
                    ? "text-white  hover:text-[#10aade]  flex font-semibold"
                    : " hover:text-[#10aade]  flex font-semibold "
                }  `}
              >
                {" "}
                Category{" "}
                <RiArrowDownSLine className="ml-1 mt-1"></RiArrowDownSLine>
              </label>
              <ul
                tabIndex={0}
                className={`${
                  darkMode
                    ? "dropdown-content z-[1]  menu p-2 shadow dark-style rounded-box w-52"
                    : "dropdown-content z-[1]  menu p-2 shadow bg-base-100 rounded-box w-52 "
                } `}
              >
                <li>
                  <Link
                    className={`${
                      darkMode
                        ? "hover:text-[#10aade]  hover:no-underline"
                        : "hover:text-[#10aade]  hover:no-underline"
                    }`}
                    to="/all-books"
                  >
                    All Books
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      darkMode
                        ? "hover:text-[#10aade]  hover:no-underline"
                        : "hover:text-[#10aade]  hover:no-underline"
                    }`}
                    to="/allBestSelling"
                  >
                    Best Selling Books
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      darkMode
                        ? "hover:text-[#10aade]  hover:no-underline"
                        : "hover:text-[#10aade]  hover:no-underline"
                    }`}
                    to="/allRecentSelling"
                  >
                    Recent Selling Books
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      darkMode
                        ? "hover:text-[#10aade]  hover:no-underline"
                        : "hover:text-[#10aade]  hover:no-underline"
                    }`}
                    to="/allkidsbooks"
                  >
                    Kids Zone
                  </Link>
                </li>
              </ul>
            </div>
          </>

          <p className="font-semibold ">
            <NavLink
              style={({ isActive }) => {
                return {
                  // backgroundColor: isActive ? "#10aade" : "",
                  color: isActive ? "#10aade" : "",
                };
              }}
              className={`${
                darkMode
                  ? "hover:text-[#10aade] hover:no-underline"
                  : "hover:text-[#10aade] no-underline hover:no-underline"
              }`}
              to="/all-books"
            >
              All Books
            </NavLink>
          </p>
          <p className="font-semibold  ">
            <NavLink
              className={`${
                darkMode
                  ? "hover:text-[#10aade] hover:no-underline"
                  : "hover:text-[#10aade]  hover:no-underline"
              }`}
              style={({ isActive }) => {
                return {
                  
                  color: isActive ? "#10aade" : "",
                };
              }}
              to="/old-books"
            >
              Old Books
            </NavLink>
          </p>
        </p>
      </div>
    </div>
  );
};

export default CategoryNav;
