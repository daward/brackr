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
import Router from './router'

import { loadRound } from './actions/voting'
import { loadHistory } from './actions/brackethistory'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
let store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
);

const router = new Router(store);

router.add({
  route: "/",
  component: () => (<BracketNav />)
})

router.add({
  route: "/create",
  component: () => (<Contestants />)
})

router.add({
  route: "/bracket/:bracketId/endround",
  component: (data) => (<EndRound data={data} />),
  onEnter: (data) => store.dispatch(loadRound(data.bracketId))
})

router.add({
  route: "/bracket/:bracketId",
  component: (data) => (<VotingPage data={data} />),
  onEnter: (data) => store.dispatch(loadRound(data.bracketId))
})

router.add({
  route: "/brackets",
  component: data => (<BracketHistory/>),
  onEnter: () => store.dispatch(loadHistory())
})

router.renderApp(window.location.pathname); //render page the first time 

registerServiceWorker();
