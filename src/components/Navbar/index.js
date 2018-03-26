import React from 'react'
import { Link } from 'react-router-dom'
import Toaster from '../Toaster'
import LogoFFP from './logo-FFP.png'
import FaBars from 'react-icons/lib/fa/bars'
import './Navbar.css'


const Navbar = () => (
    <header>
        <nav className="navbar">
            <img className="navbar__logo" src={LogoFFP} alt="Logo Feira Preta" />

            <div className="container">
                <label htmlFor="menu-hamburguer"><FaBars className="fas fa-bars" aria-hidden="true"></FaBars></label>
                <input type="checkbox" id="menu-hamburguer"></input>

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
            </div>
        </nav>
        <Toaster />
    </header>
)

export default Navbar