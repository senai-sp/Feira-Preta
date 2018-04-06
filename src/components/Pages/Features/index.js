import React from 'react'
import FeaturesForm from '../../FeaturesForm'
import FeaturesList from '../../FeaturesList'
import FeaturesHighlight from '../../FeaturesHighlight'
import './Features.css'

const Features = () => (
    <article className="features">
        <h1 className="features__title">Destaques</h1>
        <FeaturesHighlight />
        <FeaturesForm />
        <FeaturesList />
    </article>
)

export default Features