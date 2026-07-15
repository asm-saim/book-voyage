import React, { Suspense, useEffect } from 'react';
import { useState } from 'react';
import Book from '../Book/Book';

const Books = ({ loadedData }) => {

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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto my-10'>
                    {
                        loadedData.map(bookData => <Book key={bookData.bookId} bookData={bookData}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;