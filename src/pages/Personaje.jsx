import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { NotFound } from './NotFound';

const Personaje = () => {

    const [personaje, setPersonaje] = useState([])

    const {id} = useParams()

    useEffect ( () =>{
        getPersonaje()
    }, [])


    const getPersonaje = async() => {

        // Recupera valores de la API
        await fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then(response => response.json())
                .then(data => setPersonaje(data))
    }

    return (
        <div className="container">
            <div className="character">
                {
                    personaje ? 
                    (
                        <div className="box-character" key={personaje.id}>
                            <img src={personaje.image} alt={personaje.name} />
                            <div className="personaje">
                                <h3 className="name">{personaje.name}</h3>
                                <p className="specie">{personaje.species}</p>
                                <p className="status">{personaje.status}</p>
                                <p className="gender">{personaje.gender}</p>                                
                            </div>
                        </div>
                    ) :
                    (
                        <div>
                            <NotFound/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Personaje;