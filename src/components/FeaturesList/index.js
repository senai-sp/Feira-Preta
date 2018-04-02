import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listFeatures, removeFeature } from '../../actions'
import FeaturesCard from '../FeaturesCard'
import FormButton from '../Form/FormButton'
import Modal from '../Modal'
import './FeaturesList.css'


class FeaturesList extends Component {
    constructor(props) {
        super(props)
        this.state = { orderedFeatures: [], removing: false }
        this.removeHandler = this.removeHandler.bind(this)
    }


    componentDidMount() {
        this.props.dispatchListFeatures()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ orderedFeatures: [...nextProps.features].reverse() })
    }

    removeHandler(id) {
        this.setState({ id, removing: true })
    }

    cancelHandler() {
        this.setState({ id: '', removing: false })
    }

    removeItem() {
        this.props.dispatchRemoveFeature(this.state.id)
        this.setState({ id: '', removing: false })
    }

    render() {
        
        return (
            <section className="features-list">
                {this.state.orderedFeatures.map(feature => (
                    <FeaturesCard
                        key={feature.id}
                        image={feature.imageStandardResolution}
                        text={feature.subtitle ? feature.subtitle : 'Sem legenda'}
                        user={feature.person.fullNameInstagram}
                        click={() => this.removeHandler(feature.id)}
                        href={feature.link}
                    />
                ))}
                {this.state.removing && <Modal
                    cancelHandler={() => this.cancelHandler()}>
                    <form className="modal__form" >
                        <label>Confirma a exclusão do destaque?</label>
                        <FormButton type="button" onClick={() => this.cancelHandler()} >Cancelar</FormButton>
                        <FormButton type="submit" className="form-button--secondary" onClick={() => this.removeItem()} >Excluir</FormButton>
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
    dispatchRemoveFeature: id => {
        dispatch(removeFeature(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesList)