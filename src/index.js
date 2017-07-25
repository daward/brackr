import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'

import { createStore, applyMiddleware } from 'redux'
import Root from './components/root'
import 'semantic-ui-css/semantic.min.css'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
let store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
);


ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'));
registerServiceWorker();
