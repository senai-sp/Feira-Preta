import React from 'react'
import CardButton from './CardButton'
import CardDescription from './CardDescription'
import CardImage from './CardImage'
import CardUser from './CardUser'
import './card.css'


const Card = props => (
    <div className="card">
        {/*<button className="card__delete" type="button" onClick="">
            <i className="fas fa-times-circle" aria-hidden="true"></i>
        </button>*/}
        <img className="card__image" src={props.image} alt="" />
        <p className="card__text">{props.text}</p>
        <span className="card__user">{props.user}</span>
    </div>
)

export default Card