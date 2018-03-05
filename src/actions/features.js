import { postLink, getLinks } from '../api/features'


export const ADD_FEATURE = 'ADD_FEATURE'
export const LIST_FEATURES = 'LIST_FEATURES'

export function addFeature(link) {
    return dispatch => {
        postLink(link) 
            .then(() => dispatch(listFeatures()))
            .catch(error => alert('Houve algum problema e o link não cadastrado! Verifique o endereço e tente novamente.'))
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