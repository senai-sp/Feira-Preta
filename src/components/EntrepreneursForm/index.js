import React from 'react'
import { connect } from 'react-redux'
import { addEntrepreneur, cleanMessage, editEntrepreneur } from '../../actions'
import MaskedInput from 'react-text-mask'
import FormInput from '../Form/FormInput'
import FormButton from '../Form/FormButton'
import classnames from 'classnames'
import './EntrepreneursForm.css'

class EnterpreneursForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: true, userInputValue: '' }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
        this.handlePhoneInput = this.handlePhoneInput.bind(this)
        // this.editingInput = this.editingInput.bind(this)
    }

    componentDidMount() {
        // this.props.editing.isEditing && 
        this.setState({ userInputValue: 'lalala' })
            // this.props.editing.usernameInstagram })
        console.log('componentDidMount')
        console.log(this.state.userInputValue)
    }

    componentWillUnmount() {
        this.props.dispatchCleanMessage()
        this.props.dispatchEditEntrepreneur(false, '', '')
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.dispatchAddEntrepreneur(this.state.userInputValue, this.phoneNumber)
        this.setState({ userInputValue: '' })
        event.target.reset()
    }

    handleUserInput(value, isInvalid) {
        this.setState({ isInvalid, userInputValue: value })
    }
    handlePhoneInput(event, isInvalid) {
        this.phoneNumber = event.target.value
        this.setState({ isInvalid })
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
        let inputUser = (
            <FormInput defaultValue={this.state.userInputValue} className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} onClick={this.props.dispatchCleanMessage} />
        )
        if (this.props.editing.isEditing) {
             inputUser = <FormInput value={ this.props.editing.usernameInstagram } className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} onClick={this.props.dispatchCleanMessage} />
             console.log('edit', this.props.editing.usernameInstagram)
        }
        console.log(this.state.userInputValue)
        return (
            <form className='enterpreneurs-form'onSubmit={this.handleSubmit} >
                {this.props.message.warning && <div className={classnames({ 'error-alert': this.props.message.isError, 'success-alert': !this.props.message.isError })}>{this.props.message.text}</div>}
                {/*<FormInput defaultValue={this.state.userInputValue} className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} onClick={this.props.dispatchCleanMessage} />
                { this.props.editing.isEditing && <FormInput defaultValue={ this.props.editing.usernameInstagram } className="form-input" type='text' placeholder='@usuário' onChange={this.handleUserInput} onClick={this.props.dispatchCleanMessage} />}*/}
                {inputUser}
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
    },
    editing: {
        isEditing: state.editing.editing.isEditing,
        id: state.editing.editing.id,
        usernameInstagram: state.editing.editing.usernameInstagram
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
        dispatchEditEntrepreneur: (isEditing, id, usernameInstagram, tel) => {
            dispatch(editEntrepreneur(isEditing, id, usernameInstagram, tel))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterpreneursForm)