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
        this.state = { orderedFeatures: [], adding: false }
        this.addHandler = this.addHandler.bind(this)
    }

    componentDidMount() {
        this.props.dispatchListFeatures()
    }

    componentWillUnmount() {
        this.props.dispatchCleanMessage()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ orderedFeatures: [...nextProps.features].filter((feature) => feature.isHighlight === false).reverse() })
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

    render() {

        return (
            <section className="features-list">
                <h2>Lista de Posts</h2>
                {this.state.orderedFeatures.map(feature => (
                    <FeaturesCard
                        key={feature.id}
                        image={feature.imageStandardResolution}
                        text={feature.subtitle ? feature.subtitle : 'Sem legenda'}
                        user={feature.person.fullNameInstagram}
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