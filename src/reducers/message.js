import * as actionsTypes from '../actions'


const initialState = {
    message: {
        text: '',
        type: ''
    }
}

export function message(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.ADD_FAILURE:
            return {
                ...state,
                message: {
                    text: action.payload.text,
                    type: action.payload.type
                }
            }
        case actionsTypes.ADD_SUCCESS:
            return {
                ...state,
                message: {
                    text: action.payload.text,
                    type: action.payload.type
                }
            }
        case actionsTypes.CLEAN_MESSAGE:
            return {
                ...state,
                message: {
                    text: null,
                    type: null
                }
            }
        default:
            return state
    }
}