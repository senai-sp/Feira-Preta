import React from 'react'
import { connect } from 'react-redux'
import { addFeature } from '../../actions'
import FormInput from '../Form/FormInput'
import FormButton from '../Form/FormButton'
import './FeaturesForm.css'


class FeaturesForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.dispatchAddFeature(this.value)
    }

    handleChange(value, isInvalid) {
        this.value = value
        this.setState({ isInvalid });
    }

    render() {
        const buttonProps = {}
        if (this.state.isInvalid) {
            buttonProps.disabled = true
        }

        return (
            <form className='features-form' onSubmit={this.handleSubmit} >
                <FormInput type="url" onChange={this.handleChange} />
                <FormButton { ...buttonProps }>Enviar</FormButton>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    dispatchAddFeature: link => {
        dispatch(addFeature(link))
    }
})

export default connect(null, mapDispatchToProps)(FeaturesForm)