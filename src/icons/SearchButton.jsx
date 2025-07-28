import React from 'react';

const SearchButton = ({ onClick, color = 'white', width = '14', height = '15' }) => {

    const svgContent = (
        <svg width={width} height={height} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3333 10.8333L13 13.5M1 6.83333C1 8.24782 1.5619 9.60438 2.5621 10.6046C3.56229 11.6048 4.91885 12.1667 6.33333 12.1667C7.74782 12.1667 9.10438 11.6048 10.1046 10.6046C11.1048 9.60438 11.6667 8.24782 11.6667 6.83333C11.6667 5.41885 11.1048 4.06229 10.1046 3.0621C9.10438 2.0619 7.74782 1.5 6.33333 1.5C4.91885 1.5 3.56229 2.0619 2.5621 3.0621C1.5619 4.06229 1 5.41885 1 6.83333Z" stroke={color} strokeOpacity="0.8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <button onClick={onClick} style={{ border: 'none', background: 'none', padding: 0, margin: 0, cursor: 'pointer' }}>
            {svgContent}
        </button>
    );
};

export default SearchButton;
