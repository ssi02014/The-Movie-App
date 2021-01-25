import React from 'react';
import HomePage from '../components/views/HomePage/HomePage';
import Header from '../components/views/Header';
import { withRouter } from 'react-router-dom';

const mainPage = () => {
    return (
        <>
            <Header></Header>
            <HomePage></HomePage>
        </>
    );
};

export default withRouter(mainPage);