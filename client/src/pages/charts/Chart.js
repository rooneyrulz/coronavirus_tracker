import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

// MATERIAL COMPONENTS
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// CHART COMPONENTS
import ConfirmedDataChart from './ConfirmedDataChart';
import DeathDataChart from './DeathDataChart';
import RecoveredDataChart from './RecoveredDataChart';

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '800px',
    margin: 'auto'
  }
}));

const Chart = () => {
  const classes = useStyles({
    root: {
      flexGrow: 1
    }
  });
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={`${classes.root} chart-container`}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          aria-label='full width tabs example'
        >
          <Tab label='Confirmed Cases' {...a11yProps(0)} />
          <Tab label='Death Tolls' {...a11yProps(1)} />
          <Tab label='Recovered Cases' {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <br />
      <br />
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <ConfirmedDataChart />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <DeathDataChart />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <RecoveredDataChart />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
};

export default Chart;
