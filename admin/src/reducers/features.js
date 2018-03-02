import * as actionsTypes from '../actions'
import Feature from '../feature'

const initialState = {
    features: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case actionsTypes.ADD_FEATURE:
            const newFeature = new Feature(action.link)
            return {
                features: state.features.concat(newFeature)
            }
        default:
            return state
    }
}



// const initialState = {
//     url: 'https://redux.js.org/basics/actions'
// }

// const reducer = (state, action) => {
//     switch (action.type) {
//         case actionsTypes.ADD_FEATURE:
//             const newPost = new Post(action.link)
//             return estadoAtual.concat(novaNota)
//         default:
//             return state
//     }
// }

// export default reducer