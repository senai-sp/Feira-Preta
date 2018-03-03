import { postLink } from '../api/features'
export const ADD_FEATURE = 'ADD_FEATURE'


export function addFeature(link) {
    return dispatch => {
        postLink(link) 
            .then( response => {
                dispatch({
                    type: ADD_FEATURE,
                    posts: response.data.posts
                })
            })
            .catch(error => console.log(error))
    }
}

//chmar a api e depois do retorno disparar a acao passando nela os posts que recebeu como resposta do backend
     

