import React from 'react'


const Section = props => (
    <div className="card">
        <button className="card__delete" type="button" onClick="removeCard(event, ${position})">
            <i className="fas fa-times-circle" aria-hidden="true"></i>
        </button>
        <img className="card__image" src="${XXXXX.image}" alt="" />
        <p className="card__text">${XXXXX.text}</p>
        <span className="card__user">${XXXXX.user}</span>
    </div>
)

export default Section