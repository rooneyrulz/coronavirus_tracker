import React from 'react';

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
  lastUpdate
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
          />
          <Chip
            className='banner-label'
            label={`Death Tolls ${totalDeathCount}`}
            color='secondary'
          />
          <Chip
            className='banner-label label-recovered'
            label={`Recovered Cases ${totalRecoveredCount}`}
          />
        </div>
        <br />
        <br />
        <Chip
          className='label-lastupdated'
          label={`Last Update ${lastUpdate}`}
          color='default'
        />
      </div>
    </div>
  );
};

export default Banner;
