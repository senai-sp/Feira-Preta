import { getDashboard } from '../api/dashboard'
export const SHOW_DASHBOARD = 'SHOW_DASHBOARD'

export function showDashboard() {
    return dispatch => {
        getDashboard()
            .then(response => {
                dispatch({
                    type: SHOW_DASHBOARD
                    ,
                    dashboard: response.data
                })
            })
    }
}