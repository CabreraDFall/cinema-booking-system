import React from 'react'
import Client from '../template/Client'
import Card from '../../components/card/Card'

function Home() {
    return (
        <Client>
            <div className='card-list'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <>
                <h4>Proximas semana</h4>
                <div className='card-list'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </>

        </Client>
    )
}

export default Home