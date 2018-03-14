import { combineReducers } from 'redux'
import { featuresReducer } from './features'
import { entrepreneursReducer } from './entrepreneurs'

const reducer = combineReducers({
    featuresReducer,
    entrepreneursReducer
})
   
export default reducer