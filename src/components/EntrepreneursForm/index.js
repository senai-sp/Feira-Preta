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
        this.state = { isInvalid: true, phoneInputValue: this.props.editing.phoneNumber }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
        this.handlePhoneInput = this.handlePhoneInput.bind(this)
        this.cancelHandler = this.cancelHandler.bind(this)
        this.telefone = this.props.editing.phoneNumber
        this.user = { ...props.editing }
    }

    componentWillReceiveProps(nextProps) {
        this.user = { ...nextProps.editing }
        console.log(this.user)
    }

    componentDidMount() {
        this.setState({ phoneInputValue: this.props.editing.phoneNumber })
    }

    componentWillUnmount() {
        this.props.dispatchCleanMessage()
        this.props.dispatchEditEntrepreneur(false, '', '', '')
    }

    handleSubmit(event) {
        event.preventDefault()
        if (this.props.editing.isEditing) {
            this.props.dispatchAddEntrepreneur(this.user.usernameInstagram, this.user.phoneNumber)
        } else {
            this.props.dispatchEditedEntrepreneur(this.user.editing.id, this.user.phoneNumber, this.user.usernameInstagram)
        }
        this.props.dispatchEditEntrepreneur(false, '', '', '')
        event.target.reset()
    }

    cancelHandler() {
        this.setState({ userInputValue: '', phoneInputValue: '', newUserInputValue: '', newPhoneInputValue: '' })
        this.props.dispatchCleanMessage()
        this.props.dispatchEditEntrepreneur(false, '', '', '')
    }

    handleUserInput(value, isInvalid) {
        // this.setState({ isInvalid, userInputValue: value })
        // this.props.editing.isEditing && this.setState({ newUserInputValue: value })
        this.user.usernameInstagram = value
    }

    handlePhoneInput(event, isInvalid) {
        // this.props.editing.isEditing && this.setState({ isInvalid: false })
        this.user.phoneNumber = event.target.value
        // this.props.editing.isEditing && this.setState({ phoneInputValue: false })
    }

    render() {
        const buttonProps = {}
        if (this.state.isInvalid) {
            buttonProps.disabled = true
        }
        console.log('render: ', this.user)

        return (
            <form className='enterpreneurs-form' onSubmit={this.handleSubmit} >
                {this.props.message.warning && <div className={classnames({ 'error-alert': this.props.message.isError, 'success-alert': !this.props.message.isError, 'edit-alert': this.props.editing.isEditing })}>{this.props.message.text}</div>}
                {this.props.editing.isEditing && <div className={classnames({ 'edit-alert': this.props.editing.isEditing })}>Clique no campo que deseja editar</div>}
                {/* {this.props.editing.isEditing && <div className={classnames({ 'error-alert': this.props.message.isError, 'success-alert': !this.props.message.isError, 'edit-alert': this.props.editing.isEditing })}>{this.props.message.text}</div>} */}
                {/*{!this.props.editing.isEditing && <FormInput className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} onClick={this.props.dispatchCleanMessage} />}
                {this.props.editing.isEditing && <FormInput defaultValue={this.props.editing.usernameInstagram} className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} />}*/}
                <FormInput defaultValue={this.user.usernameInstagram} className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} />
                <MaskedInput
                    mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                    className="form-input"
                    placeholder="Telefone"
                    type='tel'
                    guide={false}
                    keepCharPositions={false}
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