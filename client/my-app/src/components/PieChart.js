import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import { Pie } from 'react-chartjs-2';

function PieChart() {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    apiService.getPieChartData().then((data) => {
      console.log(data);
      setPieChartData(data);
    });
  }, []);
 
  const chartData = {
    labels: pieChartData.map(entry => entry.label),
    datasets: [{
      data: pieChartData.map(entry => entry.value),
      backgroundColor: [
        'rgba(12,181,91, 0.6)',
        'rgba(228, 242, 235, 0.6)',
        'rgba(155, 225, 187, 0.6)',
        'rgba(142, 206, 159, 0.6)',
        'rgba(61, 210, 131, 0.6)',
      ],
    }],
    
  };

  return (
    <div className='card col-lg-4'>
         <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
    </div>
  );
}

export default PieChart;
