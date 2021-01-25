import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../../scss/Button.scss';



const Favorite = ({movieInfo, userFrom, movieId}) => {
    const movieTitle = movieInfo.title;
    const moviePost = movieInfo.backdrop_path;
    const movieRunTime = movieInfo.runtime;

    const [favoriteNumber, setFavoriteNumber] = useState(0);
    const [favorited, setFavorited] = useState(false);

    let variables = {
        userFrom,
        movieId,
        movieTitle,
        moviePost,
        movieRunTime,
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

    const onClickFavorite = () => {
        if(favorited) {
            axios.post('/api/favorite/removeFromFavorite', variables)
                .then(response => {
                    if(response.data.success) {
                        setFavoriteNumber(favoriteNumber - 1);
                        setFavorited(!favorited);
                    } else {
                        alert('Favorite 리스트에서 지우는걸 실패');
                    }
                })
        } else {
            axios.post('/api/favorite/addToFavorite', variables)
                .then(response => {
                    if(response.data.success) {
                        setFavoriteNumber(favoriteNumber + 1);
                        setFavorited(!favorited);
                    } else {
                        alert('Favorite 리스트에서 추가하는걸 실패');
                    }
                })
        }
    }
    return (
        <div>
            <button 
                className={favorited ? "favorite-btn active" : "favorite-btn"}
                style={{ padding:'5px 15px'}}
                onClick={onClickFavorite}
            > {favorited ? "Not Favorited" : "Add to Favorite"} {favoriteNumber}</button>
        </div>
    );
};

export default Favorite;