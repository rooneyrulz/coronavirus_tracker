import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getDeathData } from '../actions/report';

// IMPORT COMPONENTS
import DataTable from '../components/DataTable';

const CoronavirusDeath = ({ report: { deathData, loading }, getDeathData }) => {
  useEffect(() => {
    getDeathData();
  }, [getDeathData]);

  return (
    <Fragment>
      <header>
        <h1>Coronavirus Death Report</h1>
      </header>
      <hr />
      <br />
      <br />
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <DataTable data={deathData} isDeath={true} />
      )}
    </Fragment>
  );
};

CoronavirusDeath.propTypes = {
  report: PropTypes.object.isRequired,
  getDeathData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  report: state.report
});

export default connect(mapStateToProps, { getDeathData })(CoronavirusDeath);
