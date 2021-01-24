import React from 'react';
import { Col } from 'antd';

const GridCard = ({ image, movieId, movieName, homepage, characterName }) => {

    if(homepage) {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position:'relative' }}>
                    <a href={`/movie/${movieId}`}>
                        <img 
                            src={image} 
                            alt={movieName}
                            style={{
                                width: '100%',
                                hegith: '320px',
                            }}
                        />
                    </a>
                </div>
            </Col>
        );
    } else {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position:'relative' }}>
                        <img 
                            src={image} 
                            alt={characterName}
                            style={{
                                width: '100%',
                                hegith: '320px',
                            }}
                        />
                </div>
            </Col>
        );
    }
    
};

export default GridCard;