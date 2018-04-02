import * as actionsTypes from '../actions'

export function dashboard(state = {}, action) {
    switch(action.type) {
        case actionsTypes.SHOW_DASHBOARD:
            return {...action.dashboard}
        default:
            return state
    }
}