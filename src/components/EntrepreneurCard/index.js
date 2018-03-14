import React, { Component } from 'react'
import { connect } from 'react-redux'
import { listEntrepreneurs, removeEntrepreneur } from '../../actions'
import './EntrepreneurCard.css'

class EntrepreneurCard extends Component {
    constructor(props){
        super(props)
        this.removeItem = this.removeItem.bind(this)
    }

    componentDidMount() {
        this.props.dispatchListEntrepreneur()
    }

    removeItem(id) {
        this.props.dispatchremoveEntrepreneur(id)
    }

    render() {
        return (
            <section>
                {this.props.entrepreneurs.map(entrepreneur => (
                    <div className="entrepreneur-card" key={entrepreneur.id} >
                        <h3 className="user">{entrepreneur.fullNameInstagram}</h3>
                        <ul className="card-links">
                            <li className="card-links__edit" >Editar</li>
                            <li className="card-links__remove" onClick={this.removeItem}>Remover</li>
                        </ul>
                    </div>
                ))}
            </section>
        )

    }
}

const mapStateToProps = state => ({
    entrepreneurs: state.entrepreneurs.entrepreneurs
})

const mapDispatchToProps = dispatch => ({
    dispatchListEntrepreneur: () => {
        dispatch(listEntrepreneurs())
    },
    dispatchremoveEntrepreneur: (id) => {
        dispatch(removeEntrepreneur(id))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EntrepreneurCard)