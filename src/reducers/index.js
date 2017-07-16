import { combineReducers } from 'redux'
import contestants from './contestants'
import voting from './voting'

const reducers = combineReducers({
  contestants,
  voting
})

export default reducers