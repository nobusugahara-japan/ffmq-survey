import { Chart, registerables } from "chart.js";
import { Radar } from 'react-chartjs-2';

Chart.register(...registerables)

const RaderChart = (props) => {
    console.log("チャート",props.answerListChart);
    const data = {
        labels: ['感覚の目覚め', '感情の保留', '判断の保留', '心の描写', '行動の意識化'],
        datasets: [
          {
            label: '今回',
            data: props.answerListChart[0],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: '前回',
            data: props.answerListChart[1],
            backgroundColor: 'rgba(60, 179, 113, 0.2)',
            borderColor: 'rgba(60, 179, 113, 1)',
            borderWidth: 1,
          },
        ],
      };
    const options = {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        r: {
            angleLines: {
                display: true
            },
            suggestedMin: 0,
            suggestedMax: 5
        }
    }
      }
    // console.log("props",props.answerListChart[1])
    const nums = props.answerListChart[1]
    var checkLastTimeResult = nums.reduce((sum, num) => sum + num, 0)
    console.log("props",nums.reduce((sum, num) => sum + num, 0));

    if (checkLastTimeResult === 0) {
      return (
        <>
          <Radar 
            data = {data}
            options = {options}
            />
          <p>前回の結果はありません</p>
          </>
      )
    } else {
      return <Radar 
              data = {data}
              options = {options}
              />;
    }
  }

export default RaderChart;