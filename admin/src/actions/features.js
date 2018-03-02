export const ADD_FEATURE = 'ADD_FEATURE'


export function addFeature(link) {
    return {
        type: ADD_FEATURE,
        link
    }
}

// export function addPost(link) {
//     return dispatch => {
//         postLink(link)
//             .then(response => dispatch({
//                 type: ADD_FEATURE,
//                 link
//             }))
//             .catch(error => {
//                 console.log('Ocorreu um erro', error)
//             })
//     }
    // return {
    // type: 'ADD_TODO',
    // link
    // }
// }
// export function adicionaNota(titulo, texto) {
//     return dispatch => {
//         postNote(titulo, texto)
//             .then(response => dispatch({
//                 type: ADICIONA_NOTA, 
//                 titulo, 
//                 texto,
//                 posicao: response.data.posicao
//             }))
//             .catch(error => {
//                 console.log('Ocorreu um erro', error)
//             })
//     }
// }
// export function adicionaNota(link) {
//     return dispatch => {
//         postNote(link)
//             .then(response => dispatch({
//                 type: ADD_FEATURE, 
//                 link
//             }))
//             .catch(error => {
//                 console.log('Ocorreu um erro', error)
//             })
//     }
// }