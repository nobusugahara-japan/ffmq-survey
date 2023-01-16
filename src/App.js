import './App.css';
import { useState } from "react";

function App() {
  const answers = ["アイテム１", "アイテム２", "アイテム３", "アイテム４"];
  const questions = ["今日の気分はどうですか?", "明日の予定は何ですか？"]
  const [val, setVal] = useState("アイテム1");
  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const [questionState, setQuestionState] = useState(0)

  const nextPage = ()=>{
    setQuestionState(questionState+1);
  }
  const backPage = () =>{
    setQuestionState(questionState-1);
  }
  return (
    <div className="App">
      <p>{questions[questionState]}</p>
      <div>
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
      <div className="App">
        <div className="inner">
          <button onClick={backPage}>戻る</button>
          <button onClick={nextPage}>進む</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
