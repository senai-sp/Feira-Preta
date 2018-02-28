import React from 'react'
import './button.css'

const Button = (props) => (
    <button className={props.className}>{props.children}</button>
)

export default Button