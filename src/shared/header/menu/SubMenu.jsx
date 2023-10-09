// SubMenu.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SubMenu = ({ categoryName, categorySlug, subCategories }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <li
      className="relative group hover:bg-np w-64 px-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`products/${categorySlug}`} className="block font-semibold px-4 py-2 text-gray-600 hover:text-white">
        {categoryName}
      </Link>
      {/* <ul
        className={`w-64  absolute left-full top-0 mt-0 space-y-2 bg-white shadow-lg transition-transform duration-300 ease-in-out transform`}
      >
        {subCategories &&
          subCategories.map((subsubmenuItem,index) => (
            <SubSubMenu key={index} {...subsubmenuItem} />
          ))}
      </ul> */}
    </li>
  );
};

export default SubMenu;
