import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getRecoveredData } from '../actions/report';

// IMPORT COMPONENTS
import DataTable from '../components/DataTable';

const CoronavirusRecovered = ({
  report: { recoveredData, loading },
  getRecoveredData
}) => {
  useEffect(() => {
    getRecoveredData();
  }, [getRecoveredData]);

  return (
    <Fragment>
      <header>
        <h1>Coronavirus Recovered Report</h1>
      </header>
      <hr />
      <br />
      <br />
      {loading ? <h2>Loading...</h2> : <DataTable data={recoveredData} />}
    </Fragment>
  );
};

CoronavirusRecovered.propTypes = {
  report: PropTypes.object.isRequired,
  getRecoveredData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  report: state.report
});

export default connect(mapStateToProps, { getRecoveredData })(
  CoronavirusRecovered
);
