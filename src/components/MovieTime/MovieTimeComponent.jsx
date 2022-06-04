import React from 'react';
import './Movietime.css';

const MovieTimeComponent = () => {
    return (
        <>
            <div className="movie-times">
            <div className="movie-time">
                <div className="movie-time-item-time-text">
                    <p className='kinoSaal'>Kino 1</p>
                    <p className='kinoZeit'>18:00</p>
                    <p className='kinoArt'>2D</p>
                </div>
            </div>


            <div className="movie-time2">
                <div className="movie-time-item-time-text">
                    <p className='kinoSaal'>Kino 2</p>
                    <p className='kinoZeit'>20:30</p>
                    <p className='kinoArt'>3D</p>
                </div>
            </div>


            <div className="movie-time3">
                <div className="movie-time-item-time-text">
                    <p className='kinoSaal'>Kino 3</p>
                    <p className='kinoZeit'>22:30</p>
                    <p className='kinoArt'>2D</p>
                </div>
            </div>
            </div>
        </>
    )
}

export default MovieTimeComponent;
