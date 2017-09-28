import React from 'react';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import 'semantic-ui-css/semantic.min.css'

import BracketNav from './containers/bracketnav'
import Contestants from './containers/contestants'
import VotingPage from './components/votingpage'
import EndRound from "./containers/endround"
import BracketHistory from "./containers/brackethistory"
import Round from "./containers/round"
import Router from './router'
import { userData } from './clients/userdata'

import { loadRound } from './actions/voting'
import { loadBracketHistory } from './actions/brackethistory'
import { loadContestantGroupHistory } from './actions/contestantgrouphistory'
import { loadTournament } from './actions/tournament'
import { loadContestantGroup, startNewContestantGroup } from './actions/contestantgroups'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
let store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
);

const router = new Router({
  store, login: () => userData.get()
});

router.add({
  route: "/",
  component: () => (<BracketNav />),
  dispatchOnEnter: () => dispatch => dispatch({ type: "LOAD_USER" })
})

router.add({
  route: "/create",
  component: () => (<Contestants />),
  dispatchOnEnter: [
    () => dispatch => dispatch({ type: "LOAD_USER" }),
    data => startNewContestantGroup(data)
  ]
})

router.add({
  route: "/create/:contestantGroupId",
  component: data => (<Contestants data={data} />),
  dispatchOnEnter: [
    () => dispatch => dispatch({ type: "LOAD_USER" }),
    data => loadContestantGroup({ contestantGroupId: data.contestantGroupId })
  ]
})

router.add({
  route: "/bracket/:bracketId/endround/:roundNumber",
  component: (data) => (<EndRound data={data} />),
  dispatchOnEnter: [
    () => dispatch => dispatch({ type: "LOAD_USER" }),
    data => loadRound({ bracketId: data.bracketId, roundNumber: data.roundNumber })
  ]
})

router.add({
  route: "/bracket/:bracketId/tournament/:tournamentId",
  component: (data) => (<Round data={data} />),
  dispatchOnEnter: [
    () => dispatch => dispatch({ type: "LOAD_USER" }),
    data => loadTournament(data)
  ]
})

router.add({
  route: "/bracket/:bracketId",
  component: (data) => (<VotingPage data={data} />),
  dispatchOnEnter: [
    () => dispatch => dispatch({ type: "LOAD_USER" }),
    data => loadRound({ bracketId: data.bracketId })
  ]
})

router.add({
  route: "/brackets",
  component: data => (<BracketHistory />),
  dispatchOnEnter: [
    () => dispatch => dispatch({ type: "LOAD_USER" }),
    (data) => loadBracketHistory(data.login.id),
    (data) => loadContestantGroupHistory(data.login.id)]
})

router.renderApp(window.location.pathname); //render page the first time 

registerServiceWorker();
