import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import 'normalize.css'; // Note this

import Navigation from './components/Navigation/Navigation';
import store from './store/configureStore';
import Index from './routes/index/Index';
import Admin from './routes/admin/Index';
import Login from './routes/login/Index';
import SignUp from './routes/signUp/Index';
import CreateEvent from './routes/createEvent/Index';
import OrganizerTerms from './routes/organizerTerms/Index';
import UserTerms from './routes/userTerms/Index';
import ContactUs from './routes/contactUs/Index';
import AboutUs from './routes/aboutUs/Index';

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
            <Navigation />
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signUp" component={SignUp} />
              <Route exact path="/createEvent" component={CreateEvent} />
              <Route exact path="/organizerTerms" component={OrganizerTerms} />
              <Route exact path="/userTerms" component={UserTerms} />
              <Route exact path="/contactUs" component={ContactUs} />
              <Route exact path="/aboutUs" component={AboutUs} />
            </Switch>
          </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
