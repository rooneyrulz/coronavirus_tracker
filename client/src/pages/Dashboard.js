import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import {
  getConfirmedData,
  getDeathData,
  getRecoveredData
} from '../actions/report';

const Dashboard = ({
  report: { loading, confirmedData, deathData, recoveredData },
  getConfirmedData,
  getDeathData,
  getRecoveredData
}) => {
  useEffect(() => {
    getConfirmedData();
    getDeathData();
    getRecoveredData();
  }, [getConfirmedData, getDeathData, getRecoveredData]);

  // FIND TOTAL CONFIRMED CASES
  const filterTotalConfirmedCases = confirmedData.map(data =>
    Number(data[Object.keys(data)[Object.keys(data).length - 1]])
  );

  const totalConfirmedCount = filterTotalConfirmedCases.reduce(
    (sum, num) => (sum += num),
    filterTotalConfirmedCases[0]
  );

  // FIND TOTAL DEATH CASES
  const filterTotalDeathCases = deathData.map(data =>
    Number(data[Object.keys(data)[Object.keys(data).length - 1]])
  );

  const totalDeathCount = filterTotalDeathCases.reduce(
    (sum, num) => (sum += num),
    filterTotalDeathCases[0]
  );

  // FIND TOTAL RECOVERED CASES
  const filterTotalRecoveredCases = recoveredData.map(data =>
    Number(data[Object.keys(data)[Object.keys(data).length - 1]])
  );

  const totalRecoveredCount = filterTotalRecoveredCases.reduce(
    (sum, num) => (sum += num),
    filterTotalRecoveredCases[0]
  );

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <h1>Coronavirus Tracker Application</h1>
      <br />
      <p>
        <strong>Total Confirmed Report</strong>:{' '}
        <span>{totalConfirmedCount}</span>
      </p>
      <br />
      <p>
        <strong>Total Death Tolls</strong>: <span>{totalDeathCount}</span>
      </p>
      <br />
      <p>
        <strong>Total Recovered Report</strong>:{' '}
        <span>{totalRecoveredCount}</span>
      </p>
    </div>
  );
};

Dashboard.propTypes = {
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
})(Dashboard);
