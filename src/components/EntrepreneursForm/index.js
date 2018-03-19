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
        this.state = { isInvalid: true, isEditingPhone: false }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
        this.handlePhoneInput = this.handlePhoneInput.bind(this)
        this.cancelHandler = this.cancelHandler.bind(this)
        this.handlePhoneClick = this.handlePhoneClick.bind(this)
        this.cleanInput = this.cleanInput.bind(this)
    }


    componentWillUnmount() {
        this.props.dispatchCleanMessage()
        this.props.dispatchEditEntrepreneur(false, '', '', '')
    }

    handleSubmit(event) {
        event.preventDefault()
        !this.props.editing.isEditing && this.props.dispatchAddEntrepreneur(this.state.userInputValue, this.state.phoneInputValue) //Cadastrar
        this.props.editing.isEditing && !this.state.newPhoneInputValue && this.state.newUserInputValue && this.props.dispatchEditedEntrepreneur(this.props.editing.id, this.props.editing.phoneNumber, this.state.newUserInputValue) //Editar (usuário)
        this.props.editing.isEditing && this.state.newPhoneInputValue && !this.state.newUserInputValue && this.props.dispatchEditedEntrepreneur(this.props.editing.id, this.state.newPhoneInputValue, this.props.editing.usernameInstagram) //Editar (telefone)
        this.props.editing.isEditing && this.state.newUserInputValue && this.state.newPhoneInputValue && this.props.dispatchEditedEntrepreneur(this.props.editing.id, this.state.newPhoneInputValue, this.state.newUserInputValue) //Editar (telefone e usuário)
        this.setState({ userInputValue: '', isEditingPhone: false, phoneInputValue: '', newUserInputValue: '', newPhoneInputValue: '' })
        this.props.dispatchEditEntrepreneur(false, '', '', '')
        event.target.reset()
    }

    cancelHandler() {
        this.setState({ userInputValue: '', isEditingPhone: false, phoneInputValue: '', newUserInputValue: '', newPhoneInputValue: '' })
        this.props.dispatchCleanMessage()
        this.props.dispatchEditEntrepreneur(false, '', '', '')
    }

    handleUserInput(value, isInvalid) {
        this.setState({ isInvalid, userInputValue: value })
        this.props.editing.isEditing && this.setState({ newUserInputValue: value })
    }

    cleanInput(event) {
        event.target.value = ''
    }

    handlePhoneInput(event, isInvalid) {
        !this.props.editing.isEditing && this.setState({ isInvalid, phoneInputValue: event.target.value, newPhoneInputValue: '' })
        this.props.editing.isEditing && this.setState({ isInvalid, phoneInputValue: '', newPhoneInputValue: event.target.value })
    }

    handlePhoneClick(event) {
        this.setState({ isEditingPhone: true })
        this.cleanInput(event)
    }

    render() {
        const buttonProps = {}
        if (this.state.isInvalid) {
            buttonProps.disabled = true
        }
        
        return (
            <form className='enterpreneurs-form' onSubmit={this.handleSubmit} >
                {this.props.message.warning && <div className={classnames({ 'error-alert': this.props.message.isError, 'success-alert': !this.props.message.isError, 'edit-alert': this.props.editing.isEditing })}>{this.props.message.text}</div>}
                {this.props.editing.isEditing && <div className={classnames({ 'edit-alert': this.props.editing.isEditing })}>Clique no campo que deseja editar</div>}
                {/* {this.props.editing.isEditing && <div className={classnames({ 'error-alert': this.props.message.isError, 'success-alert': !this.props.message.isError, 'edit-alert': this.props.editing.isEditing })}>{this.props.message.text}</div>} */}
                {!this.props.editing.isEditing && <FormInput className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} onClick={this.props.dispatchCleanMessage} />}
                {this.props.editing.isEditing && <FormInput defaultValue={this.props.editing.usernameInstagram} className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} onFocus={this.cleanInput} />}
                {!this.props.editing.isEditing && (
                    <MaskedInput
                        mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        className="form-input"
                        placeholder="Telefone"
                        guide={true}
                        keepCharPositions={true}
                        onChange={this.handlePhoneInput}
                    />
                )}
                {this.props.editing.isEditing && this.state.isEditingPhone && (
                    <MaskedInput
                        mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        className="form-input"
                        placeholder="Telefone"
                        guide={true}
                        keepCharPositions={true}
                        onChange={this.handlePhoneInput}
                        autoFocus
                    />
                )}
                {this.props.editing.isEditing && !this.state.isEditingPhone && (
                    <MaskedInput
                        mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        className="form-input"
                        placeholder="Telefone"
                        guide={true}
                        keepCharPositions={true}
                        onChange={this.handlePhoneInput}
                        value={this.props.editing.phoneNumber}
                        onFocus={this.handlePhoneClick}
                    />
                )}
                {!this.props.editing.isEditing && <FormButton type="submit" { ...buttonProps }>{this.props.isLoading ? 'Cadastrando' : 'Cadastrar'}</FormButton>}
                {this.props.editing.isEditing && <FormButton type="submit" { ...buttonProps }>{this.props.isLoading ? 'Gravando' : 'Gravar'}</FormButton>}
                {this.props.editing.isEditing && <FormButton onClick={this.cancelHandler} className="form-button--secondary" >Cancelar</FormButton>}
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