import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Menu = () => {

    let navigate = useNavigate();

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className="container-fluid">
                    <button className="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarContent">
                        <ul className='navbar-nav ms-auto' onClick={handleNavCollapse}>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/'>
                                    <FontAwesomeIcon icon={['fas', 'home']} />
                                    Inicio
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/personajes'>
                                    <FontAwesomeIcon icon={['fas', 'user-friends']} />
                                    Personajes
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/episodios'>
                                    <FontAwesomeIcon icon={['fas', 'tv']} />
                                    Episodios
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/locaciones'>
                                    <FontAwesomeIcon icon={['fas', 'map-marked']} />
                                    Locaciones
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/about'>
                                    <FontAwesomeIcon icon={['fas', 'question-circle']} />
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

        </div>
    )
}
