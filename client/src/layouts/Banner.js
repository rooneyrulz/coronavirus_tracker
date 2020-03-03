import React from 'react';
import { withRouter } from 'react-router-dom';

// MATERIAL COMPONENTS
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Banner = ({
  totalConfirmedCount,
  totalDeathCount,
  totalRecoveredCount,
  history
}) => {
  const btnStyles = {
    margin: 10
  };
  return (
    <div className='Banner'>
      <div>
        <h1 className='heading'>Coronavirus Tracker Application</h1>
        <br />
        <p>
          This application lists out the current number of cases reported across
          the globe
        </p>
        <br />
        <Typography variant='h3' gutterBottom>
          {totalConfirmedCount}
        </Typography>
        <p>Total cases reported as of today</p>
        <br />
        <hr />
        <br />
        <br />
        <br />
        <Button
          style={btnStyles}
          onClick={() => history.push('/confirmed-cases')}
          size='large'
          color='primary'
          variant='contained'
        >
          Confirmed Report: <strong>{totalConfirmedCount}</strong>
        </Button>
        <Button
          style={btnStyles}
          onClick={() => history.push('/death-cases')}
          size='large'
          color='secondary'
          variant='contained'
        >
          Death Report: <strong>{totalDeathCount}</strong>
        </Button>
        <Button
          style={btnStyles}
          onClick={() => history.push('/recovered-cases')}
          size='large'
          color='default'
          variant='contained'
        >
          Recovered Report: <strong>{totalRecoveredCount}</strong>
        </Button>
      </div>
    </div>
  );
};

export default withRouter(Banner);
