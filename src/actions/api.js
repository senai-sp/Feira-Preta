export const FAILURE_MESSAGE = 'FAILURE_MESSAGE'
export const SUCCESS_MESSAGE = 'SUCCESS_MESSAGE'
export const CLEAN_MESSAGE = 'CLEAN_MESSAGE'
export const START_LOAD = 'START_LOAD'

export function failureMessage(text) {
    return {
        type: FAILURE_MESSAGE,
        payload: {
                text,
                type: 'failure'
            }
    }
}

export function successMessage(text) {
    return dispatch => {
        dispatch({
            type: SUCCESS_MESSAGE,
            payload: {
                text,
                type: 'success'
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