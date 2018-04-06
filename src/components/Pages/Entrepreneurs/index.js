import React from 'react'
import './Entrepreneurs.css'
import EntrepreneursForm from '../../EntrepreneursForm'
import EntrepreneurList from '../../EntrepreneurList'
import Toaster from '../../Toaster'

const Entrepreneurs = () => (
    <section className="entrepreneurs">
        <h1 className="entrepreneurs__title">Empreendedores</h1>
        <Toaster />
        <EntrepreneursForm />
        <EntrepreneurList />

    </section>
)

export default Entrepreneurs