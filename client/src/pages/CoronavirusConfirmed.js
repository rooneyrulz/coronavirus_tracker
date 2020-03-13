import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

// MATERIAL COMPONENTS
import TextField from '@material-ui/core/TextField';

// REDUX
import { connect } from 'react-redux';
import { getConfirmedData } from '../actions/report';

// COMPONENTS
import DataTable from '../components/DataTable';
import Spinner from '../layouts/Spinner';

const CoronavirusConfirmed = ({
  report: { confirmedData, loading },
  getConfirmedData
}) => {
  const [data, setData] = useState({ cases: [] });

  useEffect(() => {
    getConfirmedData();

    setData({
      ...data,
      cases: loading ? [] : confirmedData
    });
  }, [getConfirmedData, loading]);

  const onChange = e => {
    const filterByCountry = confirmedData.filter(
      data =>
        data['Country/Region']
          .toString()
          .toLowerCase()
          .indexOf(e.target.value.toString().toLowerCase()) !== -1 && data
    );
    setData({ ...data, cases: filterByCountry });
    getConfirmedData();
  };

  const { cases } = data;

  return (
    <Fragment>
      <header className='d__flex page-header'>
        <h1 className='page-heading'>Coronavirus Confirmed Report</h1>
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
