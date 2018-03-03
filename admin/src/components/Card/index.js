import React from 'react'
import FaTimesCircleO from 'react-icons/lib/fa/times-circle-o'
import './card.css'


const Card = props => (
    <div className="card">
        {/*<button className="card__delete" type="button" onClick="">
            <i className="fas fa-times-circle" aria-hidden="true"></i>
        </button>*/}
        <span className="card__user">{props.user}</span>
        <img className="card__image" src={props.image} alt={props.text} />
        <p className="card__text">{props.text}</p>
    
    </div>
)

export default Card