import React from 'react'
import TopMenu from '../../components/topMenu/TopMenu'

function Client({ children }) {
    return (

        <div className='client-page'>

            <div className='client-header'>
                <TopMenu />
            </div>

            <div className='client-content'>
                {children}
            </div>

        </div>


    )
}

export default Client