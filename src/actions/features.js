import { postLink, getLinks } from '../api/features'
// import { setLoad } from './api'
export const ADD_FEATURE = 'ADD_FEATURE'
export const ADD_FEATURE_FAILURE = 'ADD_FEATURE_FAILURE'
export const ADD_FEATURE_SUCCESS = 'ADD_FEATURE_SUCCESS'
export const LIST_FEATURES = 'LIST_FEATURES'

function addFeatureFailure(errorMessage) {
    return {
        type: ADD_FEATURE_FAILURE,
        errorMessage
    }
}

function addFeatureSuccess() {
    return dispatch => {
        dispatch({
            type: ADD_FEATURE_SUCCESS,
        })
        dispatch(listFeatures())
    }
}

export function addFeature(link) {
    return dispatch => {
        dispatch({
            type: ADD_FEATURE
        })
        postLink(link)
            .then(() => {
                dispatch(addFeatureSuccess())
            })
            .catch(error => {
                // console.log(error)
                if (error == 409) {
                    dispatch(addFeatureFailure('Destaque já cadastrado'))
                } else if (error == "Error: Network Error") {
                    dispatch(addFeatureFailure('Não foi possível cadastrar o destaque'))
                } else {
                    dispatch(addFeatureFailure('Não foi possível adicionar o o destaque'))
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