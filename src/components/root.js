import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import BracketNav from '../containers/bracketnav'
import Contestants from '../containers/contestants'
import MatchVote from '../containers/matchvote'
import { loadRound } from '../actions/voting'
import { Router, Route, browserHistory } from 'react-router'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path="/" component={BracketNav} />
      <Route path="/create" component={Contestants} />
      <Route path="/bracket/(:filter)" component={MatchVote} onEnter={ params => {
        store.dispatch(loadRound(params.params.filter))
      }} />
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root