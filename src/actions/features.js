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
                (response.data.statusCode < 300) ? dispatch(addSuccess(response.data.message)) : dispatch(addFailure(response.data.message))
                dispatch(listFeatures())
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    dispatch(addFailure('Destaque não cadastrado'))
                } else if (error.response && error.response.status === 409) {
                    dispatch(addFailure('Destaque já cadastrado'))
                } else {
                    dispatch(addFailure('Ocorreu um erro inesperado'))
                }
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
            .catch(error => dispatch(addFailure('Houve um problema e não foi possível carregar a lista de destaques')))
    }
}

export function removeFeature(id) {
    return dispatch => {
        deleteLink(id)
            .then((response) => {
                (response.data.statusCode < 300) ? dispatch(addSuccess(response.data.message)) : dispatch(addFailure(response.data.message))
                dispatch(listFeatures())
            })
            .catch(error => dispatch(addFailure('Não foi possível remover o destaque')))
    }
}