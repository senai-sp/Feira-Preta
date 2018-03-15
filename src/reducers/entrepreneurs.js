import * as actionsTypes from '../actions'

export function entrepreneurs(state = [], action) {
    switch(action.type) {
        case actionsTypes.LIST_ENTREPRENEUR:
            return [...action.entrepreneurs]
        default:
            return state
    }
}