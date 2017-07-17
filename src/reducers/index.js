import { combineReducers } from 'redux'
import contestants from './contestants'
import voting from './voting'
import totalVotes from './totalvotes'

const reducers = combineReducers({
  contestants,
  voting,
  totalVotes
})

export default reducers