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
      link: '/about-us',
    },
    {
        menuName: 'Contact Us',
      link: '/contact-us',
    },
  ];







  return (
    <ul className="flex items-center justify-center  ">
      {menuData.map((menuItem,index) => (
        <MenuItem key={index} {...menuItem} />
      ))}
    </ul>
  );
};

export default Menu;
