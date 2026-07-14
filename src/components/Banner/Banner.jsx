import React from 'react';
import banner from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='border border-amber-300 my-5 h-130 bg-cover rounded-2xl bg-no-repeat bg-center'
         style={{ backgroundImage: `url(${banner})` }}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, ipsa!</h1>
            <button className='btn'>Learn More</button>

        </div>
    );
};

export default Banner; 