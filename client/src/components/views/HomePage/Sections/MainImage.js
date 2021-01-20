import React from 'react';

const MainImage = ({image, title, desc}) => {
    return (
        <div style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 39%, rgba(0,0,0,0) 41%, rgba(0, 0, 0, 0.65) 100%), url('${image}'), 100%`,
            height: '500px',
            backgroundSize: '100%, cover',
            // backgroundPosition: 'center, center',
            width: '100%',
            position: 'relative',
            marginTop: '50px'
        }}>
            <div>
                <div style={{
                    position: 'absolute', 
                    maxWidth: '500px',
                    bottom: '2rem',
                    marginLeft: '2rem',                    
                }}>
                    <h2 style={{ color: 'white' }}> {title}</h2>
                    <p style={{ color: 'white', fontSize: '1rem'}}>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default MainImage;