import React, { useState, useEffect } from 'react'
import { NotFound } from './NotFound';

export const Locaciones = () => {

    const [locaciones, setLocaciones] = useState([])

    useEffect(() => {

        getResults()

    }, [])

    const getResults = () => {

        fetch('https://rickandmortyapi.com/api/location')
            .then(response => response.json())
            .then(data => setLocaciones(data.results))
    }

    return (
        <div className="container">
            <div className="locaciones">
                <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
                    {
                        locaciones ?
                            (
                                locaciones.map(item => (

                                    <div className="col" key={item.id}>
                                     <div className="card h-100 text-white bg-dark border-light">
                                         <div className="card-body">
                                             <h5 className="card-title name-lc">{item.name}</h5>
                                             <p className="card-text type-lc">Tipo: {item.type}</p>
                                             <p className="text-muted dimension-lc">Dimensión: {item.dimension}</p>
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