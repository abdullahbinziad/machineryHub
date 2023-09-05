import React from 'react';
import  './serviceCard.css'

const ServiceCard = (props) => {

    const {icon, title,details} =props.content;
    return (
        <div data-aos="zoom-in">
            <div className=' card1 space-y-6 text-left p-4 hover:text-white'>

         <img className='w-16' src= {icon} alt="" />
                <h1 className='text-xl'>{title}</h1>
                <p className='font-sans'>{details}</p>
                <button className=' uppercase  text-black '> Read More</button>
            </div>
        </div>
    );
};

export default ServiceCard;