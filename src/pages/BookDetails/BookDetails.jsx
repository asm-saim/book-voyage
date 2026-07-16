import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/utility';
import Swal from 'sweetalert2'



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

    const handleMarkAsRead = (id) => {
        Swal.fire({
            title: "Book added to Read List!",
            text: "You clicked the button!",
            icon: "success"
        });

        addToStoredDB(id)
    }

    return (
        <div className='flex mt-5 mb-10'>
            <div className='flex-1 bg-gray-700 rounded-l-2xl p-5'>
                <img className='w-72 h-full mx-auto' src={image} alt="" />
            </div>
            <div className='flex-1 bg-gray-800 p-5  rounded-r-2xl'>
                <h1 className='font-bold text-4xl mb-2'>{bookName}</h1>
                <h3 className='text-lg my-2'><span className='font-bold'>By:</span>
                    <span className='italic'> {author}</span></h3>
                <h3 className='font-bold my-2'>{category}</h3>
                <p className='text-sm'><span className='font-bold my-2'>Review: </span>{review}</p>
                <div className='flex my-2'>
                    <p>{tags.map(tag => <button className=' bg-gray-700 rounded-lg px-2 py-0.2 mr-5'>{tag}</button>)}</p>
                </div>

                <p><span className='font-bold my-2'>Number of Pages: </span>{totalPages}</p>
                <p><span className='font-bold my-2'>Year of Publishing: </span> {yearOfPublishing}</p>
                <p><span className='font-bold my-2'>Rating: </span>{rating}</p>
                <div className='flex gap-5 my-2'>
                    <button onClick={() => handleMarkAsRead(id)} className='btn text-base text-black bg-lime-300'>Mark as Read</button>
                    <button className='btn text-base text-black bg-green-400'>Add to Wishlist</button>
                </div>
            </div>

        </div>
    );
};

export default BookDetails;