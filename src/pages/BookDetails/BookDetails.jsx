import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    //to get specific id
    const { id } = useParams();
    const bkId = parseInt(id)
    //load data
    const data = useLoaderData();

    const singleBook = data.find(book => book.bookId === bkId)
    console.log(singleBook);

    const { author, bookId, bookName, category, image, publisher,
        rating, review, totalPages, yearOfPublishing, tags } = singleBook



    return (
        <div className='border border-amber-300 flex my-10 gap-10'>
            <div className='flex-1 bg-gray-700 rounded-2xl p-5'>
                <img className='w-72 h-full mx-auto' src={image} alt="" />
            </div>
            <div className='flex-1'>
                <h1 className='font-bold text-4xl mb-2'>{bookName}</h1>
                <h3 className='text-lg my-2'><span className='font-bold'>By:</span>
                    <span className='italic'> {author}</span></h3>
                <h3>{category}</h3>
                <p className='text-sm'>Review:{review}</p>
                <p>{tags.map(tag => <button>{tag}</button>)}</p>
                <p>NUmber of Pages: {totalPages}</p>
                <p>Year of Publishing: {yearOfPublishing}</p>
                <p>Rating: {rating}</p>
                <div className='flex gap-5'>
                    <button className='btn'>Read</button>
                    <button className='btn'>Watch list</button>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;