import React from 'react';
import { withRouter } from 'react-router-dom';

// MATERIAL COMPONENTS
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5)
    }
  }
}));

const Banner = ({
  totalConfirmedCount,
  totalDeathCount,
  totalRecoveredCount,
  history
}) => {
  const classes = useStyles();

  return (
    <div className='Banner'>
      <div>
        <h1 className='heading'>Coronavirus Tracker</h1>
        <br />
        <p>
          This application lists out the current number of cases reported across
          the globe
        </p>
        <br />
        <hr />
        <br />
        <div className={classes.root}>
          <Chip
            className='banner-label'
            label={`Confirmed Cases ${totalConfirmedCount}`}
            color='primary'
            variant='outlined'
          />
          <Chip
            className='banner-label'
            label={`Death Tolls ${totalDeathCount}`}
            color='secondary'
            variant='outlined'
          />
          <Chip
            className='banner-label'
            label={`Recovered Cases ${totalRecoveredCount}`}
            variant='outlined'
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Banner);
