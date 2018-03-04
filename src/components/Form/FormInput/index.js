import React from 'react'
import './FormInput.css'


function classnames(className, secondary){
    let classes = ['form-input', className];

    return classes.join(' ')
}


const FormInput = ({ className, ...props }) => (
    <input className={classnames(className)} {...props} />
)

export default FormInput