import { combineReducers } from 'redux'
import contestants from './contestants'
import voting from './voting'
import totalVotes from './totalvotes'
import bracketHistory from './brackethistory'
import tournament from './tournament'

const reducers = combineReducers({
  contestants,
  voting,
  totalVotes,
  bracketHistory,
  tournament
})

export default reducers