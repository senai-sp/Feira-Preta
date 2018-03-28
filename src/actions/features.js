import { postLink, getLinks, deleteLink } from '../api/features'
import { addFailure, addSuccess, START_LOAD } from './api'
export const LIST_FEATURES = 'LIST_FEATURES'

export function addFeature(link) {
    return dispatch => {
        dispatch({
            type: START_LOAD
        })
        postLink(link)
            .then((response) => {
                dispatch(addSuccess(response.data.message))
                dispatch(listFeatures())
            })
            .catch(error => {
                let message = 'Ocorreu um erro, tente mais tarde'
                if (error.message === 'Network Error') {
                    message = 'Verifique sua conexão com a Internet'
                } else {
                    message = error.message
                }
                dispatch(addFailure(message))
            })

    }
}

export function listFeatures() {
    return dispatch => {
        getLinks()
            .then(response => {
                dispatch({
                    type: LIST_FEATURES,
                    features: response.data
                })
            })
            .catch(error => {
                let message = 'Ocorreu um erro, tente mais tarde'
                if (error.message === 'Network Error') {
                    message = 'Verifique sua conexão com a Internet'
                } else {
                    message = error.message
                }
                dispatch(addFailure(message))
            })
    }
}

export function removeFeature(id) {
    return dispatch => {
        deleteLink(id)
            .then((response) => {
                dispatch(addSuccess(response.data.message))
                dispatch(listFeatures())
            })
            .catch(error => {
                let message = 'Ocorreu um erro, tente mais tarde'
                if (error.message === 'Network Error') {
                    message = 'Verifique sua conexão com a Internet'
                } else {
                    message = error.message
                }
                dispatch(addFailure(message))
            })
    }
}