import { postEntrepreneurs, getEntrepreneurs, deleteEntrepreneur, putEntrepreneur } from '../api/entrepreneurs'
import { addFailure, addSuccess, START_LOAD } from './api'
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
                (response.data.statusCode < 300) ? dispatch(addSuccess(response.data.message)) : dispatch(addFailure(response.data.message))
                dispatch(listEntrepreneurs())
            })
            .catch(error => {
                dispatch(addFailure('Ocorreu um erro inesperado'))
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
            .catch(error => dispatch(addFailure('Ocorreu um erro e não foi possível carregar a lista de empreendedores')))
    }
}

export function removeEntrepreneur(id) {
    return dispatch => {
        deleteEntrepreneur(id)
            .then((response) => {
                (response.data.statusCode < 300) ? dispatch(addSuccess(response.data.message)) : dispatch(addFailure(response.data.message))
                dispatch(listEntrepreneurs())
            })
            .catch(error => dispatch(addFailure('Não foi possível remover o empreendedor')))
    }
}

export function editEntrepreneur(isEditing, id, usernameInstagram, phoneNumber) {
    return dispatch => {
        dispatch({
            type: EDIT_ENTREPRENEUR,
            isEditing,
            id,
            usernameInstagram,
            phoneNumber
        })
    }
}

export function editedEntrepreneur(id, phoneNumber, usernameInstagram) {
    return dispatch => {
        putEntrepreneur(id, phoneNumber, usernameInstagram)
            .then(response => {
                (response.data.statusCode < 300) ? dispatch(addSuccess(response.data.message)) : dispatch(addFailure(response.data.message))
                dispatch(listEntrepreneurs())
            })
            .catch(error => dispatch(addFailure('Não foi possível atualizar os dados do empreendedor')))
    }
}