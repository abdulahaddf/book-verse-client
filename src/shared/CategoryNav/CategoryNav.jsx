import React, { useContext } from 'react';
import Dropdown from 'rsuite/Dropdown';
import ButtonToolbar from 'rsuite/ButtonToolbar';
import 'rsuite/dist/rsuite.min.css';
import './CategoryNav.css';
import { Link } from 'react-router-dom';
import { RiArrowDownSLine } from "react-icons/ri";
import { AuthContext } from '../../provider/AuthProvider';

// mt-0 flex justify-center py-1

const CategoryNav = () => {

  const { darkMode, setDarkMode } = useContext(AuthContext);

  return (

    <div className="navbar h-[15px] relative w-11/12 mx-auto">

      <div className="flex-none mx-auto">
        <ul className="menu menu-horizontal ">

          <li>
            <div className="dropdown dropdown-hover dropdown-bottom ">
              <label tabIndex={0} className={`${darkMode?'text-white text-base hover:text-[#10aade]  flex font-semibold':' hover:text-[#10aade]  flex font-semibold text-base'}  `}> Category  <RiArrowDownSLine className='ml-1 mt-1'></RiArrowDownSLine></label>
              <ul tabIndex={0} className={`${darkMode ? 'dropdown-content z-[1]  menu p-2 shadow dark-style rounded-box w-52' : 'dropdown-content z-[1]  menu p-2 shadow bg-base-100 rounded-box w-52'} `}>
                <li><a className={`${darkMode ? 'hover:text-[#10aade]  hover:no-underline' : 'hover:no-underline'}`} href='/all-books'>All Books</a></li>
                <li><a className={`${darkMode ? 'hover:text-[#10aade]  hover:no-underline' : 'hover:no-underline'}`} href='/allBestSelling'>Best Selling Books</a></li>
                <li><a className={`${darkMode ? 'hover:text-[#10aade]  hover:no-underline' : 'hover:no-underline'}`} href='/allRecentSelling'>Recent Selling Books</a></li>
                <li><a className={`${darkMode ? 'hover:text-[#10aade]  hover:no-underline' : 'hover:no-underline'}`} href='/allkidsbooks'>Kids Zone</a></li>

              </ul>
            </div>

          </li>




         
          <li className='font-semibold text-base '><a className={`${darkMode? "hover:text-[#10aade] hover:no-underline":"hover:no-underline"}`} href='/all-books'>All Books</a></li>
          <li className='font-semibold text-base '><a className={`${darkMode? "hover:text-[#10aade] hover:no-underline":"hover:no-underline"}`} href='/old-books'>Old Books</a></li>
        </ul>
      </div>
    </div>




  );
};

export default CategoryNav;