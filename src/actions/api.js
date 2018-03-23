export const ADD_FAILURE = 'ADD_FAILURE'
export const ADD_SUCCESS = 'ADD_SUCCESS'
export const WARNING = 'WARNING'
export const CLEAN_MESSAGE = 'CLEAN_MESSAGE'
export const START_LOAD = 'START_LOAD'

export function addFailure(text) {
    return {
        type: ADD_FAILURE,
        payload: {
                text,
                type: 'failure'
            }
    }
}

export function addSuccess(text) {
    return dispatch => {
        dispatch({
            type: ADD_SUCCESS,
            payload: {
                text,
                type: 'success'
            }
        })
    }
}

export function warning(text) {
    return dispatch => {
        dispatch({
            type: WARNING,
            payload: {
                text,
                type: 'warning'
            }
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