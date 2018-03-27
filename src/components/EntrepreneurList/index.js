import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listEntrepreneurs, removeEntrepreneur } from '../../actions'
import EntrepreneurCard from '../EntrepreneurCard'
import Modal from '../Modal'
import './EntrepreneurList.css'

class EntrepreneurList extends Component {
    constructor(props) {
        super(props)
        this.state = { orderedEntrepeneur: [...this.props.entrepreneurs], orderBy: '', removing: false }
        this.removeItem = this.removeItem.bind(this)
    }

    componentDidMount() {
        this.props.dispatchListEntrepreneur()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ orderedEntrepeneur: [...nextProps.entrepreneurs] }, () => this.orderEntrepeneur())
    }

    removeHandler(id, usernameInstagram) {
        this.setState({ id, usernameInstagram, removing: true })
    }

    removeItem(id) {
        this.props.dispatchRemoveEntrepreneur(this.state.id)
        this.setState({ id: '', usernameInstagram: '', removing: false })
    }

    cancelHandler() {
        this.setState({ id: '', usernameInstagram: '', removing: false })
    }
    
    orderEntrepeneur(orderBy) {
        (this.state.orderBy !== orderBy) && this.setState({ orderBy }, () => {
            switch (this.state.orderBy) {
                case 'phoneNumber':
                    this.setState({ orderedEntrepeneur: this.state.orderedEntrepeneur.sort((a, b) => (a.phoneNumber > b.phoneNumber) ? 1 : (b.phoneNumber > a.phoneNumber) ? -1 : 0) })
                    break
                case 'fullNameInstagram':
                    this.setState({ orderedEntrepeneur: this.state.orderedEntrepeneur.sort((a, b) => (a.fullNameInstagram > b.fullNameInstagram) ? 1 : (b.fullNameInstagram > a.fullNameInstagram) ? -1 : 0) })
                    break
                default:
                    this.setState({ orderBy: 'usernameInstagram', orderedEntrepeneur: this.state.orderedEntrepeneur.sort((a, b) => (a.usernameInstagram > b.usernameInstagram) ? 1 : (b.usernameInstagram > a.usernameInstagram) ? -1 : 0) })
                    break
            }
        })
    }

    render() {
        
        return (
            <section>
                <div className='ordination-options'>
                    <span className='ordination-options__title'>Ordenar por </span>
                    <select className='ordination-options__select'>
                        <option className='ordination-options__select-option' id="usernameInstagram" name="selectOrder" value="usernameInstagram" onFocus={() => this.orderEntrepeneur('usernameInstagram')}>nome de usuário</option>
                        <option className='ordination-options__select-option' id="fullNameInstagram" name="selectOrder" value="fullNameInstagram" onFocus={() => this.orderEntrepeneur('fullNameInstagram')}>nome completo</option>
                        <option className='ordination-options__select-option' id="phoneNumber" name="selectOrder" value="phoneNumber" onFocus={() => this.orderEntrepeneur('phoneNumber')}>telefone</option>
                    </select>
                </div>

                {/*<div className='ordination-options'>
                    <span className='ordination-options__title'>Ordenar por:</span>
                    <input className='ordination-options__radio-button' type="radio" name="selectOrder" checked={this.state.orderBy === 'usernameInstagram'} onChange={() => this.orderEntrepeneur('usernameInstagram')} ></input>
                    <label className='ordination-options__label' htmlFor="usernameInstagram">Nome de usuário</label>
                    <input className='ordination-options__radio-button' type="radio" id="fullNameInstagram" name="selectOrder" checked={this.state.orderBy === 'fullNameInstagram'} onChange={() => this.orderEntrepeneur('fullNameInstagram')} ></input>
                    <label className='ordination-options__label' htmlFor="fullNameInstagram">Nome completo</label>
                    <input className='ordination-options__radio-button' type="radio" id="phoneNumber" name="selectOrder" checked={this.state.orderBy === 'phoneNumber'} onChange={() => this.orderEntrepeneur('phoneNumber')} ></input>
                    <label className='ordination-options__label' htmlFor="phoneNumber">Telefone</label>
                </div>*/}


                {this.state.orderedEntrepeneur.map(entrepreneur => (
                    <EntrepreneurCard
                        id={entrepreneur.id}
                        key={entrepreneur.id}
                        profilePictureInstagram={entrepreneur.profilePictureInstagram}
                        usernameInstagram={entrepreneur.usernameInstagram}
                        fullNameInstagram={entrepreneur.fullNameInstagram}
                        phoneNumber={entrepreneur.phoneNumber}
                        clickRemove={() => this.removeHandler(entrepreneur.id, entrepreneur.usernameInstagram)}
                    />
                ))}
                {this.state.removing && <Modal
                    usernameInstagram={this.state.usernameInstagram}
                    cancelHandler={() => this.cancelHandler()}
                    removeItem={this.removeItem}
                />}
                
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