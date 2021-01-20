import React, { useEffect, useState } from 'react';
import {  withRouter } from 'react-router-dom';
import Header from '../Header';
import MainImage from './Sections/MainImage';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../../config/Config';
import GridCard from './Sections/GridCard';
import {Row} from 'antd';

const HomePage = () => {

    const [movies, setMovies] = useState([]);
    const [mainMovieImage, setMainMovieImage] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);

    //홈페이지 들어오면 useEffect를 실행 1번만
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

        fetchMovies(endpoint);
    }, []);

    const fetchMovies = (endpoint) => {
        fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            setMovies([...movies, ...data.results]);
            setMainMovieImage(data.results[0]);
            setCurrentPage(data.page);
        })
    }
    const loadMoreItems = () => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage + 1}`;

        fetchMovies(endpoint);
    }
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
                    <Row gutter={[16, 16]}>
                        {movies && movies.map((movie, index) => (
                            <React.Fragment key={index}>
                                <GridCard
                                    image={movie.poster_path ? 
                                    `${IMAGE_BASE_URL}w500${movie.poster_path}` : null}
                                    movieId={movie.id}
                                    movieName={movie.original_title}

                                ></GridCard>
                            </React.Fragment>
                        ))}
                    </Row>
                    
                    
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <button onClick={loadMoreItems}>Load More</button>
                </div>
            </div>
        </>

    );
};

export default withRouter(HomePage);