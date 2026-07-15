import React, { Suspense, useEffect } from 'react';
import { useState } from 'react';
import Book from '../Book/Book';

const Books = ({loadedData}) => {

    // const [allBooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data => { setAllBooks(data) })
    // }, [])

    // Using use State:
    // const fetchPromise = fetch("booksData.json").then(res => res.json())


    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-16 mb-5'>Available Books</h1>
            <Suspense fallback="Loading...">
                {
                    loadedData.map(bookData=><Book bookData={bookData}></Book>)
                }
            </Suspense>
        </div>
    );
};

export default Books;