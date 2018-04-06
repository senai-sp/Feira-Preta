import { postEntrepreneurs, getEntrepreneurs, deleteEntrepreneur, putEntrepreneur } from '../api/entrepreneurs'
import { failureMessage, successMessage, START_LOAD } from './api'
export const LIST_ENTREPRENEUR = 'LIST_ENTREPRENEUR'
export const REMOVE_ENTREPRENEUR = 'REMOVE_ENTREPRENEUR'
export const EDIT_ENTREPRENEUR = 'EDIT_ENTREPRENEUR'

export function addEntrepreneur(userName, phoneNumber) {
    return dispatch => {
        dispatch({
            type: START_LOAD
        })
        postEntrepreneurs(userName, phoneNumber)
            .then((response) => {
                dispatch(successMessage('Empreendedor cadastrado com sucesso'))
                dispatch(listEntrepreneurs())
            })
            .catch((error) => {
                if (error.message === 'Network Error') {
                    dispatch(failureMessage('Não foi possível cadastrar o empreendedor. Verifique sua conexão com a Internet e tente novamente'))
                } else {
                    dispatch(failureMessage(error.response.data))
                }
            })
    }
}

export function listEntrepreneurs() {
    return dispatch => {
        getEntrepreneurs()
            .then(response => {
                dispatch({
                    type: LIST_ENTREPRENEUR,
                    entrepreneurs: response.data
                })
            })
            .catch((error) => {
                if (error.message === 'Network Error') {
                    dispatch(failureMessage('Não foi possível listar os empreendedores cadastrados. Verifique sua conexão com a Internet e tente novamente'))
                } else {
                    dispatch(failureMessage(error.response.data))
                }
            })

    }
}

export function removeEntrepreneur(id) {
    return dispatch => {
        deleteEntrepreneur(id)
            .then((response) => {
                dispatch(successMessage('Empreendedor removido com sucesso'))
                dispatch(listEntrepreneurs())
            })
            .catch((error) => {
                if (error.message === 'Network Error') {
                    dispatch(failureMessage('Não foi possível remover o cadastro do empreendedor. Verifique sua conexão com a Internet e tente novamente'))
                } else {
                    dispatch(failureMessage(error.response.data))
                }
            })
    }
}

export function editedEntrepreneur(id, phoneNumber, usernameInstagram) {
    return dispatch => {
        putEntrepreneur(id, phoneNumber, usernameInstagram)
            .then(response => {
                dispatch(successMessage('Edição realizada com sucesso'))
                dispatch(listEntrepreneurs())
            })
            .catch((error) => {
                if (error.message === 'Network Error') {
                    dispatch(failureMessage('Não foi possível editar os dados do empreendedor. Verifique sua conexão com a Internet e tente novamente'))
                } else {
                    dispatch(failureMessage(error.response.data))
                }
            })
    }
}