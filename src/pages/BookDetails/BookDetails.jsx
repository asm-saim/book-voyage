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
        <div className='border border-amber-300 flex'>
            <div className='flex-1'>
                <img className='w-72' src={image} alt="" />
                <h2>{bookName}</h2>
            </div>
            <div className='flex-1'>
                <h2>{author}</h2>
            </div>

        </div>
    );
};

export default BookDetails;