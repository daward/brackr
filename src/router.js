import React from 'react'
import Route from 'route-parser'
import _ from 'lodash';
import history from "./history"
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';

class Router {
  constructor(store) {
    this.routes = [];
    this.store = store;
    // Listen for changes to the current location. 
    this.unlisten = history.listen((location, action) => {
      this.renderApp(location.pathname);
    })
  }

  renderApp(path) {
    ReactDOM.render(
      <Provider store={this.store}>
        {this.route(path)}
      </Provider>,
      document.getElementById('root')
    );
  }

  add({ route, component, onEnter, dispatchOnEnter }) {
    this.routes.push({ template: new Route(route), component, onEnter, dispatchOnEnter });
  }

  route(path) {
    let route = _.find(this.routes, route => !!route.template.match(path));
    let data = route.template.match(path);
    if(route.onEnter) {
      route.onEnter(data);
    }
    if(route.dispatchOnEnter) {
      this.store.dispatch(route.dispatchOnEnter(data))
    }
    return route.component(data);
  }
}

export default Router;