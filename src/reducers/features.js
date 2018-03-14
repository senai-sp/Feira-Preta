import * as actionsTypes from '../actions'


const initialState = {
    features: [],
    isLoading: false,
    error: ''
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.LIST_FEATURES:
            return {
                ...state,
                features: action.features
            }
        case actionsTypes.ADD_FEATURE:
            return {
                ...state,
                isLoading: true
            }
        case actionsTypes.ADD_FAILURE:
            return {
                ...state,
                isLoading: false,
                message: {
                    text: action.message,
                    isError: true
                }
            }
        case actionsTypes.ADD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: {
                    text: action.message,
                    isError: false
                }
            }
        case actionsTypes.CLEAN_MESSAGE:
            return {
                ...state,
                isLoading: false,
                message: action.message
            }
        default:
            return state
    }
}