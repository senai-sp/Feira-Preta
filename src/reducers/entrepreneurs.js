import * as actionsTypes from '../actions'

const initialState = {
    entrepreneurs: [],
    error: ''
}

export function entrepreneursReducer(state = initialState, action) {
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