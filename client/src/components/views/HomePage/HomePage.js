import React, { useEffect } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import Header from '../Header';
import { API_URL, API_KEY } from '../../../config/Config';

const HomePage = (props) => {

    //홈페이지 들어오면 useEffect를 실행 1번만
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular/`;
    }, []);

    // const onClickHandler = () => {
    //     axios.get('/api/users/logout')
    //     .then(response => {

    //         console.log(response);

    //         if (response.data.success) {
    //             props.history.push('/login');
    //         } else {
    //             alert("로그아웃하는데 실패하였습니다.");
    //         }
    //     })
    // }

    return (
        <>
            <Header></Header>
            <div style={{
                width: '100%',
                margin: '0',
            }}>

                {/* Main Image */}
                <div style={{
                    width: '85%',
                    margin: '1rem auto',
                }}>
                    <h2>Movies by latest</h2>
                    <hr />

                    {/* Movie Grid Card */}
                    
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <button>Load More</button>
                </div>
            </div>
        </>

    );
};

export default withRouter(HomePage);