import React from 'react'
import './FormButton.css'


function classnames(className, secondary){
    let classes = ['form-button', className];
    
    if (secondary) {
        classes.push('form-button--secondary');
    }

    return classes.join(' ')
}


const FormButton = ({ className, secondary, children, ...props }) => (
    <button className={classnames(className, secondary)} {...props}>
        {children}
    </button>
)

export default FormButton