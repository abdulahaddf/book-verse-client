import React from 'react';
import Dropdown from 'rsuite/Dropdown';
import ButtonToolbar from 'rsuite/ButtonToolbar';
import 'rsuite/dist/rsuite.min.css';
import './CategoryNav.css';
import { Link } from 'react-router-dom';
// mt-0 flex justify-center py-1

const CategoryNav = () => {
    return (
        <div className="navbar bg-base-100 h-[15px] relative z-0 ">
 
  <div className="flex-none mx-auto">
    <ul className="menu menu-horizontal ">
      
      <li>
      <details className="dropdown relative z-10">
  <summary className="font-semibold text-base">Category</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-64">
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
      </li>
      <li className='font-semibold text-base ml-4'><a className="hover:no-underline" href='/old-books'>Old Books</a></li>
    </ul>
  </div>
</div>

       
//         <div className=' navbar flex justify-center'>
//             <div className=" bg-base-100">
//             <div className="flex mx-auto">
//       <ButtonToolbar className="lg:w-[100px] sm:mr-8">
//       <Dropdown className=" lg:w-[250px]"trigger="hover" title="Categories"  >
      
//       <Dropdown.Item eventKey="c"as="a" href=
//                 "/all-books">All Books</Dropdown.Item>
//       <Dropdown.Item eventKey="c"as="a" href=
//                 "/allBestSelling">Best Selling Books</Dropdown.Item>
//       <Dropdown.Item eventKey="c"as="a" href=
//                 "/allRecentSelling">Recent Selling Books</Dropdown.Item>
      
//       <Dropdown.Menu className="m-0" title="Nested Item - todo"  href=
//                 "/allBestSelling" activeKey="e-2">
//       <Dropdown title="SubMenu" activeKey="e-2">
//       <Dropdown.Item eventKey="e-1">Item-1</Dropdown.Item>
//       <Dropdown.Item eventKey="e-2">Item-2</Dropdown.Item>
//       </Dropdown>
//       </Dropdown.Menu>
//       </Dropdown>
//       </ButtonToolbar>
//       <Link to='/old-books'><li className=" btn btn-ghost btn-sm">Old Book</li></Link>
//       </div>
// </div>
//         </div>
    );
};

export default CategoryNav;