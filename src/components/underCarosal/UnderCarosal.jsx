import React from 'react';
import img1 from '../../assets/img/video-bg.jpg';
import Play from '../playbutton/Play';

const UnderCarosal = () => {
    return (
        <div className=' md:w-3/4  relative  z-10  mx-auto'>
            <div className='bg-[#0078D7] md:p-0 p-4  text-white flex md:flex-row flex-col items-center justify-between '>
<div className='p-6'>
    <h1 className='text-2xl leading-9 text-center '>
 Enter SEARCH Mission Provide <span className='font-bold'>best industrial</span> solution for everyone.</h1>
    <h3 className='md:m-0 my-6 text-xl'>Maintains a highly trained, qualified and experienced workforce.
</h3>
</div>
<div  style={{
        backgroundImage: `url(${img1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover'
       
      }} className='w-80 h-40 flex justify-center items-center'>

<Play></Play>
</div>
            </div>
        </div>
    );
};

export default UnderCarosal;