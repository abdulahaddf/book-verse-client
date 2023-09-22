import React, { useContext, useState } from 'react';
import 'rsuite/dist/rsuite.min.css';
import './CategoryNav.css';
import { AuthContext } from '../../provider/AuthProvider';
import { RiArrowDownSLine } from 'react-icons/ri'; 

const CategoryNav = () => {
  const { darkMode, setDarkMode } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="navbar h-[15px] relative w-11/12 mx-auto">
      <div className="flex-none mx-auto">
        <ul className="menu menu-horizontal">
          <li>
            <div
              className="dropdown dropdown-hover dropdown-bottom "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <label
                tabIndex={0}
                className={`${
                  darkMode
                    ? 'text-white text-base hover:text-[#10aade] flex font-semibold'
                    : 'hover:text-[#10aade] flex font-semibold text-base'
                }  `}
              >
                Category{' '}
                <RiArrowDownSLine
                  className={`${
                    isHovered ? 'transform rotate-180 ' : ''
                  } transition-transform duration-300 inline-block mt-1 ml-1`}
                />
              </label>
              <ul
                tabIndex={0}
                className={`${
                  darkMode
                    ? 'dropdown-content z-[1] menu p-2 shadow dark-style rounded-box w-52'
                    : 'dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'
                }`}
              >
                <li>
                  <a
                    className={`${
                      darkMode
                        ? 'hover:text-[#10aade] hover:no-underline'
                        : 'hover:text-[#10aade] hover:no-underline'
                    }`}
                    href="/all-books"
                  >
                    All Books
                  </a>
                </li>
                <li>
                  <a
                    className={`${
                      darkMode
                        ? 'hover:text-[#10aade] hover:no-underline'
                        : 'hover:text-[#10aade] hover:no-underline'
                    }`}
                    href="/allBestSelling"
                  >
                    Best Selling Books
                  </a>
                </li>
                <li>
                  <a
                    className={`${
                      darkMode
                        ? 'hover:text-[#10aade] hover:no-underline'
                        : 'hover:text-[#10aade] hover:no-underline'
                    }`}
                    href="/allRecentSelling"
                  >
                    Recent Selling Books
                  </a>
                </li>
                <li>
                  <a
                    className={`${
                      darkMode
                        ? 'hover:text-[#10aade] hover:no-underline'
                        : 'hover:text-[#10aade] hover:no-underline'
                    }`}
                    href="/allkidsbooks"
                  >
                    Kids Zone
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="font-semibold text-base">
            <a
              className={`${
                darkMode
                  ? 'hover:text-[#10aade] hover:no-underline'
                  : 'hover:no-underline'
              }`}
              href="/all-books"
            >
              All Books
            </a>
          </li>
          <li className="font-semibold text-base">
            <a
              className={`${
                darkMode
                  ? 'hover:text-[#10aade] hover:no-underline'
                  : 'hover:no-underline'
              }`}
              href="/old-books"
            >
              Old Books
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryNav;



