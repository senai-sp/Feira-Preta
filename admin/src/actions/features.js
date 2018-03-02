import { postNote } from '../api/notes'

export const ADD_FEATURE = 'ADD_FEATURE'

export function adicionaNota(link) {
    return dispatch => {
        postNote(link)
            .then(response => dispatch({
                type: ADD_FEATURE, 
                link
            }))
            .catch(error => {
                console.log('Ocorreu um erro', error)
            })
    }
}