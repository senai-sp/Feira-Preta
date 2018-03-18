import React from 'react'
import { connect } from 'react-redux'
import { addEntrepreneur, cleanMessage, editEntrepreneur, editedEntrepreneur } from '../../actions'
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
        this.cancelHandler = this.cancelHandler.bind(this)
        // this.editingInput = this.editingInput.bind(this)
    }

    // componentDidMount() { DIRETO NO INPUT??
    //     // this.props.editing.isEditing && 
    //     // this.setState({ userInputValue: this.props.editing.usernameInstagram })
    //     // this.props.editing.usernameInstagram })
    //     console.log('componentDidMount')
    //     console.log(this.state.userInputValue)
    // }

    componentWillUnmount() {
        this.props.dispatchCleanMessage()
        this.props.dispatchEditEntrepreneur(false, '', '', '')
    }

    handleSubmit(event) {
        event.preventDefault()
        !this.props.editing.isEditing && this.props.dispatchAddEntrepreneur(this.state.userInputValue, this.state.phoneInputValue) //Cadastrar
        this.props.editing.isEditing && !this.state.newPhoneInputValue && this.state.newUserInputValue && this.props.dispatchEditedEntrepreneur(this.props.editing.id, this.props.editing.phoneNumber, this.state.newUserInputValue) //Editar (usuário)
        this.props.editing.isEditing && this.state.newPhoneInputValue && !this.state.newUserInputValue && this.props.dispatchEditedEntrepreneur(this.props.editing.id, this.state.newPhoneInputValue, this.props.editing.usernameInstagram) //Editar (telefone)
        this.props.editing.isEditing && this.state.newUserInputValue && this.state.newPhoneInputValue && this.props.dispatchEditedEntrepreneur(this.props.editing.id, this.props.editing.usernameInstagram, this.state.newUserInputValue) //Editar (total)
        // ) : this.props.dispatchAddEntrepreneur(this.state.userInputValue, this.state.phoneInputValue)
        this.setState({ userInputValue: '', phoneInputValue: '', newUserInputValue: '', newPhoneInputValue: '' })
        this.props.dispatchEditEntrepreneur(false, '', '', '')
        event.target.reset()
    }

    cancelHandler() {
        this.setState({ userInputValue: '', phoneInputValue: '', newUserInputValue: '', newPhoneInputValue: '' })
        this.props.dispatchEditEntrepreneur(false, '', '', '')
    }

    handleUserInput(value, isInvalid) {
        this.setState({ isInvalid, userInputValue: value })
        this.props.editing.isEditing && this.setState({ newUserInputValue: value })
    }

    handlePhoneInput(event, isInvalid) {
        !this.props.editing.isEditing && this.setState({ isInvalid, phoneInputValue: event.target.value, newPhoneInputValue: '' })
        this.props.editing.isEditing && this.setState({ isInvalid, phoneInputValue: '', newPhoneInputValue: event.target.value })
    }

    // editingInput(event) {
    //     event.preventDefault()
    //     this.setState({ userInputValue: this.props.editing.this.props.editing.usernameInstagram })
    // }

    render() {
        const buttonProps = {}
        if (this.state.isInvalid) {
            buttonProps.disabled = true
        }

        return (
            <form className='enterpreneurs-form' onSubmit={this.handleSubmit} >
                {this.props.message.warning && <div className={classnames({ 'error-alert': this.props.message.isError, 'success-alert': !this.props.message.isError })}>{this.props.message.text}</div>}
                {this.props.editing.isEditing && <label>@{this.props.editing.usernameInstagram}</label>}
                <FormInput className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} onClick={this.props.dispatchCleanMessage} />
                {/* {this.props.editing.isEditing && <FormInput defaultValue={this.props.editing.usernameInstagram} className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} onClick={this.props.dispatchCleanMessage} />} */}
                {this.props.editing.isEditing && <label>{this.props.editing.phoneNumber}</label>}
                <MaskedInput
                    mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    className="form-input"
                    placeholder="Telefone"
                    guide={true}
                    keepCharPositions={true}
                    onChange={this.handlePhoneInput}
                />
                {!this.props.editing.isEditing && <FormButton type="submit" { ...buttonProps }>{this.props.isLoading ? 'Cadastrando' : 'Cadastrar'}</FormButton>}
                {this.props.editing.isEditing && <FormButton type="submit" { ...buttonProps }>{this.props.isLoading ? 'Gravando' : 'Gravar'}</FormButton>}
                {this.props.editing.isEditing && <FormButton onClick={this.cancelHandler} >Cancelar</FormButton>}
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
    },
    editing: {
        isEditing: state.editing.editing.isEditing,
        id: state.editing.editing.id,
        usernameInstagram: state.editing.editing.usernameInstagram,
        phoneNumber: state.editing.editing.phoneNumber
    }
})

const mapDispatchToProps = dispatch => {
    return {
        dispatchAddEntrepreneur: (userName, phoneNumber) => {
            dispatch(addEntrepreneur(userName, phoneNumber))
        },
        dispatchCleanMessage: () => {
            dispatch(cleanMessage())
        },
        dispatchEditEntrepreneur: (isEditing, id, usernameInstagram, phoneNumber) => {
            dispatch(editEntrepreneur(isEditing, id, usernameInstagram, phoneNumber))
        },
        dispatchEditedEntrepreneur: (id, phoneNumber, usernameInstagram) => {
            dispatch(editedEntrepreneur(id, phoneNumber, usernameInstagram))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterpreneursForm)