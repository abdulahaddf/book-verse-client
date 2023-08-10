
import { Link, NavLink } from 'react-router-dom';
import '../navbar/Navbar.css'
import {  Bars3Icon } from '@heroicons/react/24/solid'
import logo from '../../assets/image/logo.jpg'

const Navbar = () => {


 
  const navItems = 
   
    <ul className='text-xl flex gap-5'>
                 <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-red" : " link link-hover"
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink to="/submenu-2" className={({ isActive }) =>
                    isActive ? " text-red " : " link link-hover"
                  }>All Books</NavLink>
                <NavLink to="/submenu-2" className={({ isActive }) =>
                    isActive ? " text-red " : " link link-hover"
                  }>Popular Books</NavLink>
                <NavLink to="/submenu-2" className={({ isActive }) =>
                    isActive ? " text-red " : " link link-hover"
                  }>Old Books</NavLink>

     
     
    
    </ul>

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
        <Link to='/' className=" rounded-full  "><img className='w-32 items-center justify-center ' src={logo} alt="logo" /></Link>
       
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

