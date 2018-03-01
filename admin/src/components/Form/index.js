import React from 'react'
import FormInput from './FormInput'
import FormButton from './FormButton'

const Form = props => (
    <form>
        <FormInput />
        <FormButton className='button button--secondary' children='Cancelar'/>
        <FormButton className='button button--primary' children='Enviar'/>
    </form>
)

export default Form