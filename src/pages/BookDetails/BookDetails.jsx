import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    //to get specific id
    const { id } = useParams();
    const bkId = parseInt(id)
    //load data
    const data = useLoaderData();

    const bookData = data.find(book => book.bookId === bkId)
    console.log(bookData)


    return (
        <div>
            <h2>Hello details </h2>
        </div>
    );
};

export default BookDetails;