import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {

    const loadedData = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Books loadedData={loadedData}></Books>
        </div>
    );
};

export default Home;