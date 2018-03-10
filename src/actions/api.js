export const ADD_FEATURE_FAILURE = 'ADD_FEATURE_FAILURE'
export const ADD_FEATURE_SUCCESS = 'ADD_FEATURE_SUCCESS'
// export const LOADING = 'LOADING'

// export function setLoad (value) {
//     return {
//         type: LOADING,
//         value
//     }
        
// }

export function addFailure(message) {
    return {
        type: ADD_FEATURE_FAILURE,
        message
    }
}

export function addSuccess(message) {
    return dispatch => {
        dispatch({
            type: ADD_FEATURE_SUCCESS,
            message
        })
    }
}