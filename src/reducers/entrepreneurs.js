import * as actionsTypes from '../actions'

export function entrepreneurs(state = { entrepreneurs: [] }, action) {
    switch(action.type) {
        case actionsTypes.ADD_ENTREPRENEUR:
            return {
                ...state
            }
        case actionsTypes.LIST_ENTREPRENEUR:
            return {
                ...state,
                entrepreneurs: action.entrepreneurs
            }
        default:
            return state
    }
}