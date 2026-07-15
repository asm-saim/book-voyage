import React from 'react';
import { use } from 'react';
import { IoStarSharp } from "react-icons/io5";
import { Link } from 'react-router';

const Book = ({ fetchPromise, bookData }) => {

    // const data = use(fetchPromise)
    // console.log("d", data)
    console.log(bookData)

    const { author, bookId, bookName, category, image, publisher,
        rating, review, totalPages, yearOfPublishing, tags } = bookData


    return (
        <Link to={`/book-details/${bookId}`}>
            <div className="card bg-base-100 w-80 shadow-sm mx-auto bg-gray-800">
                <figure className=' pt-5'>
                    <img className='h-60'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex justify-start gap-5'>
                        {
                            tags.map(tag => <button className='bg-gray-700 text-xs py-1 px-3 rounded-lg'>{tag}</button>)
                        }
                    </div>

                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <h3><span className='font-bold'>Book by:</span> {publisher}</h3>
                    <div className='border text-gray-600 border-dashed'></div>
                    <p className='line-clamp-3'>{review}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline pb-1">{category}</div>
                        <div className="badge badge-outline pb-1">{rating} <IoStarSharp /></div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;