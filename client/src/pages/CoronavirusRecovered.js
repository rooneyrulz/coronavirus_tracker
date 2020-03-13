import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

// MATERIAL COMPONENTS
import TextField from '@material-ui/core/TextField';

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
  const [data, setData] = useState({ cases: [] });

  useEffect(() => {
    getRecoveredData();

    setData({
      ...data,
      cases: loading ? [] : recoveredData
    });
  }, [getRecoveredData, loading]);

  const onChange = e => {
    const filterByCountry = recoveredData.filter(
      data =>
        data['Country/Region']
          .toString()
          .toLowerCase()
          .indexOf(e.target.value.toString().toLowerCase()) !== -1 && data
    );
    setData({ ...data, cases: filterByCountry });
    getRecoveredData();
  };

  const { cases } = data;

  return (
    <Fragment>
      <header className='d__flex page-header'>
        <h1 className='page-heading'>Coronavirus Recovered Report</h1>
        <TextField
          className='search-field'
          onChange={e => onChange(e)}
          id='standard-basic'
          label='Search By Country..'
        />
      </header>
      <br />
      <hr />
      <br />
      <br />
      {loading ? <Spinner /> : <DataTable data={cases} />}
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
