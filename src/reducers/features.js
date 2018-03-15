import * as actionsTypes from '../actions'

export function features(state = { features: [] }, action) {
    switch(action.type) {
        case actionsTypes.LIST_FEATURES:
            return {
                ...state,
                features: action.features
            }
        default:
            return state
    }
}