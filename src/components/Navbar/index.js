import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Toaster from '../Toaster'
import LogoFFP from './logo-FFP.png'
import FaBars from 'react-icons/lib/fa/bars'
import './Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { toggleMenu: false };
        this.toggleClick = this.toggleClick.bind(this);
    }

    toggleClick() {
        this.setState(state => ({
            toggleMenu: !state.toggleMenu
        }));
    }

    render() {
        return (
            <header>
                <nav className="navbar">
                    <img className="navbar__logo" src={LogoFFP} alt="Logo Feira Preta" />

                    <div>
                        <nav classname={this.state.toggleMenu ? 'navbar-links-open' : 'navbar-links'}>
                            <Link className="link" to="/">
                                Home
                            </Link>
                            <Link className="link" to="/empreendedores">
                                Empreendedores
                            </Link>
                            <Link className="link" to="/destaques">
                                Destaques
                            </Link>
                        </nav>
                        <button className="hamburguer-button" onClick={this.toggleClick}><FaBars className="fas fa-bars" aria-hidden="true"></FaBars></button>
                    </div>
                </nav>
                <Toaster />
            </header>
        )
    }
}

const mapStateToProps = state => ({
    navbar: state.navbar
})

export default connect(mapStateToProps, null)(Navbar)