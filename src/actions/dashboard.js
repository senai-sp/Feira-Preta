import { getDashboard } from '../api/dashboard'
import { addFailure } from './api'
export const SHOW_DASHBOARD = 'SHOW_DASHBOARD'

export function showDashboard() {
    return dispatch => {
        getDashboard()
            .then(response => {
                dispatch({
                    type: SHOW_DASHBOARD,
                    dashboard: response.data
                })
            })
            .catch((error) => {
                if (error.message === 'Network Error') {
                    dispatch(addFailure('Não foi possível recuperar os dados de avaliação da feira. Verifique sua conexão com a Internet e tente novamente'))
                } else {
                    dispatch(addFailure(error.response.data))
                }
            })
    }
}