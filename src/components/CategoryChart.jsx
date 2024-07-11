import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const CategoryChart = ({ transactions }) => {
  console.log('Transactions received in Chart:', transactions);

  const [chartData, setChartData] = useState({ series: [], options: {} });

  useEffect(() => {
    if (transactions && transactions.length > 0) {
      const categoryData = transactions.reduce((acc, transaction) => {
        const { category, amount } = transaction;
        if (acc[category]) {
          acc[category] += parseFloat(amount);
        } else {
          acc[category] = parseFloat(amount);
        }
        return acc;
      }, {});

      const categories = Object.keys(categoryData);
      const data = Object.values(categoryData);

      setChartData({
        series: [{ name: 'Amount', data }],
        options: {
          chart: {
            type: 'bar',
            height: 400
          },
          xaxis: {
            categories,
            labels: {
              style: {
                colors: categories.map(() => '#FF5733'),
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
              }
            }
          },
          yaxis: {
            labels: {
              style: {
                colors: ['#33FF57'],
                fontSize: '16px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
              }
            }
          },
          title: {
            text: 'Category-wise Transactions',
            align: 'center',
            style: {
              color: '#b342f5',
              fontSize: '18px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 'bold'
            }
          }
        }
      });
    }
  }, [transactions]);

  if (!transactions) {
    return <p>Loading transactions...</p>;
  }

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={400} />
    </div>
  );
};

export default CategoryChart;
