import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listFeatures } from '../../actions'
import Card from '../Card'
import './FeaturesList.css'


class FeaturesList extends Component {
    componentDidMount() {
        this.props.dispatchListFeatures()
    }

    render() {
        return (
            <section className="features-list">
                {this.props.features.map(feature => (
                    <Card
                        key={feature.id}
                        image={feature.imageStandardResolution}
                        text={feature.subtitle ? feature.subtitle : 'Sem legenda'}
                        user={feature.person.fullNameInstagram}
                    />
                ))}
            </section>
        )
    }
}

const mapStateToProps = state => ({
    features: state.features
})

const mapDispatchToProps = dispatch => ({
    dispatchListFeatures: () => {
        dispatch(listFeatures())
        console.log(dispatch)
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesList)