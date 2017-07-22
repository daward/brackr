import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import BracketNav from '../containers/bracketnav'
import Contestants from '../containers/contestants'
import VotingPage from '../components/votingpage'
import { loadRound, checkRound } from '../actions/voting'
import { Router, Route, browserHistory } from 'react-router'

const Root = ({ store }) => {
  store.subscribe(() => {
    let refresh = () => {
      if (store.getState().voting.roundOver) {
        if (store.getState().totalVotes.nextUpdate < Date.now()) {
          store.dispatch(checkRound(store.getState().voting.bracketId))
        }
        setTimeout(refresh, 10000);
      };
    }
    refresh();
  })
  return (
    <Provider store={store}>
      <Router history={browserHistory} >
        <Route path="/" component={BracketNav} />
        <Route path="/create" component={Contestants} />
        <Route path="/bracket/(:filter)" component={VotingPage} onEnter={pparams => {
          store.dispatch(loadRound(pparams.params.filter))
        }} />
      </Router>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root