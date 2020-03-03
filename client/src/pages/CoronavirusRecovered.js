import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getRecoveredData } from '../actions/report';

// COMPONENTS
import DataTable from '../components/DataTable';
import Spinner from '../layouts/Spinner';

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
      <br />
      <hr />
      <br />
      <br />
      {loading ? <Spinner /> : <DataTable data={recoveredData} />}
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
