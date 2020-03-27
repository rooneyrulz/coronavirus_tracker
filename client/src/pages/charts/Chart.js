import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Spinner from '../../layouts/Spinner';

const Chart = ({
  data,
  loading,
  confirmed = false,
  death = false,
  recovered = false
}) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: []
  });

  // 8TH DAT
  const filterByEigthDay = data.map(obj =>
    Number(obj[Object.keys(obj)[Object.keys(obj).length - 8]])
  );

  const totalByEigthDay = filterByEigthDay.reduce(
    (sum, num) => (sum += num),
    filterByEigthDay[0]
  );

  // 7TH DAT
  const filterBySeventhDay = data.map(obj =>
    Number(obj[Object.keys(obj)[Object.keys(obj).length - 7]])
  );

  const totalBySeventhDay = filterBySeventhDay.reduce(
    (sum, num) => (sum += num),
    filterBySeventhDay[0]
  );

  // 6TH DAT
  const filterBySixthDay = data.map(obj =>
    Number(obj[Object.keys(obj)[Object.keys(obj).length - 6]])
  );

  const totalBySixthDay = filterBySixthDay.reduce(
    (sum, num) => (sum += num),
    filterBySixthDay[0]
  );

  // 5TH DAT
  const filterByFifthDay = data.map(obj =>
    Number(obj[Object.keys(obj)[Object.keys(obj).length - 5]])
  );

  const totalByFifthDay = filterByFifthDay.reduce(
    (sum, num) => (sum += num),
    filterByFifthDay[0]
  );

  // 4TH DAT
  const filterByFourthDay = data.map(obj =>
    Number(obj[Object.keys(obj)[Object.keys(obj).length - 4]])
  );

  const totalByFourthDay = filterByFourthDay.reduce(
    (sum, num) => (sum += num),
    filterByFourthDay[0]
  );

  // 3RD DAT
  const filterByThirdDay = data.map(obj =>
    Number(obj[Object.keys(obj)[Object.keys(obj).length - 3]])
  );

  const totalByThirdDay = filterByThirdDay.reduce(
    (sum, num) => (sum += num),
    filterByThirdDay[0]
  );

  // 2TH DAT
  const filterBySecondDay = data.map(obj =>
    Number(obj[Object.keys(obj)[Object.keys(obj).length - 2]])
  );

  const totalBySecondDay = filterBySecondDay.reduce(
    (sum, num) => (sum += num),
    filterBySecondDay[0]
  );

  // TODAY
  const filterByToDay = data.map(obj =>
    Number(obj[Object.keys(obj)[Object.keys(obj).length - 1]])
  );

  const totalByToDay = filterByToDay.reduce(
    (sum, num) => (sum += num),
    filterByToDay[0]
  );

  useEffect(() => {
    // SET STATE
    setChartData({
      ...chartData,
      labels:
        loading || data.length < 1
          ? []
          : [
              Object.keys(data[0])[Object.keys(data[0]).length - 7],
              Object.keys(data[0])[Object.keys(data[0]).length - 6],
              Object.keys(data[0])[Object.keys(data[0]).length - 5],
              Object.keys(data[0])[Object.keys(data[0]).length - 4],
              Object.keys(data[0])[Object.keys(data[0]).length - 3],
              Object.keys(data[0])[Object.keys(data[0]).length - 2],
              Object.keys(data[0])[Object.keys(data[0]).length - 1]
            ],
      datasets:
        loading || data.length < 1
          ? []
          : [
              {
                label: 'last seven days',
                fill: true,
                lineTension: 0.1,
                backgroundColor: confirmed
                  ? 'rgba(75, 119, 190,0.4)'
                  : death
                  ? 'rgba(210, 77, 87, 0.4)'
                  : 'rgba(38, 166, 91, 0.4)',
                borderColor: confirmed
                  ? '#4B77BE'
                  : death
                  ? '#D24D57'
                  : '#26A65B',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: confirmed
                  ? '#4B77BE'
                  : death
                  ? '#D24D57'
                  : '#26A65B',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 2,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: confirmed
                  ? 'rgba(75, 119, 190,0.4)'
                  : death
                  ? 'rgba(210, 77, 87, 0.4)'
                  : 'rgba(38, 166, 91, 0.4)',
                pointHoverBorderColor: confirmed
                  ? '#4B77BE'
                  : death
                  ? '#D24D57'
                  : '#26A65B',
                pointHoverBorderWidth: 2,
                pointRadius: 3,
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
  }, [loading, data]);

  return loading || data.length < 1 ? <Spinner /> : <Line data={chartData} />;
};

export default Chart;
