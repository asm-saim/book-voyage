import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Errorpage from '../pages/ErrorPage/Errorpage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                index: true,
                path: "/",
                loader: () => fetch("booksData.json"),
                Component: Home
            },
            {
                path: "/about",
                Component: About
            }
        ]
    }
])