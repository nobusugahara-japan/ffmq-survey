import './App.css';
import { useState } from "react";

function App() {
  const answers = ["ほとんどあてはまる", "少しあてはまる", "ほとんどあてはまらない", "全く当てはまらない"];
  const questions = ["瞑想は毎日行いますか?", "瞑想すると気分が良くなりますか？",
                    "イライラすることが多いですか？", "自分が怒っている時にその感情に気付きますか？",
                    "不安なことが多いですか？"]
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
