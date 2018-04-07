import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listFeatures, addFeature, cleanMessage } from '../../actions'
import FaStar from 'react-icons/lib/fa/star'
import FeaturesCard from '../FeaturesCard'
import FormButton from '../Form/FormButton'
import Modal from '../Modal'
import './FeaturesList.css'


class FeaturesList extends Component {
    constructor(props) {
        super(props)
        this.state = { orderedFeatures: [], adding: false, selectValue: '' }
        this.addHandler = this.addHandler.bind(this)
        this.handleOption = this.handleOption.bind(this)
    }

    componentDidMount() {
        this.props.dispatchListFeatures()
    }

    componentWillUnmount() {
        this.props.dispatchCleanMessage()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ orderedFeatures: [...nextProps.features].filter((feature) => feature.isHighlight === false) }, () => this.orderFeatures())
    }

    addHandler(link) {
        this.setState({ link, adding: true })
    }

    cancelHandler() {
        this.setState({ id: '', adding: false })
    }

    addHighlight() {
        this.props.dispatchAddFeature(this.state.link)
        this.setState({ link: '', adding: false })
    }

    handleOption(event) {
        this.setState({ selectValue: event.target.value }, () => this.orderFeatures(this.state.selectValue));
    }

    orderFeatures(selectValue) {
        switch (this.state.selectValue) {
            case 'subtitle':
                this.setState({ orderedFeatures: this.state.orderedFeatures.sort((a, b) => (a.subtitle > b.subtitle) ? 1 : (b.subtitle > a.subtitle) ? -1 : 0) })
                break
            case 'fullNameInstagram':
                this.setState({ orderedFeatures: this.state.orderedFeatures.sort((a, b) => (a.person.fullNameInstagram > b.person.fullNameInstagram) ? 1 : (b.person.fullNameInstagram > a.person.fullNameInstagram) ? -1 : 0) })
                break
            case 'createdDate':
                this.setState({ orderedFeatures: this.state.orderedFeatures.sort((a, b) => (a.person.createdDate > b.person.createdDate) ? 1 : (b.person.createdDate > a.person.createdDate) ? -1 : 0) })
                break
            default:
                this.setState({ orderedFeatures: this.state.orderedFeatures.sort((a, b) => (a.person.usernameInstagram > b.person.usernameInstagram) ? 1 : (b.person.usernameInstagram > a.person.usernameInstagram) ? -1 : 0) })
                break
        }
    }

    render() {

        return (
            <section className="features-list">

                <div className='ordination-options'>
                    <span className='ordination-options__title'>Ordenar por </span>
                    <select className='ordination-options__select' value={this.state.selectValue} onChange={this.handleOption}>
                        <option className='ordination-options__select-option' id="usernameInstagram" name="selectOrder" value="usernameInstagram" >Nome de usuário</option>
                        <option className='ordination-options__select-option' id="fullNameInstagram" name="selectOrder" value="fullNameInstagram" >Nome completo</option>
                        <option className='ordination-options__select-option' id="subtitle" name="selectOrder" value="subtitle" >Legenda</option>
                        <option className='ordination-options__select-option' id="createdDate" name="selectOrder" value="createdDate" >Data de inclusão</option>
                    </select>
                </div>
{/*createdDate={feature.person.createdDate.left(6)}*/}
                {this.state.orderedFeatures.map(feature => (
                    <FeaturesCard
                        key={feature.id}
                        image={feature.imageStandardResolution}
                        text={feature.subtitle ? feature.subtitle : 'Sem legenda'}
                        fullNameInstagram={feature.person.fullNameInstagram}
                        usernameInstagram={feature.person.usernameInstagram}
                        
                        click={() => this.addHandler(feature.link)}
                        href={feature.link}>
                        <FaStar className="add-highlight" />
                    </FeaturesCard>
                ))}
                {this.state.adding && <Modal
                    cancelHandler={() => this.cancelHandler()}>
                    <form className="modal__form" >
                        <label>Confirma a inclusão do post como destaque?</label>
                        <FormButton type="submit" onClick={() => this.addHighlight()} >Incluir</FormButton>
                        <FormButton type="button" className="form-button--secondary" onClick={() => this.cancelHandler()} >Cancelar</FormButton>
                    </form>
                </Modal>}
            </section>
        )
    }
}

const mapStateToProps = state => ({
    features: state.features.features
})

const mapDispatchToProps = dispatch => ({
    dispatchListFeatures: () => {
        dispatch(listFeatures())
    },
    dispatchAddFeature: link => {
        dispatch(addFeature(link))
    },
    dispatchCleanMessage: () => {
        dispatch(cleanMessage())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesList)