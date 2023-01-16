import './App.css';
import { useState } from "react";
import RaderChart from "./Chart";

function App() {
  const answers = ["ほとんどあてはまる", "少しあてはまる", "ほとんどあてはまらない", "全く当てはまらない"];
  const questions = ["1.瞑想は毎日行いますか?", "2.瞑想すると気分が良くなりますか？",
                    "3.イライラすることが多いですか？", "4.自分が怒っている時にその感情に気付きますか？",
                    "5.不安なことが多いですか？"]

  const [val, setVal] = useState("瞑想は毎日行いますか");
  const [transition, setTransition] = useState(true);

  const handleChange = ((e) => {
    setVal(e.target.value);
    setTimeout(()=>{
    setTransition(false);
      },500);
    setTimeout(()=>{
        setTransition(true);
        setQuestionState(questionState+1);
        setVal("")
      },1000);
    });

  const [questionState, setQuestionState] = useState(-1)

  const nextPage = ()=>{
    setQuestionState(questionState+1);
  }
  const backPage = () =>{
    setQuestionState(questionState-1);
  }

  const fixResult = () =>{
    setQuestionState(-1);
    console.log(val)
  }

  console.log(transition);

  if (questionState<0){
    return(
      <div className="App">
        <h2>サーベー開始! １問目へ</h2>
            <button onClick={nextPage}>開始</button>
      </div>
    )
  } else if (questionState===5){
    return(
    <div className="App">
      <h2>終了しました!お疲れ様でした</h2>
      <button
        onClick={fixResult}
      >最初に戻る</button>
    <RaderChart/>
    </div>
  )}
  else if (transition===true){
      return (
        <div className="App">
          <div>
          <p>{questions[questionState]}</p>
            {answers.map((answer) => {
              return (
                <div key={answer}>
                  <input
                    id={answer}
                    type="radio"
                    value={answer}
                    onChange={handleChange}
                    checked={answer === val}
                  />
                  <label htmlFor={answer}>{answer}</label>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      if (questionState<=3){
      return(
        <h3 className="App">{questionState+2} 問目へ</h3>
      )} else if (questionState===4){
        return(
        <h3 className="App">結果の表示</h3>
      )};
    }
}
export default App;
