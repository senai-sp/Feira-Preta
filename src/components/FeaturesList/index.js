import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listFeatures, removeFeature } from '../../actions'
import FeaturesCard from '../FeaturesCard'
import './FeaturesList.css'


class FeaturesList extends Component {
    constructor(props) {
        super(props)
        this.state = { orderedFeatures: [] }
    }


    componentDidMount() {
        this.props.dispatchListFeatures()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ orderedFeatures: [...nextProps.features].reverse() })
    }

    removeItem(id) {
        this.props.dispatchRemoveFeature(id)
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
                        click={() => this.removeItem(feature.id)}
                        href={feature.link}
                    />
                ))}
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