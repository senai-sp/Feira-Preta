import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import Toaster from '../Toaster'
import LogoFFP from './logo-FFP.png'
import FaBars from 'react-icons/lib/fa/bars'
import FaClose from 'react-icons/lib/fa/close'
import './Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { menuOpen: false };
        this.toggleClick = this.toggleClick.bind(this)
    }

    toggleClick(event) {
        event.stopPropagation()
        this.setState(state => ({ menuOpen: !state.menuOpen }))
    }

    render() {
        
        return (
            <header>
                <nav className="navbar">
                    <div className={classnames({ 'switch': this.state.menuOpen, 'switch--off': !this.state.menuOpen })} onClick={this.state.menuOpen ? this.toggleClick : undefined} ></div>
                    <img className="navbar__logo" src={LogoFFP} alt="Logo Feira Preta" />
                    <nav className={this.state.menuOpen ? 'navbar-links-open' : 'navbar-links'}>
                        <Link className="link" to="/" onClick={this.toggleClick}>
                            Avaliação da Feira
                            </Link>
                        <Link className="link" to="/empreendedores" onClick={this.toggleClick}>
                            Empreendedores
                            </Link>
                        <Link className="link" to="/destaques" onClick={this.toggleClick}>
                            Destaques
                            </Link>
                        <Link className="link" to="/posts" onClick={this.toggleClick}>
                            Lista de Posts
                            </Link>
                    </nav>
                    <button className="hamburguer-button" onClick={this.toggleClick}>{this.state.menuOpen ? <FaClose className="fas fa-close" aria-hidden="true"></FaClose> : <FaBars className="fas fa-bars" aria-hidden="true"></FaBars>}</button>
                </nav>
                <Toaster />
            </header>
        )
    }
}

export default Navbar