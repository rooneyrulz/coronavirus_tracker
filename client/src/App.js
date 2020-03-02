import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import './App.css';

// COMPONENTS
import AppHeader from './layouts/AppHeader';
import Dashboard from './components/Dashboard';
import CoronavirusConfirmed from './components/CoronavirusConfirmed';
import CoronavirusDeath from './components/CoronavirusDeath';
import CoronavirusRecovered from './components/CoronavirusRecovered';

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <header>
          <AppHeader />
        </header>
        <Container maxWidth='sm'>
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
  );
};

export default App;
