import * as actionsTypes from '../actions'

export function isLoading(state = { isLoading: false }, action) {
    switch (action.type) {
        case actionsTypes.START_LOAD:
            return {
                ...state,
                isLoading: true
            }
        case actionsTypes.FAILURE_MESSAGE:
            return {
                ...state,
                isLoading: false,
            }
        case actionsTypes.SUCCESS_MESSAGE:
            return {
                ...state,
                isLoading: false,
            }
        case actionsTypes.CLEAN_MESSAGE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
}