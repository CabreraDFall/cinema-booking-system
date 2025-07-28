import React from 'react'
import SearchButton from '../../icons/SearchButton'
import TicketButton from '../../icons/TicketButton'
import './TopMenu.css'


function TopMenu() {
    return (
        <div className="top-menu">
            <SearchButton />
            <h3>Que ver</h3>
            <TicketButton />
        </div>
    )
}

export default TopMenu