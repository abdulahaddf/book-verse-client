import React, { useContext } from 'react';
import Dropdown from 'rsuite/Dropdown';
import ButtonToolbar from 'rsuite/ButtonToolbar';
import 'rsuite/dist/rsuite.min.css';
import './CategoryNav.css';
import { Link } from 'react-router-dom';
import { RiArrowDownSLine} from "react-icons/ri";

// mt-0 flex justify-center py-1

const CategoryNav = () => {
  
    return (
    
         <div className="navbar   h-[15px] relative w-11/12 mx-auto">
 
 <div className="flex-none mx-auto">
   <ul className="menu menu-horizontal ">
  
  <li>
     <div className="dropdown dropdown-hover dropdown-bottom">
 <label tabIndex={0} className="font-semibold text-base flex"> Category  <RiArrowDownSLine className='ml-1 mt-1'></RiArrowDownSLine></label>
 <ul tabIndex={0} className="dropdown-content z-[1]  menu p-2 shadow bg-base-100 rounded-box w-52">
   <li><a className="hover:no-underline" href='/all-books'>All Books</a></li>
   <li><a className="hover:no-underline" href='/allBestSelling'>Best Selling Books</a></li>
   <li><a className="hover:no-underline" href='/allRecentSelling'>Recent Selling Books</a></li>
   <li><a className="hover:no-underline">  <details className="dropdown z-10">
 <summary className="flex">DropDown - TODO </summary>
 <ul className="ml-44 p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
   <li><a className="hover:no-underline">Item 1</a></li>
   <li><a className="hover:no-underline">Item 2</a></li>
 </ul>
</details></a></li>
 </ul>
</div>
    
</li>




     {/* <li>
     <details className="dropdown dropdown-hover">
 <summary tabIndex={0} className="font-semibold text-base transition-colors duration-300 ease-in-out hover:bg-blue-500 active:bg-blue-500">Category</summary>
 <ul tabIndex={0} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-64">
   <li><a className="hover:no-underline" href='/all-books'>All Books</a></li>
   <li><a className="hover:no-underline" href='/allBestSelling'>Best Selling Books</a></li>
   <li><a className="hover:no-underline" href='/allRecentSelling'>Recent Selling Books</a></li>
   <li><a className="hover:no-underline">  <details className="dropdown z-10">
 <summary className="flex">DropDown - TODO </summary>
 <ul className="ml-44 p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
   <li><a className="hover:no-underline">Item 1</a></li>
   <li><a className="hover:no-underline">Item 2</a></li>
 </ul>
</details></a></li>
 </ul>
</details>
     </li> */}
     <li className='font-semibold text-base ml-4'><a className="hover:no-underline" href='/all-books'>All Books</a></li>
     <li className='font-semibold text-base ml-4'><a className="hover:no-underline" href='/old-books'>Old Books</a></li>
   </ul>
 </div>
</div>

  
       

    );
};

export default CategoryNav;