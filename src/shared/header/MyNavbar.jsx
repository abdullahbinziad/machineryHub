import React from 'react';
import Menu from './menu/Menu';
import logo from '../../assets/Np.png'
import { NewMenubar } from './menu/NewMenubar';

const MyNavbar = () => {
    return (
        <div className='flex  justify-between  mx-auto'>
            {/* <div className='w-16 '>
                <img className='w-full' src={logo} alt="" />
            </div> */}
         {/* <Menu></Menu> */}
         <NewMenubar/>
        </div>
    );
};

export default MyNavbar;