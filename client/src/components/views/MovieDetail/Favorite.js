import React, { useEffect } from 'react';
import axios from 'axios';

const Favorite = ({movieInfo, userFrom, movieId}) => {
    const movieTitle = movieInfo.title;
    const moviePost = movieInfo.backdrop_path;
    const movieRunTime = movieInfo.runtime

    let variables = {
        userFrom,
        movieId,
    }
    useEffect(() => {
        axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                console.log(response.data);
                if (response.data.success) {

                } else {
                    alert('숫자 정보를 가져오는데 실패 했습니다.')
                }
            })
    }, [])
    return (
        <div>
            <button style={{ padding:'5px 15px'}}>Favorite</button>
        </div>
    );
};

export default Favorite;