import React from 'react';
import { use } from 'react';

const Book = ({ fetchPromise, bookData }) => {

    // const data = use(fetchPromise)
    // console.log("d", data)
    console.log(bookData)

    // author:"Paulo Coelho"
    // bookId:8
    // bookName:"The Alchemist"
    // category:"Fiction"
    // image:"https://i.ibb.co.com/zS9jsdK/18144590.jpg"
    // publisher:"HarperCollins"
    // rating:4.6
    // review:"'The Great Gatsby' by F. Scott Fitzgerald is a timeless masterpiece that delves into the decadence and disillusionment of the Jazz Age. Set in the Roaring Twenties, the novel unveils the enigmatic Jay Gatsby's extravagant parties, masking a pursuit of lost love. Narrated by Nick Carraway, the story explores themes of wealth, love, and the American Dream, drawing readers into a vivid portrayal of the glittering yet elusive world of the East and West Egg. Fitzgerald's prose is both poetic and haunting, weaving a compelling narrative that transcends its era. A poignant exploration of societal excess and the human condition, 'The Great Gatsby' remains a literary gem that resonates across generations."
    // tags:(2) ['Philosophical', 'Adventure']
    // totalPages:177
    // yearOfPublishing:1988

    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Card Title
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;