import React from 'react';
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import Dashboard from '../../pages/Dashboard';
import CoronavirusConfirmed from '../../pages/CoronavirusConfirmed';
import CoronavirusDeath from '../../pages/CoronavirusDeath';
import CoronavirusRecovered from '../../pages/CoronavirusRecovered';
import ChartContainer from '../../pages/charts/ChartContainer';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/confirmed-cases' component={CoronavirusConfirmed} />
      <Route exact path='/death-cases' component={CoronavirusDeath} />
      <Route exact path='/recovered-cases' component={CoronavirusRecovered} />
      <Route exact path='/charts' component={ChartContainer} />
    </Switch>
  );
};

export default Routes;
