import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listEntrepreneurs, removeEntrepreneur, editEntrepreneur, cleanMessage } from '../../actions'
import './EntrepreneurCard.css'

class EntrepreneurCard extends Component {
    // constructor(props){
    //     super(props)
    //     this.editItem = this.editItem.bind(this)
    // }

    componentDidMount() {
        this.props.dispatchListEntrepreneur()
    }

    removeItem(id) {
        this.props.dispatchRemoveEntrepreneur(id)
    }

    editItem(isEditing, id, usernameInstagram, tel) {
        this.props.dispatchCleanMessage()
        this.props.dispatchEditEntrepreneur(isEditing, id, usernameInstagram, tel)
    }

    orderEntrepeneur(orderBy) {
        this.props.entrepreneurs.sort((a,b) => (a.orderBy > b.orderBy) ? 1 : (b.orderBy > a.orderBy) ? -1 : 0)
    }

    render() {
        // const orderedEntrepreneurs = this.props.entrepreneurs.sort((a,b) => (a.usernameInstagram > b.usernameInstagram) ? 1 : (b.usernameInstagram > a.usernameInstagram) ? -1 : 0)

        return (
            <section>
                <div>Ordenar: </div>
                <span onClick={() => this.orderEntrepeneur('usernameInstagram')}  >Nome de usuário</span>
                <span onClick={() => this.orderEntrepeneur('fullNameInstagram')}  >Nome completo</span>
                <span onClick={() => this.orderEntrepeneur('phoneNumber')}  >Telefone</span>
                {this.props.entrepreneurs.map(entrepreneur => (
                    <div className="entrepreneur-card" key={entrepreneur.id} >
                        <img className="entrepreneur-card__profile-img" src={entrepreneur.profilePictureInstagram} alt="Foto do perfil do empreendedor no Instagram"/>
                        <span className="user">
                            <h3>@{entrepreneur.usernameInstagram}</h3>
                            <h3>{entrepreneur.fullNameInstagram}</h3>
                            <h3>{entrepreneur.phoneNumber}</h3>
                        </span>
                        <ul className="card-links">
                            <li className="card-links__edit" onClick={() => this.editItem(true, entrepreneur.id, entrepreneur.usernameInstagram, entrepreneur.phoneNumber)} >Editar</li>
                            <li className="card-links__remove" onClick={() => this.removeItem(entrepreneur.id)} >Remover</li>
                        </ul>
                    </div>
                ))}
            </section>
        )
    }
}

const mapStateToProps = state => ({
    entrepreneurs: state.entrepreneurs
})

const mapDispatchToProps = dispatch => ({
    dispatchListEntrepreneur: () => {
        dispatch(listEntrepreneurs())
    },
    dispatchRemoveEntrepreneur: (id) => {
        dispatch(removeEntrepreneur(id))
    },
    dispatchEditEntrepreneur: (isEditing, id, usernameInstagram, tel) => {
        dispatch(editEntrepreneur(isEditing, id, usernameInstagram, tel))
    },
    dispatchCleanMessage: () => {
        dispatch(cleanMessage())
    }
}
)

export default connect(mapStateToProps, mapDispatchToProps)(EntrepreneurCard)