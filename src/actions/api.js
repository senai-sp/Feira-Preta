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

export function addFailure(text) {
    return {
        type: ADD_FAILURE,
        text
    }
}

export function addSuccess(text) {
    return dispatch => {
        dispatch({
            type: ADD_SUCCESS,
            text
        })
    }
}

export function cleanMessage() {
    return dispatch => {
        dispatch({
            type: CLEAN_MESSAGE
        })
    }
}