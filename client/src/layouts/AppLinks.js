import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';

const AppLinks = props => {
  return (
    <Fragment>
      <Button onClick={() => props.history.push('/')} color='inherit'>
        Dashboard
      </Button>
      <Button
        onClick={() => props.history.push('/confirmed-cases')}
        color='inherit'
      >
        Confirmed Report
      </Button>
      <Button
        onClick={() => props.history.push('/death-cases')}
        color='inherit'
      >
        Death Report
      </Button>
      <Button
        onClick={() => props.history.push('/recovered-cases')}
        color='inherit'
      >
        Recovered Report
      </Button>
      <Button onClick={() => props.history.push('/charts')} color='inherit'>
        Visualizations
      </Button>
    </Fragment>
  );
};

export default withRouter(AppLinks);
