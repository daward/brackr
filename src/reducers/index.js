import { combineReducers } from 'redux'
import contestants from './contestants'
import voting from './voting'
import totalVotes from './totalvotes'
import bracketHistory from './brackethistory'
import contestantGroupHistory from './contestantgrouphistory'
import tournament from './tournament'
import currentUser from './currentuser'

const reducers = combineReducers({
  contestants,
  voting,
  totalVotes,
  bracketHistory,
  tournament,
  contestantGroupHistory,
  currentUser
})

export default reducers