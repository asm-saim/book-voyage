import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/utility';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([])

    const [sort, setSort] = useState("")

    const data = useLoaderData();

    useEffect(() => {
        const storedData = getStoredBook();
        const convertedStoredData = storedData.map(id => parseInt(id))
        const readListData = data.filter(book => convertedStoredData.includes(book.bookId));
        setReadList(readListData)
    }, [])

    //function for sort
    const handleSort = (type) => {
        setSort(type)

        if (type === "Publish Year") {
            const sortedPublishYear =
                [...readList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setReadList(sortedPublishYear)
        }
        if (type === "Ratings") {
            const sortedRatings = [...readList].sort((a, b) => a.rating - b.rating)
            setReadList(sortedRatings)
        }
    }

    return (
        <div>
            <div className='mx-auto w-fit'>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 bg-gray-700">Short By: {sort ? sort : ""}</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort("Publish Year")}>Publish Year</a></li>
                        <li><a onClick={() => handleSort("Ratings")}>Ratings</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Total Read Book: {readList.length} </h2>
                    <div className="grid gap-6 mb-7">
                        {
                            readList.map(bookList =>
                                <Book key={bookList.bookId} bookData={bookList}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any wish list content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;