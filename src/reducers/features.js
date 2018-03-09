import * as actionsTypes from '../actions'


const initialState = {
    features: [],
    isLoading: false,
    error: ''
}

export function reducer(state = initialState, action) {
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
        case actionsTypes.ADD_FEATURE_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.errorMessage
            }
        case actionsTypes.ADD_FEATURE_SUCCESS:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}