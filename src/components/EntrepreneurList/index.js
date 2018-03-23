import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listEntrepreneurs, removeEntrepreneur, editEntrepreneur, cleanMessage } from '../../actions'
import EntrepreneurCard from '../EntrepreneurCard'
import './EntrepreneurList.css'

class EntrepreneurList extends Component {
    constructor(props) {
        super(props)
        this.state = { entrepreneurs: this.props.entrepreneurs }
    }

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
        if (orderBy === 'phoneNumber') {
            this.props.entrepreneurs.sort((a, b) => a.orderBy - b.orderBy).map(entrepreneur => (
                <EntrepreneurCard
                    key={entrepreneur.id}
                    profilePictureInstagram={entrepreneur.profilePictureInstagram}
                    usernameInstagram={entrepreneur.usernameInstagram}
                    fullNameInstagram={entrepreneur.fullNameInstagram}
                    phoneNumber={entrepreneur.phoneNumber}
                    clickEdit={() => this.editItem(true, entrepreneur.id, entrepreneur.usernameInstagram, entrepreneur.phoneNumber)}
                    clickRemove={() => this.removeItem(entrepreneur.id)}
                />))
        } else {
            this.entrepreneurs.sort((a, b) => (a.orderBy > b.orderBy) ? 1 : (b.orderBy > a.orderBy) ? -1 : 0)
        }
    }

    render() {
        console.log(this.state.entrepreneurs)
        const entrepreneurCard = this.orderEntrepeneur('phoneNumber')
        return (
            <section>
                <div className='ordination-options'>
                    <span className='ordination-options__title'>Ordenar por:</span>
                    <input className='ordination-options__radio-button' type="radio" id="usernameInstagram" defaultChecked="checked" onClick={() => this.orderEntrepeneur('usernameInstagram')} ></input>
                    <label className='ordination-options__label' htmlFor="usernameInstagram">Nome de usuário</label>
                    <input className='ordination-options__radio-button' type="radio" id="fullNameInstagram" onClick={() => this.orderEntrepeneur('fullNameInstagram')} ></input>
                    <label className='ordination-options__label' htmlFor="fullNameInstagram">Nome completo</label>
                    <input className='ordination-options__radio-button' type="radio" id="phoneNumber" onClick={() => this.orderEntrepeneur('phoneNumber')} ></input>
                    <label className='ordination-options__label' htmlFor="phoneNumber">Telefone</label>
                </div>

                {this.props.entrepreneurs.sort((a, b) => (a.fullNameInstagram > b.fullNameInstagram) ? 1 : (b.orderBy > a.orderBy) ? -1 : 0).map(entrepreneur => (
                    <EntrepreneurCard
                        key={entrepreneur.id}
                        profilePictureInstagram={entrepreneur.profilePictureInstagram}
                        usernameInstagram={entrepreneur.usernameInstagram}
                        fullNameInstagram={entrepreneur.fullNameInstagram}
                        phoneNumber={entrepreneur.phoneNumber}
                        clickEdit={() => this.editItem(true, entrepreneur.id, entrepreneur.usernameInstagram, entrepreneur.phoneNumber)}
                        clickRemove={() => this.removeItem(entrepreneur.id)}
                    />
                ))}
                {entrepreneurCard}
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

export default connect(mapStateToProps, mapDispatchToProps)(EntrepreneurList)