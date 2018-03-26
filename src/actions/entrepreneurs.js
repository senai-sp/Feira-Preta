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
            .catch(error => {
                dispatch(addFailure(error.data.message))
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
            .catch(error => dispatch(addFailure(error.data.message)))
    }
}

export function removeEntrepreneur(id) {
    return dispatch => {
        deleteEntrepreneur(id)
            .then((response) => {
                (addSuccess(response.data.message))
                dispatch(listEntrepreneurs())
            })
            .catch(error => dispatch(addFailure(error.data.message)))
    }
}

export function editedEntrepreneur(id, phoneNumber, usernameInstagram) {
    return dispatch => {
        putEntrepreneur(id, phoneNumber, usernameInstagram)
            .then(response => {
                dispatch(addSuccess(response.data.message))
                dispatch(listEntrepreneurs())
            })
            .catch(error => dispatch(dispatch(addFailure(error.data.message))))
    }
}