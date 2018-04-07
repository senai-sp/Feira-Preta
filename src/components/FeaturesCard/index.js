import React from 'react'
import './FeaturesCard.css'


const FeaturesCard = props => (
    <div className="card">
        <button className="card__delete" type="button" onClick={props.click}>
            {props.children}
        </button>
        <p className="card__user">Publicado por {props.fullNameInstagram} (@{props.usernameInstagram})</p>
        <a target="_blank" href={props.href}>
            <img className="card__image" src={props.image} alt={props.text} />
        </a>
        <p className="card__text">{props.text}</p>
        <p className="card__text">{props.createdDate}</p>
    </div>
)

export default FeaturesCard