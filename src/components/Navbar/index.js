import React from 'react'
import { Link } from 'react-router-dom'
import LogoFFP from './logo-FFP.png'
import './Navbar.css'


const Navbar = () => (
    <header>
        <nav className="navbar">
            <img className="navbar__logo" src={LogoFFP} alt="Logo Feira Preta" />
            
            <ul className="navbar-links">
                <li className="navbar-links__item link">
                    <Link className="link" to="/">
                        Home
                    </Link>
                </li>
                <li className="navbar-links__item link">
                    <Link className="link" to="/empreendedores">
                        Empreendedores
                    </Link>
                </li>
                <li className="navbar-links__item link">
                    <Link className="link" to="/destaques">
                        Destaques
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
)

export default Navbar