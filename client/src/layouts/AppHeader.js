import React from 'react';
import { withRouter } from 'react-router-dom';

// MATERIAL COMPONENTS
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Coronavirus Tracker
          </Typography>
          <Button onClick={() => props.history.push('/')} color='inherit'>
            Dashboard
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(AppHeader);
