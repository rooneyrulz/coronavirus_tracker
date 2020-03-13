import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

// REDUX
import { connect } from 'react-redux';
import { getDeathData } from '../../actions/report';

// COMPONENTS
import Spinner from '../../layouts/Spinner';

const DeathDataChart = ({ report: { deathData, loading }, getDeathData }) => {
  const [chartData, setChartData] = useState({
    labels: ['7th', '6th', '5th', '4th', '3rd', '2nd', 'today'],
    datasets: []
  });

  useEffect(() => {
    getDeathData();

    // 7TH DAT
    const filterBySeventhDay = deathData.map(obj =>
      Number(obj[Object.keys(obj)[Object.keys(obj).length - 7]])
    );

    const totalBySeventhDay = filterBySeventhDay.reduce(
      (sum, num) => (sum += num),
      filterBySeventhDay[0]
    );

    // 6TH DAT
    const filterBySixthDay = deathData.map(obj =>
      Number(obj[Object.keys(obj)[Object.keys(obj).length - 6]])
    );

    const totalBySixthDay = filterBySixthDay.reduce(
      (sum, num) => (sum += num),
      filterBySixthDay[0]
    );

    // 5TH DAT
    const filterByFifthDay = deathData.map(obj =>
      Number(obj[Object.keys(obj)[Object.keys(obj).length - 5]])
    );

    const totalByFifthDay = filterByFifthDay.reduce(
      (sum, num) => (sum += num),
      filterByFifthDay[0]
    );

    // 4TH DAT
    const filterByFourthDay = deathData.map(obj =>
      Number(obj[Object.keys(obj)[Object.keys(obj).length - 4]])
    );

    const totalByFourthDay = filterByFourthDay.reduce(
      (sum, num) => (sum += num),
      filterByFourthDay[0]
    );

    // 3RD DAT
    const filterByThirdDay = deathData.map(obj =>
      Number(obj[Object.keys(obj)[Object.keys(obj).length - 3]])
    );

    const totalByThirdDay = filterByThirdDay.reduce(
      (sum, num) => (sum += num),
      filterByThirdDay[0]
    );

    // 2TH DAT
    const filterBySecondDay = deathData.map(obj =>
      Number(obj[Object.keys(obj)[Object.keys(obj).length - 2]])
    );

    const totalBySecondDay = filterBySecondDay.reduce(
      (sum, num) => (sum += num),
      filterBySecondDay[0]
    );

    // TODAY
    const filterByToDay = deathData.map(obj =>
      Number(obj[Object.keys(obj)[Object.keys(obj).length - 1]])
    );

    const totalByToDay = filterByToDay.reduce(
      (sum, num) => (sum += num),
      filterByToDay[0]
    );

    // SET STATE
    setChartData({
      ...chartData,
      datasets: loading
        ? []
        : [
            {
              label: 'last seven days',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(255,0,0,0.4)',
              borderColor: 'rgba(255,0,0,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(255,0,0,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(255,0,0,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [
                totalBySeventhDay,
                totalBySixthDay,
                totalByFifthDay,
                totalByFourthDay,
                totalByThirdDay,
                totalBySecondDay,
                totalByToDay
              ]
            }
          ]
    });
  }, [getDeathData, loading]);

  return loading ? <Spinner /> : <Line data={chartData} />;
};

DeathDataChart.propTypes = {
  report: PropTypes.object.isRequired,
  getDeathData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  report: state.report
});

export default connect(mapStateToProps, {
  getDeathData
})(DeathDataChart);
