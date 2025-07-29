import React from 'react'
import './ButtonMain.css';

function ButtonMain({ text = "Book Now" }) {
    return (
        <div className='button-main-container'>

            <div className='button-main'>
                <span>
                    {text}
                </span>
            </div>
        </div >
    )
}

export default ButtonMain