import * as actionsTypes from '../actions'


const initialState = {
    features: [],
    isLoading: false,
    error: ''
}

export function featuresReducer(state = initialState, action) {
    switch(action.type) {
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
                message: action.message
            }
        case actionsTypes.ADD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                message: action.message
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