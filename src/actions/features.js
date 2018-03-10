import { postLink, getLinks } from '../api/features'
import { addFailure, addSuccess } from './api'
export const ADD_FEATURE = 'ADD_FEATURE'
export const LIST_FEATURES = 'LIST_FEATURES'

export function addFeature(link) {
    return dispatch => {
        dispatch({
            type: ADD_FEATURE
        })
        postLink(link)
            .then(() => {
                dispatch(addSuccess('Cadastrado com sucesso'))
                dispatch(listFeatures())
            })
            .catch(error => {
                if (error.response && error.response.status === 400) {
                    dispatch(addFailure('URL incorreta'))
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
            .then(response => dispatch({
                type: LIST_FEATURES,
                features: response.data
            }))
            .catch(error => alert('Houve um problema e não conseguimos carregar a lista de destaques!'))
    }
}