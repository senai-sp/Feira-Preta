import { combineReducers } from 'redux'
import { features } from './features'
import { entrepreneurs } from './entrepreneurs'
import { isLoading } from './isLoading'
import { message } from './message'

const reducer = combineReducers({
  features,
  entrepreneurs,
  isLoading,
  message
})
   
export default reducer