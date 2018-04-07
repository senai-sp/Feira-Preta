import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listEntrepreneurs, removeEntrepreneur } from '../../actions'
import EntrepreneurCard from '../EntrepreneurCard'
import FormButton from '../Form/FormButton'
import Modal from '../Modal'
import './EntrepreneurList.css'

class EntrepreneurList extends Component {
    constructor(props) {
        super(props)
        this.state = { orderedEntrepeneur: [...this.props.entrepreneurs], selectValue: '', removing: false }
        this.removeItem = this.removeItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
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

    handleChange(event) {
        this.setState({ selectValue: event.target.value }, () => this.orderEntrepeneur(this.state.selectValue));
    }

    orderEntrepeneur(selectValue) {
        switch (this.state.selectValue) {
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
    }

    render() {
        
        return (
            <section>
                <div className='ordination-options'>
                    <span className='ordination-options__title'>Ordenar por </span>
                    <select className='ordination-options__select' value={this.state.selectValue} onChange={this.handleChange}>
                        <option className='ordination-options__select-option' id="usernameInstagram" name="selectOrder" value="usernameInstagram" >Nome de usuário</option>
                        <option className='ordination-options__select-option' id="fullNameInstagram" name="selectOrder" value="fullNameInstagram" >Nome completo</option>
                        <option className='ordination-options__select-option' id="phoneNumber" name="selectOrder" value="phoneNumber" >Telefone</option>
                    </select>
                </div>
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
                    cancelHandler={() => this.cancelHandler()}>
                    <form className="modal__form" >
                        <label>Confirma a exclusão de <strong>{this.state.usernameInstagram}</strong>?</label>
                        <FormButton type="button" onClick={() => this.cancelHandler()} >Cancelar</FormButton>
                        <FormButton type="submit" className="form-button--secondary" onClick={() => this.removeItem()} >Excluir</FormButton>
                    </form>
                </Modal>}
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