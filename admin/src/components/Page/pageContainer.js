import React from 'react'
import { connect } from 'react-redux'
import Page from './index'
import * as actionsTypes from '../../actions'


const mapStateToProps = state => ({
    postList: state.
})

const mapDispatchToProps = dispatch => ({
    adicionarNota: (titulo, texto, formulario, posicao) => {
        if (posicao === undefined) {
            dispatch(adicionaNota(titulo, texto))
            formulario.reset()
        } else {
            dispatch(alteraNota(posicao, titulo, texto))
        }
    }
})

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page)

export default PageContainer