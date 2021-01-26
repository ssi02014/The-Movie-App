import React from 'react';
import Header from '../Header';
import '../../../scss/favorite.scss';

const FavoritePage = () => {
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
                            <th>Movie RunTime</th>
                            <th>Remove from Favorites</th>
                        </tr>
                    </thead>
                </table>
                       
            </div>
        </>
    );
};

export default FavoritePage;