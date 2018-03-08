import React from 'react'
import { connect } from 'react-redux'
import { addFeature } from '../../actions'
import FormInput from '../Form/FormInput'
import FormButton from '../Form/FormButton'
import './FeaturesForm.css'


class FeaturesForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isInvalid: false }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.dispatchAddFeature(this.value)
        console.log(this.value)       
    }

    handleChange(value, isInvalid) {
        this.value = value
        this.setState({ isInvalid });
        console.log(this.value)
    }

    render() {
        const buttonProps = {}
        if (this.state.isInvalid) {
            buttonProps.disabled = true
        }
        console.log(this.props)

        return (
            <form className='features-form' onSubmit={this.handleSubmit} >
                {this.props.error && <div>{this.props.error}</div>}
                <FormInput type="url" placeholder="Insira a url de um post aqui..." onChange={this.handleChange} />
                <FormButton { ...buttonProps }>{this.props.isLoading ? 'Enviando' : 'Enviar'}</FormButton>
            </form>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    error: state.error
})

const mapDispatchToProps = dispatch => ({
    dispatchAddFeature: link => {
        dispatch(addFeature(link))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesForm)