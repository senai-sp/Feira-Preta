import * as actionsTypes from '../actions'


const initialState = {
    entrepreneurs: [],
    error: ''
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case actionsTypes.ADD_ENTREPRENEUR:
            return {
                ...state,
            }
        case actionsTypes.ADD_ENTREPRENEUR_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case actionsTypes.ADD_ENTREPRENEUR_SUCCESS:
            return {
                ...state,
            }
        default:
            return state
    }
}