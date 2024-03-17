import React, { useEffect, useRef, useState } from 'react';
import { Chart } from 'chart.js/auto';

import apiService from '../services/apiService';

function Graph() {
  const chartRef = useRef(null);
  const [graphData, setGraphData] = useState([]);
  const chartInstance = useRef(null); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiService.getGraphData();
        setGraphData(result);
      } catch (error) {
        console.error('Error fetching graph data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (chartRef.current && graphData.length > 0) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: graphData.map(item => item.x),
          datasets: [
            {
              label: 'My First Dataset',
              data: graphData.map(item => item.y),
              // backgroundColor: ['rgba(105, 0, 132, .2)'],
              fill: false,
              borderColor: ['skyblue'],
              borderWidth: 2,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, 
        },
      });
    }
  }, [graphData]);

  return (
    <div className='card  col-lg-7'>
      <canvas ref={chartRef} />
    </div>
  );
}

export default Graph;