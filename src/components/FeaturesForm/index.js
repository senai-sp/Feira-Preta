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
        this.validate = this.validate.bind(this)
        this.handleBla = this.handleBla.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.dispatchAddFeature(this.value)
    }

    handleBla(value, isInvalid, event) {
        this.handleChange(value, isInvalid)
        this.validate(event)
        console.log(value, isInvalid, event)
    }

    handleChange(value, isInvalid) {
        this.value = value
        this.setState({ isInvalid })
    }

    validate(event) {
        let value = event.target.value
        const regex = /^https:\/\/www\.instagram\.com(\/(p)\/)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
        const pattern = new RegExp(regex, 'i');

        if (value === '') {
            this.props.onChange(value, true)
            this.setState({ error: '*campo obrigatório' });
        } else if(!pattern.test(value)) {
            this.props.onChange(value, true)
            this.setState({ error: '*endereço incorreto' });
        } else {
            this.props.onChange(value, false)
            this.setState({ error: undefined });
        }
    }

    render() {
        const buttonProps = {}
        if (this.state.isInvalid) {
            buttonProps.disabled = true
        }
        return (
            <form className='features-form' onSubmit={this.handleSubmit} >
                {/* {this.props.errorMessage && <div>{this.props.errorMessage}</div>} */}
                {this.state.error && <p className="form-input__error">{this.state.error}</p>}
                <div>{this.props.errorMessage}</div>
                <FormInput type="url" placeholder="Insira a url de um post aqui..." onChange={this.handleBla} />
                <FormButton { ...buttonProps }>{this.props.isLoading ? 'Enviando' : 'Enviar'}</FormButton>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    errorMessage: state.errorMessage
})

const mapDispatchToProps = dispatch => ({
    dispatchAddFeature: link => {
        dispatch(addFeature(link))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesForm)