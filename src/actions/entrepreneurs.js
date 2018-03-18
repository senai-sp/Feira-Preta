import { postEntrepreneurs, getEntrepreneurs, deleteEntrepreneur, putEntrepreneur } from '../api/entrepreneurs'
import { addFailure, addSuccess, START_LOAD } from './api'
export const LIST_ENTREPRENEUR = 'LIST_ENTREPRENEUR'
export const REMOVE_ENTREPRENEUR = 'REMOVE_ENTREPRENEUR'
export const EDIT_ENTREPRENEUR = 'EDIT_ENTREPRENEUR'

export function addEntrepreneur(userName, phoneNumber) {
    return dispatch => {
        dispatch({
            type: START_LOAD
        })
        postEntrepreneurs(userName, phoneNumber)
            .then((response) => {
                console.log(response)
                dispatch(addSuccess(response.data.message))
                dispatch(listEntrepreneurs())
            })
            .catch(error => {
                if (error.response && error.response.status === 404) {
                    dispatch(addFailure('Usuário incorreto'))
                } else if (error.response && error.response.status === 409) {
                    dispatch(addFailure('Empreendedor já cadastrado'))
                } else {
                    dispatch(addFailure('Ocorreu um erro inesperado'))
                }
            })
    }
}

export function listEntrepreneurs() {
    return dispatch => {
        getEntrepreneurs()
            .then(response => {
                dispatch({
                    type: LIST_ENTREPRENEUR,
                    entrepreneurs: response.data
                })
            })
            .catch(error => dispatch(addFailure('A lista de empreendedores não foi carregada')))
    }
}

export function removeEntrepreneur(id) {
    return dispatch => {
        deleteEntrepreneur(id)
            .then((response) => {
                console.log(response)
                dispatch(addSuccess(response.data.message))
                dispatch(listEntrepreneurs())
            })
            .catch(error => dispatch(addFailure('Não foi possível remover o empreendedor')))
    }
}

export function editEntrepreneur(isEditing, id, usernameInstagram, phoneNumber) {
    return dispatch => {
        dispatch({
            type: EDIT_ENTREPRENEUR,
            isEditing,
            id,
            usernameInstagram,
            phoneNumber
        })
    }
}

// export function editedEntrepreneur(id, tel, usernameInstagram) {
//     return dispatch => {
//         deleteEntrepreneur(id)
//             .then(() => {
//                 postEntrepreneurs(usernameInstagram, tel)
//                     .then(() => {
//                         dispatch(listEntrepreneurs())
//                         alert('iajdwjiow')
//                     })
//             })
//             .catch(error => dispatch(addFailure('Não foi possível atualizar os dados do empreendedor')))
//     }
// }

export function editedEntrepreneur(id, phoneNumber, usernameInstagram) {
    return dispatch => {
        putEntrepreneur(id, phoneNumber, usernameInstagram)
            .then(response => {
                dispatch(addSuccess(response.data.message))
                dispatch(listEntrepreneurs())
            })
            .catch(error => dispatch(addFailure('Não foi possível atualizar os dados do empreendedor')))
    }
}