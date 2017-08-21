import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import 'normalize.css'; // Note this

import store from './store/configureStore';
import Index from './routes/index/Index';

const history = createBrowserHistory();

const globalStyles = {
  background: 'white',
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div style={globalStyles}>
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
