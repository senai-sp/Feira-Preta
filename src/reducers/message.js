import * as actionsTypes from '../actions'


const initialState = {
    message: {
        text: '',
        isError: false,
        warning: false
    }
}

export function message(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.ADD_FAILURE:
            return {
                ...state,
                message: {
                    text: action.text,
                    isError: true,
                    warning: true
                }
            }
        case actionsTypes.ADD_SUCCESS:
            return {
                ...state,
                message: {
                    text: action.text,
                    isError: false,
                    warning: true
                }
            }
        case actionsTypes.CLEAN_MESSAGE:
            return {
                ...state,
                message: {
                    text: null,
                    isError: false,
                    warning: false
                }
            }
        default:
            return state
    }
}