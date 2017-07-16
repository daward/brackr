import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import reducers from './reducers'
import thunkMiddleware from 'redux-thunk'

import { createStore, applyMiddleware } from 'redux'
import Root from './components/root'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
let store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
  )
);

const styles = {
  container: {
    textAlign: 'center',
    background: 'black'
  },
};

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div style={styles.container}>
      <Root store={store} />
    </div>
  </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
