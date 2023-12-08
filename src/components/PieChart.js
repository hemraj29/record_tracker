import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const PieChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Initialize the chart when the component mounts
    const ctx = chartRef.current.getContext('2d');
    const chartInstance = new Chart(ctx, {
      type: 'pie',
      data: data.genderData,
      options: {
        responsive: true, // Allow chart to be responsive
        maintainAspectRatio: false, // Allow aspect ratio to be adjusted
        plugins: {
          legend: {
            position: 'bottom', // Customize legend position
          },
        },
      },
    });

    // Cleanup and destroy the chart when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [data]);

  return (
    <div>
      <h2>Employment Type Distribution</h2>
      <div style={{ width: '150px', height: '200px' }}>
        <canvas ref={chartRef} />
      </div>
    </div>
  );
};

export default PieChart;
