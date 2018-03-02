import React from 'react'
import { connect } from 'react-redux'
import './Features.css'

const Features = props => {
    return (
        <section className='features'>
            <h2 className='title'>Destaques Cadastrados</h2>
            {
                props.features.map(feature => (
                    <div >
                        <img src={feature.images.standard_resolution.url} />
                        <h4>{feature.user.full_name}</h4>
                        <p>{feature.caption ? feature.caption.text : 'Sem legenda'}</p>
                        <a href={feature.link}>{feature.link}</a>
                    </div>
                ))
            }
        </section>
    )
}

const mapStateToProps = state => ({
    features: state.features
})

export default connect(mapStateToProps)(Features)