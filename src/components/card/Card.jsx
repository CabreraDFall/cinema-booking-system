import React from 'react'
import './card.css'



function CategoryPills() {
    return (
        <div className='category-pill'>
            <p>action</p>
        </div>
    )
}


function Card() {
    return (
        <div className="card-container">
            <div className='card-header'>
                <img src="src/assets/images/movie1.png" alt="Movie Poster" />
                <div className='card-info'>
                    <h1 className="card-title">Card Componento asdasdasdasdasdqasasssssssssssssssssss</h1>
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

        </div>
    )
}

export default Card
