import React from 'react';
import banner from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='my-5 flex justify-between rounded-2xl overflow-hidden'>
            <div className='my-auto space-y-10'>
                <h1 className='font-bold text-5xl text-mist-400 leading-tight'>
                    Discover New Books to Freshen Up <br />
                    Your Bookshelf and Spark Your Imagination
                </h1>
                <button className='mx-auto btn bg-lime-300 text-base text-black'>Learn More</button>
            </div>
            <img className='h-[500px] object-cover w-1/2' src={banner} alt="" />

        </div>
    );
};

export default Banner; 