import React from 'react'
import { Menu } from './Menu';

export const Header = ({ title }) => {
    return (
        <header>
             <Menu></Menu>
            <div className="container">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="text"> React Api for Rick and Morty</p>
                </div>
            </div>
        </header>
    );
}