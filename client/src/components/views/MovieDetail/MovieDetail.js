import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../../config/Config';
import MainImage from '../HomePage/Sections/MainImage';
import MovieInfo from './MovieInfo';

const MovieDetail = (props) => {
    const movieId = props.match.params.movieId;
    const [movie, setMovie] = useState([]);

    useEffect(() => {

        const endPointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        const endPointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
        
        console.log(props.match);
        fetch(endPointInfo)
            .then(response => response.json())
            .then(data => {
                setMovie(data);
            })
    }, [])


    return (
        <div>
            
            {/* Header */}
            <MainImage 
                image={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`}
                title={movie.original_title}
                desc={movie.overview}
            />

            {/* Body */}

            <div style={{ width: '85%', margin: '1rem auto'}}>
                
                {/* Movie Info */}

                <MovieInfo movie={movie}></MovieInfo>

                {/*Actor Grid*/}

                <div style={{ display: 'flex', justifyContent: 'center', margin: ' 2rem'}}>
                    <button>Toggle Actor View</button>
                </div>
            </div>
        </div>
    );
};

export default withRouter(MovieDetail);