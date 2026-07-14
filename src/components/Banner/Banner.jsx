import React from 'react';
import banner from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='border border-amber-300 my-5 flex justify-between rounded-2xl overflow-hidden'>
            <div className='my-auto'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsa!</h1>
                <button className='btn'>Learn More</button>
            </div>
            <img src={banner} alt="" />

        </div>
    );
};

export default Banner; 