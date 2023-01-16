import { Chart, registerables } from "chart.js";
import { Radar } from 'react-chartjs-2';

Chart.register(...registerables)

function RaderChart() {
    const data = {
        labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5'],
        datasets: [
          {
            label: '# of Votes',
            data: [3, 3, 3, 3, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      };
    return <Radar data={data} />;
  }

export default RaderChart;