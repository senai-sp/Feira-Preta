import React from 'react'
import { connect } from 'react-redux'
import FormInput from './FormInput'
import FormButton from './FormButton'
import { addFeature } from '../../actions'
import './Form.css'

const Form = props => (
    <form className='feature-form' onSubmit={(event) => {
        event.preventDefault()
        props.enviaLink()
        }} >
        <p>Incluir Destaque</p>
        <FormInput className='feature-form__input' />
        <FormButton className='button button--secondary' children='Cancelar'/>
        <FormButton className='button button--primary' children='Enviar'/>
    </form>
)

const mapDispatchToProps = dispatch => ({
    enviaLink: () => {
        dispatch(addFeature(''))
    }
})

export default connect(null, mapDispatchToProps)(Form)