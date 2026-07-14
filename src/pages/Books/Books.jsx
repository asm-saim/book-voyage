import React, { useEffect } from 'react';
import { useState } from 'react';

const Books = () => {

    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch("booksData.json")
            .then(res => res.json())
            .then(data => { setAllBooks(data) })
    }, [])
    
    console.log('he',allBooks)

    return (
        <div>
            <h1>hello books</h1>
        </div>
    );
};

export default Books;