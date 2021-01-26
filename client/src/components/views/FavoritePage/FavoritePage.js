import React, { useEffect, useState } from 'react';
import Header from '../Header';
import '../../../scss/favorite.scss';
import axios from 'axios';
import { Popover } from 'antd';
import { IMAGE_BASE_URL } from '../../../config/Config';

const FavoritePage = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        fetchFavorite()
    },[]);
    
    const fetchFavorite = () => {
        axios.post('/api/favorite/getFavoritedMovie', { userFrom: localStorage.getItem('userID') })
        .then(response => {
            if(response.data.success) {
                console.log(response.data);
                setFavorites(response.data.favorites);
            } else {
                alert('영화정보를 불러오는데 실패했습니다.');
            }
        })
    }

    const onClickDelete = (movieId, userFrom) => {
        const variables = {
            movieId,
            userFrom
        }
        axios.post('/api/favorite/removeBtnFavorite', variables)
            .then(response => {
                if (response.data.success) {
                    fetchFavorite()
                } else {
                    alert('리스트에서 지우는데 실패');
                }
            })
    }
    
    const renderCard = favorites.map((favorite, index) => {
        const content = (
            <div>
                {favorite.moviePost ? 
                    <img src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`}/> :
                    "No Image"
                };
            </div>
        );
        return <tr key={index}>
                    <Popover 
                        content={content}
                        title={`${favorite.movieTitle}`}
                        >
                        <td>{favorite.movieTitle}</td>
                    </Popover>
                    <td>{favorite.movieId}</td>
                    <td>
                        <button onClick={() => onClickDelete(favorite.movieId, favorite.userFrom)}>
                            Remove
                        </button>
                    </td>
                </tr>
    });

    return (
        <>  
            <Header></Header>
            <div style={{ width: '85%', margin: '5rem auto'}}>
                <h2>Favorite Movies</h2>
                
                <hr />

                <table>
                    <thead>
                        <tr>
                            <th>Movie Tite</th>
                            <th>Movie ID</th>
                            <th>Remove from Favorites</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderCard}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default FavoritePage;