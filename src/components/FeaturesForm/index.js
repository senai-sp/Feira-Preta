import React from 'react'
import { connect } from 'react-redux'
import { addFeature } from '../../actions'
import FormInput from '../Form/FormInput'
import FormButton from '../Form/FormButton'
import './FeaturesForm.css'


const FeaturesForm = props => {
    let link = '';

    return (
        <form className='features-form' onSubmit={(event) => {
            event.preventDefault()
            props.dispatchAddFeature(link)
        }} >
            <FormInput type="url" placeholder="Insira a url de um post aqui..." onChange={event => link = event.target.value} />
            <FormButton>Enviar</FormButton>
        </form>
    )

}

const mapDispatchToProps = dispatch => ({
    dispatchAddFeature: link => {
        dispatch(addFeature(link))
    }
})

export default connect(null, mapDispatchToProps)(FeaturesForm)