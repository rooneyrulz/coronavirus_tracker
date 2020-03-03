import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getConfirmedData } from '../actions/report';

// IMPORT COMPONENTS
import DataTable from '../components/DataTable';

const CoronavirusConfirmed = ({
  report: { confirmedData, loading },
  getConfirmedData
}) => {
  useEffect(() => {
    getConfirmedData();
  }, [getConfirmedData]);

  return (
    <div>
      <h1>Coronavirus Confirmed Cases</h1>
      <br />
      <br />
      {loading ? <h2>Loading...</h2> : <DataTable data={confirmedData} />}
    </div>
  );
};

CoronavirusConfirmed.propTypes = {
  report: PropTypes.object.isRequired,
  getConfirmedData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  report: state.report
});

export default connect(mapStateToProps, { getConfirmedData })(
  CoronavirusConfirmed
);
