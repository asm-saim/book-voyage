import React from 'react';
import banner from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='my-5 flex justify-between rounded-2xl overflow-hidden'>
            <div className='my-auto space-y-10'>
                <h1 className='font-bold text-5xl text-mist-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsa!</h1>

                <button className='mx-auto btn bg-lime-300 text-base text-black'>Learn More</button>
            </div>
            <img className='h-[470px] object-cover w-1/2' src={banner} alt="" />

        </div>
    );
};

export default Banner; 