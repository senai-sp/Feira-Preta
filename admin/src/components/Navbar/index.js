import React from 'react'
import './Navbar.css'

const Navbar = () => (
    <header>
        <nav class="navbar">
            <img class="navbar__logo" src="https://i2.wp.com/feirapreta.com.br/wp-content/uploads/2016/09/logo_FFP_Branco.png?w=600" alt="Logo Feira Preta" />
            <ul class="navbar__links">
                <li class="menu-item"><a href="" class="menu-link">Home</a></li>
                <li class="menu-item"><a href="" class="menu-link">Empreendedores</a></li>
                <li class="menu-item"><a href="" class="menu-link">Destaques</a></li>
            </ul>
        </nav>
    </header>
)

export default Navbar