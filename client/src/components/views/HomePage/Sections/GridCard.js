import React from 'react';
import { Col } from 'antd';

const GridCard = ({ image, movieId, movieName }) => {
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
};

export default GridCard;