import React from 'react'
import { Link } from 'react-router-dom';
import './card.css'

import movie1 from '../../assets/images/movie1.png';


function CategoryPills() {
    return (
        <div className='category-pill'>
            <p>action</p>
        </div>
    )
}


function Card() {
    return (
        <Link to="/movie" className="card-container">
            <div className='card-header'>
                <img src={movie1} alt="Movie Poster" />
                <div className='card-info'>
                    <h1 className="card-title">Card Componento </h1>
                    <div className='card-details'>
                        <span className='duration'>2h 6min</span>
                        <span>4.5</span>
                    </div>
                </div>
            </div>
            <div className="card-content">
                <span>$6.00</span>
                <div className='category-pills-container'>
                    <CategoryPills />
                    <CategoryPills />
                    <CategoryPills />

                </div>
            </div>

        </Link>
    )
}

export default Card
