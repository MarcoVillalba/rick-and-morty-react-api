import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Menu = () => {

    let navigate = useNavigate(); 

    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <ul className='navbar-nav ms-auto'>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/'>
                            <FontAwesomeIcon icon={['fas', 'home']} /> 
                             Inicio 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link  className='nav-link' to='/personajes'> 
                        <FontAwesomeIcon icon={['fas', 'user-friends']} />
                            Personajes 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link  className='nav-link' to='/episodios'> 
                        <FontAwesomeIcon icon={['fas', 'tv']} />
                            Episodios 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link  className='nav-link' to='/locaciones'> 
                        <FontAwesomeIcon icon={['fas', 'map-marked']} />
                            Locaciones 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link  className='nav-link' to='/about'> 
                        <FontAwesomeIcon icon={['fas', 'question-circle']} />
                            About 
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}
