import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const AddChart = ({ transactions }) => {
  const amount = transactions.map((transaction) => Number(transaction.amount));
  const total = amount.reduce((acc, item) => acc + item, 0);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0);
  const expenses = amount
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0);

  const [chartData, setChartData] = useState({
    options: {
      labels: ['Total Balance', 'Income', 'Expenses'],
      dataLabels: {
        style: {
          colors: ['#FF5733', '#33FF57', '#3357FF']
        }
      },
      legend: {
        labels: {
          colors: ['#FF5733', '#33FF57', '#3357FF']
        }
      }
    },
    series: [total, income, expenses],
  });

  return (
    <div className="pie">
      <Chart options={chartData.options} series={chartData.series} type="pie" width="500" />
    </div>
  );
};

export default AddChart;
