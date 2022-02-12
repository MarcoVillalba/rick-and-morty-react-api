import React, { useState, useEffect } from 'react'
import { NotFound } from './NotFound';

const Episodios = () => {

    const [episodios, setEpisodios] = useState([])

    useEffect(() => {

        getResults()

    }, [])

    const getResults = () => {

        fetch('https://rickandmortyapi.com/api/episode')
            .then(response => response.json())
            .then(data => setEpisodios(data.results))
    }

    return (
        <div className="container">
            <div className="episodios">
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
                    {
                        episodios ?
                            (
                                episodios.map(item => (

                                    <div className="col" key={item.id}>
                                        <div className="card h-100 text-white bg-dark border-light">
                                            <div className="card-body">
                                                <h5 className="card-title name-ep">{item.name}</h5>
                                                <p className="card-text episode-ep">{item.episode}</p>
                                            </div>
                                            <div className="card-footer">
                                                <small className="text-muted air_date-ep">Emision: {item.air_date}</small>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) :
                            (
                                <div>
                                    <NotFound />
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Episodios;