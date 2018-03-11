import React from 'react'
import classnames from 'classnames'
import './FormInput.css'


class FormInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = { error: undefined }
        this.validate = this.validate.bind(this)
    }

    validate(event) {
        let value = event.target.value
        const regex = /^https:\/\/www\.instagram\.com(\/(p)\/)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
        const pattern = new RegExp(regex, 'i');

        if (value === '') {
            this.props.onChange(value, true)
            this.setState({ error: '*campo obrigatório' });
        } else if(this.props.type == 'url' && !pattern.test(value)) {
            this.props.onChange(value, true)
            this.setState({ error: '*endereço incorreto' });
        } else {
            this.props.onChange(value, false)
            this.setState({ error: undefined });
        }
    }

    render() {
        const { className, onChange, ...props } = this.props

        return (
            <fieldset>
                <input className={classnames('form-input', { 'form-input--error': this.state.error })} {...props}  onChange={this.validate} />
                 {this.state.error && <p className="form-input__error">{this.state.error}</p>} 
            </fieldset>
        )

    }
}

export default FormInput