import React from 'react'

export const NotFound = () => {
    return (
        <div className="container">
            <h3 className="h-title">404 - Not Found</h3>
            <div className="imgError">
                <img className="imgErrorDet" src={require('../images/rick.gif')} alt="404 - Not Found" />
            </div>

        </div>
    )
}