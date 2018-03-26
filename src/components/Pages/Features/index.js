import React from 'react'
import FeaturesForm from '../../FeaturesForm'
import FeaturesList from '../../FeaturesList'
import Toaster from '../../Toaster'
import './Features.css'

const Features = () => (
    <article className="features">
        <h1 className="features__title">Destaques</h1>
        <FeaturesForm />
        <FeaturesList />
    </article>
)

export default Features