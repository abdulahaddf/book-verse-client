import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../navbar/Navbar.css'
import {  Bars3Icon } from '@heroicons/react/24/solid'
import logo from '../../assets/image/logo.jpg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = 
   
    <>
                <li><NavLink to="/submenu-1" activeClassName="active-link">Home</NavLink></li>
                <li><NavLink to="/submenu-2" activeClassName="active-link">All Books</NavLink></li>
                <li><NavLink to="/submenu-2" activeClassName="active-link">Popular Books</NavLink></li>
                <li><NavLink to="/submenu-2" activeClassName="active-link">Old Books</NavLink></li>

     
     
    
    </>

  return (
    <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
      <div className="navbar-start">
        <div className="drawer lg:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className=""><Bars3Icon className='w-[24px]'></Bars3Icon></label>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              {navItems}
             
            </ul>
          </div>
        </div>
        <Link to='/' className=" rounded-full  "><img className='items-center justify-center ' style={{ width:70}} src={logo} alt="" /></Link>
        <NavLink to="/" className="font-bold text-3xl px-4 text-red-600" activeClassName="active-link">Book Verse</NavLink>
      </div>
      {/* ... rest of the code */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navItems}
         
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink to="/button" className="btn " activeClassName="active-link">LogIn</NavLink>
      </div>
    </div>
  );
};

export default Navbar;

