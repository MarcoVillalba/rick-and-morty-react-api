import React from 'react'
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 ">
                <div className="col">
                    <Link className="link" to='/personajes'>
                        <div className="card h-100 text-white bg-dark border-light">
                            <img src={require('../images/person.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title h-title h-title">Personajes</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link className="link" to='/locaciones'>
                        <div className="card h-100 text-white bg-dark border-light">
                            <img src={require('../images/portal.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title h-title">Locaciones</h5>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="col">
                    <Link className="link" to='/episodios'>
                        <div className="card h-100 text-white bg-dark border-light">
                            <img src={require('../images/tv.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title h-title">Episodios</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Index;