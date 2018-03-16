import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listEntrepreneurs, removeEntrepreneur, editEntrepreneur } from '../../actions'
import './EntrepreneurCard.css'

class EntrepreneurCard extends Component {
    // constructor(props){
    //     super(props)
    //     this.editItem = this.editItem.bind(this)
    // }

    componentDidMount() {
        this.props.dispatchListEntrepreneur()
    }

    removeItem(id) {
        this.props.dispatchRemoveEntrepreneur(id)
    }

    editItem(isEditing, id, usernameInstagram) {
        this.props.dispatchEditEntrepreneur(true, id, usernameInstagram)
    }

    render() {
        return (
            <section>
                {this.props.entrepreneurs.map(entrepreneur => (
                    <div className="entrepreneur-card" key={entrepreneur.id} >
                        <h3 className="user">{entrepreneur.fullNameInstagram}</h3>
                        <ul className="card-links">
                            <li className="card-links__edit" onClick={() => this.editItem(true, entrepreneur.id, entrepreneur.usernameInstagram)} >Editar</li> {/* Incluir telefone como parâmetro no onClick */}
                            <li className="card-links__remove" onClick={() => this.removeItem(entrepreneur.id)} >Remover</li>
                        </ul>
                    </div>
                ))}      
            </section>
        )
    }
}

const mapStateToProps = state => ({
    entrepreneurs: state.entrepreneurs
})

const mapDispatchToProps = dispatch => ({
    dispatchListEntrepreneur: () => {
        dispatch(listEntrepreneurs())
    },
    dispatchRemoveEntrepreneur: (id) => {
        dispatch(removeEntrepreneur(id))
    },
    dispatchEditEntrepreneur: (isEditing, id, usernameInstagram) => {
        dispatch(editEntrepreneur(isEditing, id, usernameInstagram))
    } //adicionar telefone
}
)

export default connect(mapStateToProps, mapDispatchToProps)(EntrepreneurCard)