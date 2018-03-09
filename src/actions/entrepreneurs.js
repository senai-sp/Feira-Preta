import { postEntrepreneurs, getEntrepreneurs } from '../api/entrepreneurs'
export const ADD_ENTREPRENEUR = 'ADD_ENTREPRENEUR'
export const ADD_ENTREPRENEUR_FAILURE = 'ADD_ENTREPRENEUR_FAILURE'
export const ADD_ENTREPRENEUR_SUCCESS = 'ADD_ENTREPRENEUR_SUCCESS'
export const LIST_ENTREPRENEUR = 'LIST_ENTREPRENEUR'

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
            type: ADD_ENTREPRENEUR,
        })
        postEntrepreneurs(userName, phoneNumber)
            .then(() => {
                dispatch(addEntrepreneurSuccess())
            })
            .catch(error => {
                if (error.status == 'Request failed with status code 409') {
                    console.log('ijaodjiawoidjoaiwjdaiwohdojiw')
                } else if (error = 'Error: Network Error') { //DEU CERTO! COPIAR CÓDIGO TODO
                    console.log(500)
                } else {error 
                    console.log(error)
                    dispatch(addEntrepreneurFailure('Não foi possível cadastrar o empreendedor'))
                }
            })
    }
}

// export function listEntrepreneurs() {
//     return dispatch => {
//         getEntrepreneurs()
//             .then(response => dispatch({
//                 type: LIST_ENTREPRENEUR,
//                 entrepreneurs: response.data
//             }))
//             .catch(error => alert('Houve um problema e não conseguimos carregar a lista de usuários'))
//     }
// }