import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/utility';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([])

    const data = useLoaderData();

    useEffect(() => {
        const storedData = getStoredBook();
        const convertedStoredData = storedData.map(id => parseInt(id))
        const readListData = data.filter(book => convertedStoredData.includes(book.bookId));
        setReadList(readListData)
    }, [])

    return (
        <div>
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