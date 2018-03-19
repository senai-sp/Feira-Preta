import React from 'react'
import './Entrepreneurs.css'
import EntrepreneursForm from '../../EntrepreneursForm'
import EntrepreneurCard from '../../EntrepreneurCard'

const Entrepreneurs = () => (
    <article className="entrepreneurs">
        <h1 className="entrepreneurs__title">Empreendedores</h1>
        <EntrepreneursForm />
        <section>
            <EntrepreneurCard />
        </section>
    </article> 
)

export default Entrepreneurs