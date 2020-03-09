import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';

// MATERIAL COMPONENTS
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// REDUX
import { connect } from 'react-redux';
import {
  getConfirmedData,
  getDeathData,
  getRecoveredData
} from '../actions/report';

// COMPONENTS
import Spinner from '../layouts/Spinner';

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
    width: 500,
    margin: 'auto'
  }
}));

const Chart = ({
  report: { confirmedData, deathData, recoveredData, loading },
  getConfirmedData,
  getDeathData,
  getRecoveredData
}) => {
  const [chartData, setChartData] = useState([]);
  const [filteredConfirmedData, setFilteredConfirmedData] = useState([]);

  useEffect(() => {
    getConfirmedData();
    // getDeathData();
    // getRecoveredData();

    const filterData = confirmedData.filter(data => {
      delete data['Province/State'];
      delete data['Country/Region'];
      delete data['Lat'];
      delete data['Long'];
      return data;
    });

    // setFilteredConfirmedData(() =>
    //   loading
    //     ? []
    //     : [
    //         ...confirmedData.filter(data => {
    //           delete data['Province/State'];
    //           delete data['Country/Region'];
    //           delete data['Lat'];
    //           delete data['Long'];
    //           return data;
    //         })
    //       ]
    // );

    let total = 0;
    let count = 0;

    const mapped = filterData.map(obj => {
      if (
        obj[Object.keys(obj)[count]] !== null ||
        obj[Object.keys(obj)[count]] !== undefined
      ) {
        // console.log(obj[Object.keys(obj)[0]]);
        total += parseFloat(obj[Object.keys(obj)[count]]);

        setChartData(() => [...chartData]);
        count++;
      }
    });

    console.log(total);

    // fildatterData.forEach((val, key) => {
    //   // totalCount += Number(val[Object.keys(val)[key]]);
    //   console.log(Number(val[Object.keys(val)[key]]));
    // });
    // setChartData(() => (loading ? [] : [...chartData, totalCount]));
  }, [getConfirmedData, loading]);

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
    <div className={classes.root}>
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
      {loading ? (
        <Spinner />
      ) : (
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            Confirmed Cases {chartData}
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Death Tolls
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Recovered Cases
          </TabPanel>
        </SwipeableViews>
      )}
    </div>
  );
};

Chart.propTypes = {
  report: PropTypes.object.isRequired,
  getConfirmedData: PropTypes.func.isRequired,
  getDeathData: PropTypes.func.isRequired,
  getRecoveredData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  report: state.report
});

export default connect(mapStateToProps, {
  getConfirmedData,
  getDeathData,
  getRecoveredData
})(Chart);
