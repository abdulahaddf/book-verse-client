import React from 'react';
import Dropdown from 'rsuite/Dropdown';
import ButtonToolbar from 'rsuite/ButtonToolbar';
import 'rsuite/dist/rsuite.min.css';
import './CategoryNav.css';
import { Link } from 'react-router-dom';

const CategoryNav = () => {
    return (
        <div className='mt-0 flex justify-center py-1 '>
            <div className=" bg-base-100">
            <div className="flex mx-auto">
      <ButtonToolbar className="lg:w-[100px] sm:mr-8">
      <Dropdown className=" lg:w-[250px]"trigger="hover" title="Categories"  >
      
      <Dropdown.Item eventKey="c"as="a" href=
                "/all-books">All Books</Dropdown.Item>
      <Dropdown.Item eventKey="c"as="a" href=
                "/allBestSelling">Best Selling Books</Dropdown.Item>
      <Dropdown.Item eventKey="c"as="a" href=
                "/allRecentSelling">Recent Selling Books</Dropdown.Item>
      
      <Dropdown.Menu className="m-0" title="Nested Item - todo"  href=
                "/allBestSelling" activeKey="e-2">
      <Dropdown title="SubMenu" activeKey="e-2">
      <Dropdown.Item eventKey="e-1">Item-1</Dropdown.Item>
      <Dropdown.Item eventKey="e-2">Item-2</Dropdown.Item>
      </Dropdown>
      </Dropdown.Menu>
      </Dropdown>
      </ButtonToolbar>
      <Link to='/old-books'><li className="list-none pt-2 ">Old Book</li></Link>
      </div>
</div>
        </div>
    );
};

export default CategoryNav;