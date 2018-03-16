import { combineReducers } from 'redux'
import { features } from './features'
import { entrepreneurs } from './entrepreneurs'
import { isLoading } from './isLoading'
import { message } from './message'
import { editing } from './editing'

const reducer = combineReducers({
  features,
  entrepreneurs,
  isLoading,
  message,
  editing
})
   
export default reducer