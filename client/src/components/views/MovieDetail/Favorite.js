import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Favorite = ({movieInfo, userFrom, movieId}) => {
    const movieTitle = movieInfo.title;
    const moviePost = movieInfo.backdrop_path;
    const movieRunTime = movieInfo.runtime;

    const [favoriteNumber, setFavoriteNumber] = useState(false);
    const [favorited, setFavorited] = useState(false);

    let variables = {
        userFrom,
        movieId,
    };
    useEffect(() => {
        axios.post('/api/favorite/favoriteNumber', variables)
            .then(response => {
                console.log(response.data);
                if (response.data.success) {
                    setFavoriteNumber(response.data.favoriteNumber);
                } else {
                    alert('숫자 정보를 가져오는데 실패 했습니다.');
                }
            })

        axios.post('/api/favorite/favorited', variables)
        .then(response => {
            console.log(response.data);
            if (response.data.success) {
                setFavorited(response.data.favorited);
            } else {
                alert('정보를 가져오는데 실패했습니다.');
            }
        })
    }, []);
    return (
        <div>
            <button style={{ padding:'5px 15px'}}>{favorited ? "Not Favorited" : "Add to Favorite"} {favoriteNumber}</button>
        </div>
    );
};

export default Favorite;