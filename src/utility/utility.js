import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const getStoredBook = () => {

    const storedBookSTR = localStorage.getItem("readList")

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR)
        return storedBookData;
    }
    else {
        return [];
    }
}

const addToStoredDB = (id) => {

    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        toast.error("Book already added!");
    }
    else {
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData)
        localStorage.setItem("readList", data)
        toast.success("Book added to Read List!");
        console.log(data)
    }

}
export { addToStoredDB, getStoredBook }