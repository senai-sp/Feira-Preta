import { combineReducers } from 'redux'
import { features } from './features'
import { entrepreneurs } from './entrepreneurs'
import { dashboard } from './dashboard'
import { isLoading } from './isLoading'
import { message } from './message'

const reducer = combineReducers({
  features,
  entrepreneurs,
  dashboard,
  isLoading,
  message
})
   
export default reducer