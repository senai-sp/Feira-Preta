import * as actionsTypes from '../actions'



const initialState = {
    editing: {
        isEditing: false,
        id: ''
    }
}

export function editing(state = initialState, action) {
    switch (action.type) {
        case actionsTypes.EDIT_ENTREPRENEUR:
            return {
                ...state,
                editing: {
                    isEditing: true,
                    id: action.id
                }
            }
        default:
            return state
    }
}