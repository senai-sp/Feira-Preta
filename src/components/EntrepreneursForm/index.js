import React from 'react'
import FormInput from '../Form/FormInput'
import FormButton from '../Form/FormButton'
import MaskedInput from 'react-text-mask'

const EnterpreneursForm = () => (
    <form>
        <input className="form-input" type='text' placeholder='@usuário'/>
        <MaskedInput
            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            className="form-input"
            placeholder="Telefone"
            guide={true}
            keepCharPositions={true}/>
        <FormButton>Enviar</FormButton>
    </form>
)

export default EnterpreneursForm