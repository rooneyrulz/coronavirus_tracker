import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';

// MATERIAL COMPONENTS
import TextField from '@material-ui/core/TextField';

// REDUX
import { connect } from 'react-redux';
import { getDeathData } from '../actions/report';

// COMPONENTS
import DataTable from '../components/DataTable';
import Spinner from '../layouts/Spinner';

const CoronavirusDeath = ({ report: { deathData, loading }, getDeathData }) => {
  const [data, setData] = useState({ cases: [] });

  useEffect(() => {
    getDeathData();

    setData({
      ...data,
      cases: loading ? [] : deathData
    });
  }, [getDeathData, loading]);

  const onChange = e => {
    const filterByCountry = deathData.filter(
      data =>
        data['Country/Region']
          .toString()
          .toLowerCase()
          .indexOf(e.target.value.toString().toLowerCase()) !== -1 && data
    );
    setData({ ...data, cases: filterByCountry });
    getDeathData();
  };

  const { cases } = data;

  return (
    <Fragment>
      <header className='d__flex'>
        <h1>Coronavirus Death Tolls Report</h1>
        <TextField
          onChange={e => onChange(e)}
          id='standard-basic'
          label='Search By Country..'
        />
      </header>
      <br />
      <hr />
      <br />
      <br />
      {loading ? <Spinner /> : <DataTable data={cases} isDeath={true} />}
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
