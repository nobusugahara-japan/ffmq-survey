import { Chart, registerables } from "chart.js";
import { Radar } from 'react-chartjs-2';
import questionsData from "./Questions.json";

Chart.register(...registerables)

const RaderChart = (props) => {

    console.log("チャート",props.answerListChart);

    const reverseFunc =(questionsData, answers, i) =>{
      if (questionsData[i].reverse===true){
        return Math.abs(answers[i]-6);
      } else if (questionsData[i].reverse===false){
        return answers[i];
    }}

    const makeScore = (answers)=>{
      const scores = [0,0,0,0,0]
      for (let i=0; i < answers.length; i++){
        if (questionsData[i].classfication=="体験の観察"){
          console.log("ここ5", reverseFunc(questionsData, answers, i))
          scores[0] = scores[0]+reverseFunc(questionsData, answers, i)
        } else if (questionsData[i].classfication=="反応しない態度"){
          scores[1] = scores[1]+reverseFunc(questionsData, answers, i)
        } else if (questionsData[i].classfication=="判断しない態度"){
          scores[2] = scores[2]+reverseFunc(questionsData, answers, i)
        } else if (questionsData[i].classfication=="描写と表現"){
          scores[3] = scores[3]+reverseFunc(questionsData, answers, i)
        } else if (questionsData[i].classfication=="意識した行動"){
          scores[4] = scores[4]+reverseFunc(questionsData, answers, i)
      }
    }
    const scores2 = scores.map(score=>Math.round(score/3*10)/10)
    return scores2
  }


    console.log(props.answerListChart[0])
    const thisTimeScore = makeScore(props.answerListChart[0]);
    console.log("今回スコア", thisTimeScore)

    const lastTimeScore = makeScore(props.answerListChart[1]);



    console.log("前回スコア", lastTimeScore)
    


    const dataSecond = {
        labels: ['感覚の目覚め', '感情の保留', '判断の保留', '心の描写', '行動の意識化'],
        datasets: [
          {
            label: '今回',
            data: thisTimeScore,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: '前回',
            data: lastTimeScore,
            backgroundColor: 'rgba(60, 179, 113, 0.2)',
            borderColor: 'rgba(60, 179, 113, 1)',
            borderWidth: 1,
          },
        ],
      };
    const optionsSecond = {
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

    const dataFirst = {
        labels: ['感覚の目覚め', '感情の保留', '判断の保留', '心の描写', '行動の意識化'],
        datasets: [
          {
            label: '今回',
            data: thisTimeScore,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      };
    const optionsFirst = {
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

    if (props.firstSecondTime === "1回目") {
      return (
        <>
          <Radar 
            data = {dataFirst}
            options = {optionsFirst}
            />
          <p style={{textAlign:"center"}}>前回の結果はありません</p>
          </>
      )
    } else {
      return <Radar 
              data = {dataSecond}
              options = {optionsSecond}
              />;
    }
  }

export default RaderChart;