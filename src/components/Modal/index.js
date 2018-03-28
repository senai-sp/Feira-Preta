import React from 'react'
import FormButton from '../Form/FormButton'
import './modal.css'

const Modal = (props) => (
    <div className="modal" onClick={props.cancelHandler} >
        <div className="modal__form">
            <label>Confirma a exclusão de <strong>@{props.usernameInstagram}</strong>?</label>
            <FormButton type="button" onClick={props.cancelHandler} >Cancelar</FormButton>
            <FormButton type="submit" className="form-button--secondary" onClick={props.removeItem}>Excluir</FormButton>
        </div>
    </div>
)

export default Modal