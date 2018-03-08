import { postEntrepreneurs } from '../api/entrepreneurs'
export const ADD_ENTREPRENEUR = 'ADD_ENTREPRENEUR'
export const ADD_ENTREPRENEUR_FAILURE = 'ADD_ENTREPRENEUR_FAILURE'
export const ADD_ENTREPRENEUR_SUCCESS = 'ADD_ENTREPRENEUR_SUCCESS'

function addEntrepreneurFailure(error) {
    return {
        type: ADD_ENTREPRENEUR_FAILURE,
        error
    }
}

function addEntrepreneurSuccess() {
    return dispatch => {
        dispatch({
            type: ADD_ENTREPRENEUR_SUCCESS,
        })
        // dispatch(listEntrepreneurs())
    }
}

export function addEntrepreneur(userName, phoneNumber) {
    return dispatch => {
        dispatch({
            type: ADD_ENTREPRENEUR
        })
        postEntrepreneurs(userName, phoneNumber)
            .then(() => {
                dispatch(addEntrepreneurSuccess())
            })
            .catch(error => {
                console.log(error)
                dispatch(addEntrepreneurFailure('Não foi possível cadastrar o empreendedor'))
            })
            
    }
}