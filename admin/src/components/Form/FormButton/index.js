import React from 'react'
import './FormButton.css'

const FormButton = (props) => (
    <button className={ props.className } >
        { props.children }
    </button>
)

export default FormButton