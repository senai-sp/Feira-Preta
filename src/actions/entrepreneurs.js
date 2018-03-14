import { postEntrepreneurs, getEntrepreneurs } from '../api/entrepreneurs'
import { addFailure, addSuccess } from './api'
export const ADD_ENTREPRENEUR = 'ADD_ENTREPRENEUR'
export const LIST_ENTREPRENEUR = 'LIST_ENTREPRENEUR'

export function addEntrepreneur(userName, phoneNumber) {

    return dispatch => {
        dispatch({
            type: ADD_ENTREPRENEUR,
        })
        postEntrepreneurs(userName, phoneNumber)
            .then(() => {
                dispatch(addSuccess('Cadastrado com sucesso'))
                dispatch(listEntrepreneurs())
            })
            .catch(error => {
                if (error.response && error.response.status === 404) {
                    dispatch(addFailure('Usuário incorreto'))
                } else if (error.response && error.response.status === 409) {
                    dispatch(addFailure('Empreendedor já cadastrado'))
                } else {
                    dispatch(addFailure('Ocorreu um erro inesperado'))
                }
                console.log(error)
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
                console.log(response)
            } )
            .catch(error => console.log(error))
    }
}