import { postLink, getLinks } from '../api/features'


export const ADD_FEATURE = 'ADD_FEATURE'
export const LIST_FEATURES = 'LIST_FEATURES'

export function addFeature(link) {
    return dispatch => {
        postLink(link) 
            .then(() => dispatch(listFeatures()))
            .catch(error => console.log('error', error))
    }
}

export function listFeatures() {
    return dispatch => {
        getLinks() 
            .then(response => dispatch({
                type: LIST_FEATURES,
                features: response.data
            }))
            .catch(error => console.log('error', error))
    }
}