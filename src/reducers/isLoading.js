import * as actionsTypes from '../actions'

export function isLoading(state = { isLoading: false }, action) {
    switch (action.type) {
        case actionsTypes.ADD_FEATURE:
            return {
                ...state,
                isLoading: true
            }
        case actionsTypes.ADD_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        case actionsTypes.ADD_SUCCESS:
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