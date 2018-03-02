import * as actionsTypes from '../actions'


const initialState = {
    features: []
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case actionsTypes.ADD_FEATURE:
            return {
                features: state.features.concat(action.posts)
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