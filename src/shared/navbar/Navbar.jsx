

import React, { useState } from 'react';
import { Link, NavLink} from 'react-router-dom';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import '../navbar/Navbar.css'
import {  Bars3Icon } from '@heroicons/react/24/solid'
import logo from '../../assets/image/logo.png'

const Navbar = () => {


 
  const navItems = 
   
    <>


<NavLink
  className={({ isActive }) =>
    isActive ? " text-red hover:text-orange-400" : " no-underline"
  }
  to="/"
>
  Home
</NavLink>
<NavLink
  className={({ isActive }) =>
    isActive ? " text-red" : "no-underline"
  }
  to="/fd"
>
  All Books
</NavLink>
<NavLink
  className={({ isActive }) =>
    isActive ? " text-red" : "no-underline"
  }
  to="/fd"
>
  Popular Books
</NavLink>
<NavLink
  className={({ isActive }) =>
    isActive ? " text-red" : "no-underline"
  }
  to="/fd"
>
  Old Books
</NavLink>



     
     
    
    </ul>

  return (
    <div className="navbar bg-base-100 max-w-screen-xl mx-auto ">
      <div className="navbar-start">
        <div className="drawer lg:hidden z-10">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className=""><Bars3Icon className='w-[35px]'></Bars3Icon></label>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              {navItems}
             
            </ul>
          </div>
        </div>
        <Link to='/' className=" rounded-full  "><img className='w-20 items-center justify-center ' src={logo} alt="logo" /></Link>
       
      </div>
      {/* ... rest of the code */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navItems}
         
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/button" className="btn-primary " activeClassName="active-link">LogIn</NavLink>
      </div>
    </div>
  );
};

export default Navbar;

