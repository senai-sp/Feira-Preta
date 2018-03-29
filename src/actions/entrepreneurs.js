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
                dispatch(addSuccess(response.data.message))
                dispatch(listEntrepreneurs())
            })
            .catch((error) => {
                if (error.message === 'Network Error') {
                    dispatch(addFailure('Não foi possível cadastrar o empreendedor. Verifique sua conexão com a Internet e tente novamente'))
                } else {
                    dispatch(addFailure(error.response.data))
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
                    dispatch(addFailure('Não foi possível listar os empreendedores cadastrados. Verifique sua conexão com a Internet e tente novamente'))
                } else {
                    dispatch(addFailure(error.response.data))
                }
            })

    }
}

export function removeEntrepreneur(id) {
    return dispatch => {
        deleteEntrepreneur(id)
            .then((response) => {
                dispatch(addSuccess(response.data.message))
                dispatch(listEntrepreneurs())
            })
            .catch((error) => {
                if (error.message === 'Network Error') {
                    dispatch(addFailure('Não foi possível remover o cadastro do empreendedor. Verifique sua conexão com a Internet e tente novamente'))
                } else {
                    dispatch(addFailure(error.response.data))
                }
            })
    }
}

export function editedEntrepreneur(id, phoneNumber, usernameInstagram) {
    return dispatch => {
        putEntrepreneur(id, phoneNumber, usernameInstagram)
            .then(response => {
                dispatch(addSuccess(response.data.message))
                dispatch(listEntrepreneurs())
            })
            .catch((error) => {
                if (error.message === 'Network Error') {
                    dispatch(addFailure('Não foi possível editar os dados do empreendedor. Verifique sua conexão com a Internet e tente novamente'))
                } else {
                    dispatch(addFailure(error.response.data))
                }
            })
    }
}