

import './header.css'
import React from 'react';
import logo from '../../assets/logo-main.png'
import { Link, NavLink } from 'react-router-dom';
import MyNavbar from './MyNavbar';





const Header = () => {


    return (
    //     <div className='w-3/4 flex justify-between items-center mx-auto py-6 '>
    // 
    //     </div>
    <div className='md:w-3/4 w-full md:flex justify-between items-center mx-auto md:py-6 '>
    <div className="flex w-full md:px-4 text-black bg-white md:py-4 md:-mx-12 items-center   ">

<div className='md:w-3/4 w-full  overflow-visible  z-20'>
<MyNavbar></MyNavbar>
</div>

</div>
<div className=' hidden md:block'>
<div className="md:navbar-end bg-np w-40 md:py-8 px-6 hidden text-white skewed-heading-bg text-center ">

<div className="skewed-heading-content md:flex items-center hidden ">
< Link to="/contact-us">GET A QUOTE</Link>

 </div>

</div>
</div>
 </div>

    );
};

export default Header;