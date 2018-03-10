import React from 'react'
import { connect } from 'react-redux'
import FeaturesForm from '../../FeaturesForm'
import FeaturesList from '../../FeaturesList'
import './Features.css'

const Features = () => (
    <article className="features">
        <h1 className="features__title">Destaques</h1>
        <FeaturesForm />
        <FeaturesList />
    </article>  
)
//oncomponentdid mout
const mapStateToProps = state => ({
     message: state.message
 })
 
 export default connect(mapStateToProps, null)(Features)