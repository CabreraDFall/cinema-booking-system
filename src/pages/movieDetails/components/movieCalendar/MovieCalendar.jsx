import React from 'react'
import LeftArrow from '../../../../icons/LeftArrow'
import RightArrow from '../../../../icons/RightArrow'
import './MovieCalendar.css'
import ButtonMain from '../../../../components/buttonMain/ButtonMain'






function MovieCalendar() {
    return (
        <>
            <div className='movie-calendar'>
                <LeftArrow onClick={() => console.log('Left arrow clicked')} />
                <div className='movie-calendar-container'>
                    <span className='movie-calendar-title'>Movie Calendar</span>
                    <div className='movie-calendar-date'>
                        <span>16 / </span>
                        <span>7 </span>
                    </div>
                </div>
                <RightArrow onClick={() => console.log('Right arrow clicked')} />
            </div>


            <div className='category-pills-container'>
                <div className='category-pill'>
                    <p>12:00</p>
                </div>
                <div className='category-pill'>
                    <p>14:00</p>
                </div>

                <div className='category-pill'>
                    <p>16:00</p>
                </div>
                <div className='category-pill active'>
                    <p>18:00</p>
                </div>
                <div className='category-pill'>
                    <p>20:00</p>
                </div>
                <div className='category-pill'>
                    <p>22:00</p>
                </div>
                <div className='category-pill'>
                    <p>00:00</p>
                </div>

            </div>

            <ButtonMain text={"Elegir"} />
        </>
    )
}

export default MovieCalendar