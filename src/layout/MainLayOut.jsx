import React from 'react';
import Header from '../shared/header/Header';
import Topbar from '../shared/topbar/Topbar';
import Footer from '../shared/footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayOut = () => {



    return (
        <div className='bg-white'>
         <div className=' relative bg-transparent  md:-mb-60 z-10'>
         <Topbar></Topbar>
            <Header></Header>
            </div>  
           <div className='bg-gray-200'>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
           
        </div>
    );
};

export default MainLayOut;