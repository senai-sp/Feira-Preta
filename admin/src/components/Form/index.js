import React from 'react'
import { connect } from 'react-redux'
import FormInput from './FormInput'
import FormButton from './FormButton'
import { addFeature } from '../../actions'
import './Form.css'

const Form = props => {
    let link = '';

    return (
        <form className='feature-form' onSubmit={(event) => {
            event.preventDefault()
            props.enviaLink(link)
        }} >
            <p>Incluir Destaque</p>
            <FormInput className='feature-form__input' onChange={evento => link = evento.target.value} />
            <FormButton className='button button--secondary' children='Cancelar' />
            <FormButton className='button button--primary' children='Enviar' />
        </form>
    )

}

const mapDispatchToProps = dispatch => ({
    enviaLink: link => {
        console.log('link', link)
        dispatch(addFeature(link))
    }
})

export default connect(null, mapDispatchToProps)(Form)