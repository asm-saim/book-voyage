import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='max-w-6xl mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

            <ToastContainer position="top-center" />
        </>

    );
};

export default Root; 