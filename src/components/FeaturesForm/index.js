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
         event.target.reset()
     }
 
     handleChange(value, isInvalid) {
         this.value = value
         this.setState({ isInvalid })
     }
 
     render() {
         const buttonProps = {}
         if (this.state.isInvalid) {
             buttonProps.disabled = true
         }
 
         return (
             <form className='features-form' onSubmit={this.handleSubmit} >
                 {this.props.message && <div>{this.props.message}</div>}
                 <FormInput type="url" placeholder="Insira a url de um post aqui..." onChange={this.handleChange} />
                 <FormButton { ...buttonProps }>{this.props.isLoading ? 'Enviando' : 'Enviar'}</FormButton>
             </form>
         )
     }
 }
 
const mapStateToProps = state => ({
     isLoading: state.isLoading,
     message: state.message
 })
 
const mapDispatchToProps = dispatch => ({
     dispatchAddFeature: link => {
         dispatch(addFeature(link))
     }
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(FeaturesForm)