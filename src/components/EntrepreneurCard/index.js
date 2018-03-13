import React from 'react'

import './EntrepreneurCard.css'


const EntrepreneurCard = props => (
    <div className="entrepreneur-card">
        <h3 className="user">{props.user}</h3>
        <ul className="card-links">
                <li className="card-links__edit">Editar</li>
                <li className="card-links__remove">Remover</li>
        </ul>
    </div>
)

export default EntrepreneurCard