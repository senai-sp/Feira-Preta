import React from 'react'
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o'
import './FeaturesCard.css'


const FeaturesCard = props => (
    <div className="card">
        <button className="card__delete" type="button" onClick={props.click}>
            <FaTimesCircleO className="fas fa-times-circle" aria-hidden="true"></FaTimesCircleO>
        </button>
        <h3 className="card__user">{props.user}</h3>
        <a target="_blank" href={props.href}>
            <img className="card__image" src={props.image} alt={props.text} />
        </a>
        <p className="card__text">{props.text}</p>
    </div>
)

export default FeaturesCard