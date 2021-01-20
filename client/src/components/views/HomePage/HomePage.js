import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import Header from '../Header';
import MainImage from './Sections/MainImage';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../../config/Config';

const HomePage = (props) => {

    const [moive, setMovie] = useState([]);
    const [mainMovieImage, setMainMovieImage] = useState(null);

    //홈페이지 들어오면 useEffect를 실행 1번만
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setMovie([data.results]);
            setMainMovieImage(data.results[0]);
        })
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
                {mainMovieImage &&
                    <MainImage 
                        image={`${IMAGE_BASE_URL}w1280${mainMovieImage.backdrop_path}`}
                        title={mainMovieImage.original_title}
                        desc={mainMovieImage.overview}
                    />
                }
                

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