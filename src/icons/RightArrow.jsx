import React from 'react';

const RightArrow = ({ onClick, width = 9, height = 14, color = "#FFFAFA" }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            style={{ transform: 'rotate(180deg)' }}
        >
            <path d="M7.5 13L1.5 7L7.5 1" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default RightArrow;
