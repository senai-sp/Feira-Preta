import React from 'react'
import { connect } from 'react-redux'
import { addEntrepreneur } from '../../actions'
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
        // this.handleChange = this.handleChange.bind(this)
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
    handlePhoneInput(value, isInvalid) {
        this.phoneNumber = value
        this.setState({ isInvalid })
    }

    // handleChange(value, isInvalid) {
    //      this.value = value
    //      this.setState({ isInvalid })
    //  }

    render() {
        const buttonProps = {}
         if (this.state.isInvalid) {
             buttonProps.disabled = true
         }
         console.log(this.props)

        return (
        <form className='enterpreneurs-form' onSubmit={this.handleSubmit} >
            {this.props.errorMessage && <div>{this.props.errorMessage}</div>}
            <FormInput className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} />
            <MaskedInput
                    mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    className="form-input"
                    placeholder="Telefone"
                    guide={true}
                    keepCharPositions={true}
                    onChange={this.handlePhoneInput}
            />
            <FormButton { ...buttonProps }>{this.props.isLoading ? 'Cadastrando' : 'Cadastrar'}</FormButton>
        </form>
        )

    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    errorMessage: state.errorMessage
})

const mapDispatchToProps = dispatch => ({
    dispatchAddEntrepreneur: (userName, phoneNumber) => (dispatch(addEntrepreneur( userName, phoneNumber )))
})

export default connect(mapStateToProps, mapDispatchToProps)(EnterpreneursForm)