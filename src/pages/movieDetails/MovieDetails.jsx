import React from 'react'
import Client from '../template/Client'
import image from '../../assets/images/movie1.png'; // Placeholder image
import './MovieDetails.css';
import MovieCalendar from './components/movieCalendar/MovieCalendar';

function MovieDetails() {
    return (
        <Client>
            <div className='movie-details'>
                <div className='movie-header'>
                    <div className='movie-poster'>
                        <img src={image} alt="Movie Poster" />
                        <div className="gradient-overlay"></div>
                    </div>
                </div>
                <div className='movie-content'>
                    <h1 className='movie-title'>Movie Title</h1>
                    <p className='movie-description'>
                        El doble de acción Colt Seavers sufre una lesión y abandona la profesión, pero regresa para participar en una película que dirigirá la mujer de la que está enamorado.
                    </p>
                    <div className='category-pills-container'>
                        <div className='category-pill'>
                            <p>action</p>
                        </div>
                        <div className='category-pill'>
                            <p>action</p>
                        </div>
                        <div className='category-pill'>
                            <p>action</p>
                        </div>
                    </div>

                    <MovieCalendar />



                </div>
            </div>
        </Client>
    )
}

export default MovieDetails
