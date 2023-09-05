// Menu.js
import React from 'react';
import MenuItem from './MenuItem';
import useCategory from '../../../hooks/useCategory';



const Menu = () => {

const [refetch, allcategory] = useCategory()




const menuData = [
    {
      menuName: 'Home',
      link: '/',
    },
    {
        menuName: 'Products',
      subMenu: [...allcategory
     
      ],
    },
    {
        menuName: 'About Us',
      link: '/about',
    },
  ];







  return (
    <ul className="flex items-center justify-cente py-3 ">
      {menuData.map((menuItem,index) => (
        <MenuItem key={index} {...menuItem} />
      ))}
    </ul>
  );
};

export default Menu;
