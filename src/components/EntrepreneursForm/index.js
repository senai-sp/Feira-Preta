import React from 'react'
import { connect } from 'react-redux'
import { addEntrepreneur, cleanMessage } from '../../actions'
import MaskedInput from 'react-text-mask'
import FormInput from '../Form/FormInput'
import FormButton from '../Form/FormButton'
import './EntrepreneursForm.css'

class EnterpreneursForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isUserInvalid: true, isPhoneInvalid: true }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
        this.handlePhoneInput = this.handlePhoneInput.bind(this)
    }

    componentWillUnmount() {
        this.props.dispatchCleanMessage()
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.dispatchAddEntrepreneur(this.state.usernameInstagram, this.state.phoneNumber)
        this.setState({ usernameInstagram: '', phoneNumber: '', isUserInvalid: true, isPhoneInvalid: true })
        event.target.reset()
    }

    handleUserInput(value) {
        this.setState({ usernameInstagram: value })
        this.setState({ isUserInvalid: false })

    }

    handlePhoneInput(event) {
        this.setState({ phoneNumber: event.target.value })
        this.setState({ isPhoneInvalid: false })

    }

    render() {
        const buttonProps = {}
        if (this.state.isUserInvalid || this.state.isPhoneInvalid) {
            buttonProps.disabled = true
        }
        return (
            <form className='enterpreneurs-form' onSubmit={this.handleSubmit} >
                <FormInput className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} />
                <MaskedInput
                    mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    guide={true}
                    keepCharPositions={false}
                    className="form-input"
                    placeholder="Telefone"
                    type='tel'
                    onChange={this.handlePhoneInput}
                />
                <FormButton type="submit" { ...buttonProps }>{this.props.isLoading ? 'Cadastrando' : 'Cadastrar'}</FormButton>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading.isLoading
})

const mapDispatchToProps = dispatch => {
    return {
        dispatchAddEntrepreneur: (userName, phoneNumber) => {
            dispatch(addEntrepreneur(userName, phoneNumber))
        },
        dispatchCleanMessage: () => {
            dispatch(cleanMessage())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterpreneursForm)