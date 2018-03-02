import React from 'react'
import FormInput from './FormInput'
import FormButton from './FormButton'
import './Form.css'

const Form = props => (
    <form className='feature-form'>
        <p>Incluir Destaque</p>
        <FormInput className='feature-form__input' />
        <FormButton className='button button--secondary' children='Cancelar'/>
        <FormButton className='button button--primary' children='Enviar'/>
    </form>
)

export default Form