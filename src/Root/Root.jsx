import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div >
            <div className='bg-white'>
            <Header></Header>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;