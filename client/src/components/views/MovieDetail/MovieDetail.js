import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../../config/Config';
import MainImage from '../HomePage/Sections/MainImage';
import MovieInfo from './MovieInfo';
import GridCard from '../HomePage/Sections/GridCard';
import { Row } from 'antd';

const MovieDetail = (props) => {
    const movieId = props.match.params.movieId;
    const [movie, setMovie] = useState([]);
    const [casts, setCasts] = useState([]);
    const [actorToggle, setActorToggle] = useState(false);

    useEffect(() => {

        const endPointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        const endPointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
        
        console.log(props.match);
        fetch(endPointInfo)
            .then(response => response.json())
            .then(data => {
                setMovie(data);
            });

        fetch(endPointCrew)
        .then(response => response.json())
        .then(data => {
            setCasts(data.cast);
            console.log(data.cast);
        });    
    }, []);

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

                <MovieInfo movie={movie} />

                {/*Actor Grid*/}

                <div style={{ display: 'flex', justifyContent: 'center', margin: ' 2rem'}}>
                    <button 
                        onClick={() => setActorToggle(!actorToggle)}
                        style={{ padding: '5px 10px'}}
                    > Toggle Actor View
                    </button>
                </div>

                {actorToggle && 
                    <Row gutter={[16, 16]}>
                        {casts && casts.map((cast, index) => (
                            <React.Fragment key={index}>
                                <GridCard
                                    image={cast.profile_path ? 
                                    `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
                                    characterName={cast.name}
                                />
                            </React.Fragment>
                        ))}
                    </Row>
                }
            </div>
        </div>
    );
};

export default withRouter(MovieDetail);