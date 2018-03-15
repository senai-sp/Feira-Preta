import React from 'react'
import { connect } from 'react-redux'
import { addEntrepreneur, cleanMessage } from '../../actions'
import MaskedInput from 'react-text-mask'
import FormInput from '../Form/FormInput'
import FormButton from '../Form/FormButton'
import classnames from 'classnames'
import './EntrepreneursForm.css'

class EnterpreneursForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: true }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
        this.handlePhoneInput = this.handlePhoneInput.bind(this)
    }

    componentWillUnmount() {
        this.props.dispatchCleanMessage()
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.dispatchAddEntrepreneur(this.userName, this.phoneNumber)
        event.target.reset()
    }

    handleUserInput(value, isInvalid) {
        this.userName = value
        this.setState({ isInvalid })
    }
    handlePhoneInput(event, isInvalid) {
        this.phoneNumber = event.target.value
        this.setState({ isInvalid })
    }

    render() {
        const buttonProps = {}
         if (this.state.isInvalid) {
             buttonProps.disabled = true
         }
        return (
        <form className='enterpreneurs-form' onSubmit={this.handleSubmit} >
            {this.props.message.warning && <div className={classnames({ 'error-alert': this.props.message.isError, 'success-alert': !this.props.message.isError })}>{this.props.message.text}</div>}
            <FormInput className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} onClick={this.props.dispatchCleanMessage} />
            <MaskedInput
                    mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    className="form-input"
                    placeholder="Telefone"
                    guide={true}
                    keepCharPositions={true}
                    onChange={this.handlePhoneInput}
            />
            <FormButton type="submit" { ...buttonProps }>{this.props.isLoading ? 'Cadastrando' : 'Cadastrar'}</FormButton>
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
    return{
        dispatchAddEntrepreneur: (userName, phoneNumber) => {
            dispatch(addEntrepreneur( userName, phoneNumber ))
        },
        dispatchCleanMessage: () => {
            dispatch(cleanMessage())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterpreneursForm)