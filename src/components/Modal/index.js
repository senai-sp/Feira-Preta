import React from 'react'
import './modal.css'

const Modal = (props) => (
    <div className="modal" onClick={props.cancelHandler} >
        {props.children}
    </div>
)

export default Modal