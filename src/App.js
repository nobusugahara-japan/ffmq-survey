import './App.css';
import { useState } from "react";

function App() {
  const answers = ["ほとんどあてはまる", "少しあてはまる", "ほとんどあてはまらない", "全く当てはまらない"];
  const questions = ["瞑想は毎日行いますか?", "瞑想すると気分が良くなりますか？",
                    "イライラすることが多いですか？", "自分が怒っている時にその感情に気付きますか？",
                    "不安なことが多いですか？"]

  const [val, setVal] = useState("瞑想は毎日行いますか");
  const [transition, setTransition] = useState(true);

  const handleChange = ((e) => {
    setVal(e.target.value);
    setTransition(false);
    setTimeout(()=>{
        setTransition(true);
        setQuestionState(questionState+1);
        setVal("")
      },500)
    });

  const [questionState, setQuestionState] = useState(-1)

  const nextPage = ()=>{
    setQuestionState(questionState+1);
  }
  const backPage = () =>{
    setQuestionState(questionState-1);
  }

  const fixResult = () =>{
    console.log(val)
  }

  console.log(transition);

  if (questionState<0){
    return(
      <div className="App">
        <h2>サーベーを開始してください</h2>
            <button onClick={nextPage}>進む</button>
      </div>
    )
  } else if (questionState===5){
    return(
    <div className="App">
      <h2>確定してよろしいですか？</h2>
      <button
        onClick={fixResult}
      >確定</button>
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
          <div className="App">
            <div className="inner">
              <button onClick={backPage}>戻る</button>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <h3 className="App">{questionState+2} 問目へ</h3>
      )
    }
}
export default App;
