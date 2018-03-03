import React from 'react'
import LogoFFP from './logo-FFP.png'
import './Navbar.css'

const Navbar = () => (
    <header>
        <nav className="navbar">
            <img className="navbar__logo" src={LogoFFP} alt="Logo Feira Preta" />
            
            <ul className="navbar__links">
                <li className="menu-item"><a href="" className="menu-link">Home</a></li>
                <li className="menu-item"><a href="" className="menu-link">Empreendedores</a></li>
                <li className="menu-item"><a href="" className="menu-link">Destaques</a></li>
            </ul>
        </nav>
    </header>
)

export default Navbar