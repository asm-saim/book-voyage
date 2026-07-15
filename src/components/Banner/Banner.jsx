import React from 'react';
import banner from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='border border-amber-300 my-5 flex justify-between rounded-2xl overflow-hidden'>
            <div className='my-auto space-y-5'>
                <h1 className='font-bold text-5xl text-mist-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsa!</h1>

                <button className='btn bg-amber-400 text-black'>Learn More</button>
            </div>
            <img src={banner} alt="" />

        </div>
    );
};

export default Banner; 