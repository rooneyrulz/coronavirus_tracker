import React from 'react';

// MATERIAL COMPONENTS
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import AppLinks from './AppLinks';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const AppHeader = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className='main-toolbar'>
          <Typography variant='h6' className={classes.title}>
            Coronavirus Tracker
          </Typography>
          <div>
            <AppLinks />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppHeader;
