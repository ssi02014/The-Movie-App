import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import Header from '../Header';

const HomePage = (props) => {

    //홈페이지 들어오면 useEffect를 실행 1번만
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data));
    }, []);

    const onClickHandler = () => {
        axios.get('/api/users/logout')
        .then(response => {

            console.log(response);

            if (response.data.success) {
                props.history.push('/login');
            } else {
                alert("로그아웃하는데 실패하였습니다.");
            }
        })
    }

    return (
        <>
            <Header></Header>
        </>

    );
};

export default withRouter(HomePage);