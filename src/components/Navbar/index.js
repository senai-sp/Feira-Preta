import React from 'react'
import LogoFFP from './logo-FFP.png'
import './Navbar.css'


const Navbar = () => (
    <header>
        <nav className="navbar">
            <img className="navbar__logo" src={LogoFFP} alt="Logo Feira Preta" />
            
            <ul className="navbar-links">
                <li className="navbar-links__item">
                    <a href="" className="link">Home</a>
                </li>
                <li className="navbar-links__item">
                    <a href="" className="link">Empreendedores</a>
                </li>
                <li className="navbar-links__item">
                    <a href="" className="link">Destaques</a>
                </li>
            </ul>
        </nav>
    </header>
)

export default Navbar