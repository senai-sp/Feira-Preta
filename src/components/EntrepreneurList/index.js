import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listEntrepreneurs, removeEntrepreneur } from '../../actions'
import EntrepreneurCard from '../EntrepreneurCard'
import './EntrepreneurList.css'

class EntrepreneurList extends Component {
    constructor(props) {
        super(props)
        this.state = { orderedEntrepeneur: [...this.props.entrepreneurs], orderBy: '' }
    }

    componentDidMount() {
        this.props.dispatchListEntrepreneur()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ orderedEntrepeneur: [...nextProps.entrepreneurs] }, () => this.orderEntrepeneur('usernameInstagram'))
    }

    removeItem(id) {
        this.props.dispatchRemoveEntrepreneur(id)
    }

    orderEntrepeneur(orderBy) {
        (this.state.orderBy != orderBy) && this.setState({ orderBy }, () => {
            switch (this.state.orderBy) {
                case 'phoneNumber':
                    this.setState({ orderedEntrepeneur: this.state.orderedEntrepeneur.sort((a, b) => (a.phoneNumber > b.phoneNumber) ? 1 : (b.phoneNumber > a.phoneNumber) ? -1 : 0) })
                    break
                case 'fullNameInstagram':
                    this.setState({ orderedEntrepeneur: this.state.orderedEntrepeneur.sort((a, b) => (a.fullNameInstagram > b.fullNameInstagram) ? 1 : (b.fullNameInstagram > a.fullNameInstagram) ? -1 : 0) })
                    break
                default:
                    this.setState({ orderedEntrepeneur: this.state.orderedEntrepeneur.sort((a, b) => (a.usernameInstagram > b.usernameInstagram) ? 1 : (b.usernameInstagram > a.usernameInstagram) ? -1 : 0) })
                    break
            }
        })
    }

    render() {

        return (
            <section>
                <div className='ordination-options'>
                    <span className='ordination-options__title'>Ordenar por:</span>
                    <input className='ordination-options__radio-button' type="radio" id="usernameInstagram" name="selectOrder" defaultChecked onChange={() => this.orderEntrepeneur('usernameInstagram')} ></input>
                    <label className='ordination-options__label' htmlFor="usernameInstagram">Nome de usuário</label>
                    <input className='ordination-options__radio-button' type="radio" id="fullNameInstagram" name="selectOrder" onChange={() => this.orderEntrepeneur('fullNameInstagram')} ></input>
                    <label className='ordination-options__label' htmlFor="fullNameInstagram">Nome completo</label>
                    <input className='ordination-options__radio-button' type="radio" id="phoneNumber" name="selectOrder" onChange={() => this.orderEntrepeneur('phoneNumber')} ></input>
                    <label className='ordination-options__label' htmlFor="phoneNumber">Telefone</label>
                </div>
                {this.state.orderedEntrepeneur.map(entrepreneur => (
                    <EntrepreneurCard
                        id={entrepreneur.id}
                        key={entrepreneur.id}
                        profilePictureInstagram={entrepreneur.profilePictureInstagram}
                        usernameInstagram={entrepreneur.usernameInstagram}
                        fullNameInstagram={entrepreneur.fullNameInstagram}
                        phoneNumber={entrepreneur.phoneNumber}
                        clickRemove={() => this.removeItem(entrepreneur.id)}
                    />
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EntrepreneurList)