import React from 'react'
import { connect } from 'react-redux'
import { editEntrepreneur } from '../../actions'
import FaPencil from 'react-icons/lib/fa/pencil'
import FaTrashO from 'react-icons/lib/fa/trash-o'
import './EntrepreneurCard.css'



class EntrepreneurCard extends React.Component {

    render() {
        const buttonProps = {}
        if (this.props.editing.isEditing) {
            buttonProps.disabled = true
        }
        console.log(this.props.editing.isEditing)
        return (
            <div className="entrepreneur-card" key={this.props.id} >
                <img className="entrepreneur-card__profile-img" src={this.props.profilePictureInstagram} alt="Foto do perfil do empreendedor no Instagram" />
                <span className="user">
                    <h3>@{this.props.usernameInstagram}</h3>
                    <h3>{this.props.fullNameInstagram}</h3>
                    <h3>{this.props.phoneNumber}</h3>
                </span>
                <div className="card-links">
                    <button { ...buttonProps } className="card-links__edit" onClick={this.props.clickEdit} >
                        <FaPencil className="fas fa-pencil" aria-hidden="true"></FaPencil>
                    </button>
                    <button { ...buttonProps } className="card-links__remove" onClick={this.props.clickRemove}>
                        <FaTrashO className="fas fa-trash-o" aria-hidden="true"></FaTrashO>
                    </button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    editing: {
        isEditing: state.editing.editing.isEditing,
        id: state.editing.editing.id,
        usernameInstagram: state.editing.editing.usernameInstagram,
        phoneNumber: state.editing.editing.phoneNumber
    }
})

export default connect(mapStateToProps, null)(EntrepreneurCard)