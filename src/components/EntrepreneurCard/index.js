import React from 'react'
import './EntrepreneurCard.css'


const EntrepreneurCard = props => (
    <div className="entrepreneur-card" key={props.id} >
        <img className="entrepreneur-card__profile-img" src={props.profilePictureInstagram} alt="Foto do perfil do empreendedor no Instagram" />
        <span className="user">
            <h3>@{props.usernameInstagram}</h3>
            <h3>{props.fullNameInstagram}</h3>
            <h3>{props.phoneNumber}</h3>
        </span>
        <ul className="card-links">
            <li className="card-links__edit" onClick={props.clickEdit} >Editar</li>
            <li className="card-links__remove" onClick={props.clickRemove} >Remover</li>
        </ul>
    </div>
)

export default EntrepreneurCard