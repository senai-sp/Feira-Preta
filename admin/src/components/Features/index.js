import React from 'react'
import { connect } from 'react-redux'
import './Features.css'
import Card from '../Card'

const Features = props => {
    return (
        <section className='features'>
            <h2 className='title'>Destaques Cadastrados</h2>
            <div className='features__cards'>
                {
                props.features.map((feature, index) => (
                    <Card key={index} image={feature.images.standard_resolution.url} text={feature.caption ? feature.caption.text : 'Sem legenda'} user={feature.user.full_name} />
                ))
            }
            </div>
            
        </section>
    )
}

const mapStateToProps = state => ({
    features: state.features
})

export default connect(mapStateToProps)(Features)