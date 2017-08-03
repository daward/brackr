import { combineReducers } from 'redux'
import contestants from './contestants'
import voting from './voting'
import totalVotes from './totalvotes'
import bracketHistory from './brackethistory'

const reducers = combineReducers({
  contestants,
  voting,
  totalVotes,
  bracketHistory
})

export default reducers