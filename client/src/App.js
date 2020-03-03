import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import './App.css';

// REDUX
import { Provider } from 'react-redux';
import store from './store';

// COMPONENTS
import AppHeader from './layouts/AppHeader';
import Dashboard from './pages/Dashboard';
import CoronavirusConfirmed from './pages/CoronavirusConfirmed';
import CoronavirusDeath from './pages/CoronavirusDeath';
import CoronavirusRecovered from './pages/CoronavirusRecovered';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <header>
            <AppHeader />
          </header>
          <Container maxWidth='md'>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route
                exact
                path='/confirmed-cases'
                component={CoronavirusConfirmed}
              />
              <Route exact path='/death-cases' component={CoronavirusDeath} />
              <Route
                exact
                path='/recovered-cases'
                component={CoronavirusRecovered}
              />
            </Switch>
          </Container>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
