export const ADD_FAILURE = 'ADD_FAILURE'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const CLEAN_MESSAGE = 'CLEAN_MESSAGE'
// export const LOADING = 'LOADING'

// export function setLoad (value) {
//     return {
//         type: LOADING,
//         value
//     }
        
// }

export function addFailure(message) {
    return {
        type: ADD_FAILURE,
        message,
        isError: true
    }
}

export function addSuccess(message) {
    return dispatch => {
        dispatch({
            type: ADD_SUCCESS,
            message,
            isError: false
        })
    }
}

export function cleanMessage() {
    return dispatch => {
        dispatch({
            type: CLEAN_MESSAGE,
            error: ''
        })
    }
}