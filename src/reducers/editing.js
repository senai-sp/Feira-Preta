import * as actionsTypes from '../actions'



const initialState = {
    editing: {
        isEditing: false
    }
}

export function editing(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.EDIT_ENTREPRENEUR:
            return {
                ...state,
                editing: {
                    isEditing: action.isEditing,
                    id: action.id,
                    usernameInstagram: action.usernameInstagram
                }
            }
        default:
            return state
    }
}