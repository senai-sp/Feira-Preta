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
        this.state = { isInvalid: false }
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
            {this.props.message && <div>{this.props.message}</div>}
            <FormInput className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} />
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
     isLoading: state.isLoading,
     message: state.message
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