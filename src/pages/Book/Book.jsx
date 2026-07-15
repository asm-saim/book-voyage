import React from 'react';
import { use } from 'react';
import { IoStarSharp } from "react-icons/io5";

const Book = ({ fetchPromise, bookData }) => {

    // const data = use(fetchPromise)
    // console.log("d", data)
    console.log(bookData)

    const { author, bookId, bookName, category, image, publisher,
        rating, review, totalPages, yearOfPublishing } = bookData


    return (
        <div className="card bg-base-100 w-80 shadow-sm mx-auto bg-gray-800">
            <figure className=' pt-5'>
                <img className='h-60'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline pb-1">{category}</div>
                    <div className="badge badge-outline pb-1">{rating} <IoStarSharp /></div>
                </div>
            </div>
        </div>
    );
};

export default Book;