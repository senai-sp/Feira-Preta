import React from 'react'
import { connect } from 'react-redux'
import { addEntrepreneur, cleanMessage, editEntrepreneur, editedEntrepreneur } from '../../actions'
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
        this.cancelHandler = this.cancelHandler.bind(this)
        this.user = { ...props.editing }
    }

    componentWillReceiveProps(nextProps) {
        this.user = { ...nextProps.editing }
    }

    componentWillUnmount() {
        this.props.dispatchCleanMessage()
        this.props.dispatchEditEntrepreneur(false, '', '', '')
    }

    handleSubmit(event) {
        event.preventDefault()
        if (!this.props.editing.isEditing) {
            this.props.dispatchAddEntrepreneur(this.user.usernameInstagram, this.user.phoneNumber)
        } else {
            this.props.dispatchEditedEntrepreneur(this.user.id, this.user.phoneNumber, this.user.usernameInstagram)
        }
        this.props.dispatchEditEntrepreneur(false, '', '', '')
        event.target.reset()
    }

    cancelHandler() {
        this.setState({ isInvalid: true })
        this.props.dispatchCleanMessage()
        this.props.dispatchEditEntrepreneur(false, '', '', '')
    }

    handleUserInput(value) {
        this.user.usernameInstagram = value
        this.setState({ isUserInvalid: false })
        if (!this.user.usernameInstagram) {
            this.setState({ isUserInvalid: true })
        }
    }

    handlePhoneInput(event) {
        this.user.phoneNumber = event.target.value
        this.setState({ isPhoneInvalid: false })
        if (!this.user.phoneNumber) {
            this.setState({ isPhoneInvalid: true })
        }
    }

    render() {
        const buttonProps = {}
        if (!this.props.editing.isEditing && this.state.isUserInvalid && this.state.isPhoneInvalid) {
            buttonProps.disabled = true
        }
        console.log(this.props.editing.usernameInstagram)
        return (
            <form className='enterpreneurs-form' onSubmit={this.handleSubmit} >
                {/*{!this.user.isEditing && <FormInput className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} onClick={this.props.dispatchCleanMessage} />}
                {this.user.isEditing && <FormInput defaultValue={this.user.usernameInstagram} className="form-input" type='text' placeholder='@usuário2' onChange={this.handleUserInput} />}*/}
                <FormInput defaultValue={this.props.editing.usernameInstagram} className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} />
                <MaskedInput
                    mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    guide={true}
                    keepCharPositions={false}
                    className="form-input"
                    placeholder="Telefone"
                    type='tel'
                    onChange={this.handlePhoneInput}
                    value={this.user.phoneNumber}
                />
                {!this.props.editing.isEditing ? <FormButton type="submit" { ...buttonProps }>{this.props.isLoading ? 'Cadastrando' : 'Cadastrar'}</FormButton> : <FormButton type="submit" { ...buttonProps }>{this.props.isLoading ? 'Gravando' : 'Gravar'}</FormButton>}
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
            console.log('clean')
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