import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getConfirmedData } from '../actions/report';

const CoronavirusConfirmed = ({
  report: { confirmedData, loading },
  getConfirmedData
}) => {
  useEffect(() => {
    getConfirmedData();
  }, [getConfirmedData]);

  const content = loading ? (
    <h2>Loading...</h2>
  ) : (
    confirmedData.map(data => <p>{data['Province/State']}</p>)
  );

  return (
    <div>
      <h1>Coronavirus Confirmed Cases</h1>
      <br />
      <br />
      {content}
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
