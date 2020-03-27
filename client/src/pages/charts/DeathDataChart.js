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
    labels: [],
    datasets: []
  });

  useEffect(() => {
    getDeathData();

    // 7TH DAT
    const filterBySeventhDayDeathData =
      !loading &&
      deathData.map(obj =>
        Number(obj[Object.keys(obj)[Object.keys(obj).length - 7]])
      );

    const totalBySeventhDayDeathData = filterBySeventhDayDeathData.reduce(
      (sum, num) => (sum += num),
      filterBySeventhDayDeathData[0]
    );

    // 6TH DAT
    const filterBySixthDayDeathData =
      !loading &&
      deathData.map(obj =>
        Number(obj[Object.keys(obj)[Object.keys(obj).length - 6]])
      );

    const totalBySixthDayDeathData = filterBySixthDayDeathData.reduce(
      (sum, num) => (sum += num),
      filterBySixthDayDeathData[0]
    );

    // 5TH DAT
    const filterByFifthDayDeathData =
      !loading &&
      deathData.map(obj =>
        Number(obj[Object.keys(obj)[Object.keys(obj).length - 5]])
      );

    const totalByFifthDayDeathData = filterByFifthDayDeathData.reduce(
      (sum, num) => (sum += num),
      filterByFifthDayDeathData[0]
    );

    // 4TH DAT
    const filterByFourthDayDeathData =
      !loading &&
      deathData.map(obj =>
        Number(obj[Object.keys(obj)[Object.keys(obj).length - 4]])
      );

    const totalByFourthDayDeathData = filterByFourthDayDeathData.reduce(
      (sum, num) => (sum += num),
      filterByFourthDayDeathData[0]
    );

    // 3RD DAT
    const filterByThirdDayDeathData =
      !loading &&
      deathData.map(obj =>
        Number(obj[Object.keys(obj)[Object.keys(obj).length - 3]])
      );

    const totalByThirdDayDeathData = filterByThirdDayDeathData.reduce(
      (sum, num) => (sum += num),
      filterByThirdDayDeathData[0]
    );

    // 2TH DAT
    const filterBySecondDayDeathData =
      !loading &&
      deathData.map(obj =>
        Number(obj[Object.keys(obj)[Object.keys(obj).length - 2]])
      );

    const totalBySecondDayDeathData = filterBySecondDayDeathData.reduce(
      (sum, num) => (sum += num),
      filterBySecondDayDeathData[0]
    );

    // TODAY
    const filterByTodayDeathData =
      !loading &&
      deathData.map(obj =>
        Number(obj[Object.keys(obj)[Object.keys(obj).length - 1]])
      );

    const totalByToDayDeathData = filterByTodayDeathData.reduce(
      (sum, num) => (sum += num),
      filterByTodayDeathData[0]
    );

    // SET STATE
    setChartData({
      ...chartData,
      labels:
        loading || deathData.length < 1
          ? []
          : [
              Object.keys(deathData[0])[Object.keys(deathData[0]).length - 7],
              Object.keys(deathData[0])[Object.keys(deathData[0]).length - 6],
              Object.keys(deathData[0])[Object.keys(deathData[0]).length - 5],
              Object.keys(deathData[0])[Object.keys(deathData[0]).length - 4],
              Object.keys(deathData[0])[Object.keys(deathData[0]).length - 3],
              Object.keys(deathData[0])[Object.keys(deathData[0]).length - 2],
              Object.keys(deathData[0])[Object.keys(deathData[0]).length - 1]
            ],
      datasets:
        loading || deathData.length < 1
          ? []
          : [
              {
                label: 'last seven days',
                fill: true,
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
                  totalBySeventhDayDeathData,
                  totalBySixthDayDeathData,
                  totalByFifthDayDeathData,
                  totalByFourthDayDeathData,
                  totalByThirdDayDeathData,
                  totalBySecondDayDeathData,
                  totalByToDayDeathData
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
