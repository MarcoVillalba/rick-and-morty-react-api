import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { NotFound } from './NotFound';

export const Personajes = () => {

    const [personaje, setPersonaje] = useState([])

    const [filtroPersonaje, setFiltroPersonaje] = useState(null)

    const [filtroPaginas, setfiltroPaginas] = useState(null)

    useEffect(() => {

        getResults()

    }, [])

    const searchResult = (e) => {
        e.preventDefault()

        getResults()
    }

    const getResults = () => {

        if (filtroPersonaje) {

            fetch(`https://rickandmortyapi.com/api/character/?name=${filtroPersonaje}`)
                .then(response => response.json())
                .catch(e => {
                    console.log('err=>'.e.error)
                })
                .then(data => setPersonaje(data.results))

        } else if(filtroPaginas) {
        
            fetch(`https://rickandmortyapi.com/api/character/?page=${filtroPaginas}`)
                .then(response => response.json())
                .then(data => setPersonaje(data.results))

        }else{
            
            fetch('https://rickandmortyapi.com/api/character')
                .then(response => response.json())
                .then(data => setPersonaje(data.results))
        }
    }

    return (
        <div className="container">
            <form className='form-group' onSubmit={searchResult}>
                <div className="input-group mt-3 mb-3">
                    <input type="text" className="form-control"
                        placeholder="Buscar Personaje" aria-label="Buscar Personaje"
                        aria-describedby="button-addon" onChange={(e) => { setFiltroPersonaje(e.target.value) }}
                    />
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon"
                    >Buscar</button>
                </div>
            </form>

            <div className="personajes">
                {
                    personaje ?
                        (
                            personaje.map(item => (
                                <div className="box" key={item.id}>
                                    <img src={item.image} alt={item.name} />
                                    <div className="personaje">
                                        <Link className="link" to={`/personaje/${item.id}`}>
                                            {<h3 className="name">{item.name}</h3>}
                                        </Link>
                                        <p className="specie">{item.species}</p>
                                        <p className="status">{item.status}</p>
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
    )
}