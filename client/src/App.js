import React, { Fragment } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import './App.css';

// REDUX
import { Provider } from 'react-redux';
import store from './store';

// COMPONENTS & LAYOUTS
import AppHeader from './layouts/AppHeader';
import AppFooter from './layouts/AppFooter';
import Routes from './components/routes/Routes';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <header>
            <AppHeader />
          </header>
          <br />
          <br />
          <Container maxWidth='md'>
            <Switch>
              <Routes />
            </Switch>
          </Container>
          <br />
          <br />
          <footer>
            <AppFooter />
          </footer>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
