import * as actionsTypes from '../actions'


const initialState = {
    features: []
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case actionsTypes.LIST_FEATURES:
            return {
                features: state.features.concat(action.features)
            }
        default:
            return state
    }
}