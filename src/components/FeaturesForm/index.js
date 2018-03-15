import React from 'react'
import { connect } from 'react-redux'
import { addFeature, cleanMessage } from '../../actions'
import FormInput from '../Form/FormInput'
import FormButton from '../Form/FormButton'
import classnames from 'classnames'
import './FeaturesForm.css'
import '../Pages/AlertMessage.css'


class FeaturesForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: true }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillUnmount() {
        this.props.dispatchCleanMessage()
    }
    
    handleSubmit(event) {
        event.preventDefault()
        this.props.dispatchAddFeature(this.value)
        event.target.reset()
    }

    handleChange(value, isInvalid) {
        this.value = value
        this.setState({ isInvalid })
    }

    render() {
        const buttonProps = {}
        if (this.state.isInvalid) {
            buttonProps.disabled = true
        }

        return (
            <form className='features-form' onSubmit={this.handleSubmit} >
                {this.props.message.warning && <div className={classnames({ 'error-alert': this.props.message.isError, 'success-alert': !this.props.message.isError })}>{this.props.message.text}</div>}
                <FormInput type="url" placeholder="Insira a url de um post aqui..." onChange={this.handleChange} onClick={this.props.dispatchCleanMessage} />
                <FormButton { ...buttonProps }>{this.props.isLoading ? 'Enviando' : 'Enviar'}</FormButton>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading.isLoading,
    message: {
        text: state.message.message.text,
        isError: state.message.message.isError,
        warning: state.message.message.warning
    }
})

const mapDispatchToProps = dispatch => {
    return {
        dispatchAddFeature: link => {
            dispatch(addFeature(link))
        },
        dispatchCleanMessage: () => {
            dispatch(cleanMessage())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesForm)