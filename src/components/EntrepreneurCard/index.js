import React from 'react'
import { connect } from 'react-redux'
import { editedEntrepreneur } from '../../actions'
import MaskedInput from 'react-text-mask'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrashO from 'react-icons/lib/fa/trash-o'
import FaCheck from 'react-icons/lib/fa/check'
import FaClose from 'react-icons/lib/fa/close'
import './EntrepreneurCard.css'



class EntrepreneurCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = { editing: false }
        this.editHandler = this.editHandler.bind(this)
        this.saveHandler = this.saveHandler.bind(this)
        this.handleUserInput = this.handleUserInput.bind(this)
        this.handlePhoneInput = this.handlePhoneInput.bind(this)
        this.cancelHandler = this.cancelHandler.bind(this)
    }

    editHandler(id, phoneNumber, usernameInstagram) {
        this.setState({ editing: true, id, phoneNumber, usernameInstagram })
    }

    saveHandler() {
        this.props.dispatchEditedEntrepreneur(this.state.id, this.state.phoneNumber, this.state.usernameInstagram)
        this.setState({ editing: false })
    }

    handleUserInput(value) {
        this.setState({ usernameInstagram: value })
    }

    handlePhoneInput(event) {
        this.setState({ phoneNumber: event.target.value }, () => this.checkPhoneInput())
    }

    checkPhoneInput() {
        if (this.state.phoneNumber === '') {
            this.setState({ error: '*campo obrigatório' })
        } else {
            this.setState({ error: undefined })
        }
    }

    cancelHandler() {
        this.setState({ editing: false, error: undefined })
    }

    render() {
        const buttonProps = {}
        if (this.state.editing && ((this.state.usernameInstagram === '') || (this.state.phoneNumber === ''))) {
            buttonProps.disabled = true
        }

        return (
            <div className="entrepreneur-card" key={this.props.id} >
                <img className="entrepreneur-card__profile-img" src={this.props.profilePictureInstagram} alt="Foto do perfil do empreendedor no Instagram" />
                <span className="user">
                    <h3 className="user__full-name">{this.props.fullNameInstagram}</h3>
                    <h3 className="user__user-name">@{this.props.usernameInstagram}</h3>
                    {!this.state.editing ? <h3 className="user__phone-number">{this.props.phoneNumber}</h3> : <MaskedInput
                        mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                        guide={true}
                        keepCharPositions={false}
                        className="form-input"
                        placeholder="Telefone"
                        type='tel'
                        onChange={this.handlePhoneInput}
                        value={this.state.phoneNumber}
                    />}
                    {this.state.error && <p className="form-input__error">{this.state.error}</p>} 
                </span>
                <div className="card-links">
                    {!this.state.editing ?
                        <button className="card-links__edit" onClick={() => this.editHandler(this.props.id, this.props.phoneNumber, this.props.usernameInstagram)} >
                            <FaPencil className="fas fa-pencil" aria-hidden="true"></FaPencil>
                        </button> :
                        <button { ...buttonProps } className="card-links__edit card-links__edit--editing"  onClick={this.saveHandler} >
                            <FaCheck className="fas FaCheck" aria-hidden="true"></FaCheck>
                        </button>
                    }                    
                    {!this.state.editing ?
                        <button className="card-links__remove" onClick={this.props.clickRemove}>
                            <FaTrashO className="fas fa-trash-o" aria-hidden="true"></FaTrashO>
                        </button> :
                        <button className="card-links__cancel" onClick={this.cancelHandler} >
                            <FaClose className="fas FaClose" aria-hidden="true"></FaClose>
                        </button>
                    }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        dispatchEditedEntrepreneur: (id, phoneNumber, usernameInstagram) => {
            dispatch(editedEntrepreneur(id, phoneNumber, usernameInstagram))
        }
    }
}

export default connect(null, mapDispatchToProps)(EntrepreneurCard)