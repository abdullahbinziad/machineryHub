// MenuItem.js
import React from 'react';
import SubMenu from './Submenu';
import { Link } from 'react-router-dom';

const MenuItem = ({ menuName, link, subMenu }) => {
  return (
    <li className="relative group  ">
      <Link to={link} className="block px-4 py-2 font-bold uppercase text-gray-800 hover:text-np">
        {menuName}
      </Link>
      {subMenu && (
        <ul className="hidden absolute -left-14 w-64 space-y-1 pt-6 bg-white shadow-lg group-hover:block">
          {subMenu.map((submenuItem,index) => (
            <SubMenu key={index} {...submenuItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
