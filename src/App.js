import './App.css';
import { useState } from "react";
import RaderChart from "./Chart";
import {API, graphqlOperation, Amplify} from "aws-amplify";
import {listFfmq2Data} from "./graphql/queries";
import {createFfmq2Data} from "./graphql/mutations";
import awsmobile from "./aws-exports";
// import {withAuthenticator} from "@aws-amplify/ui-react";

Amplify.configure(awsmobile)

function App() {
  const answers = ["ほとんどあてはまる", "少しあてはまる", "ほとんどあてはまらない", "全く当てはまらない"];
  const questions = ["1.瞑想は毎日行いますか?", "2.瞑想すると気分が良くなりますか？",
                    "3.イライラすることが多いですか？", "4.自分が怒っている時にその感情に気付きますか？",
                    "5.不安なことが多いですか？"]

  const [val, setVal] = useState("");
  const [transition, setTransition] = useState(true);
  const [answerList, setAnswerList] = useState([]);
  const [personId, setPersonId] = useState();

  console.log(answerList);
  var score = 0;
  const answerToScore = ((ans) => {
    if (ans === answers[0]){
      score = 1;
    } else if (ans === answers[1]){
      score = 2; 
    } else if (ans === answers[2]){
      score = 3;
    } else if (ans === answers[3]){
      score = 4;
    } else if (ans === answers[4]){
      score = 5;
    }
    setAnswerList([...answerList, score]);
  });

  const handleChange = ((e) => {
    setAnswerList([...answerList, e.target.value]);
    setVal(e.target.value)
    answerToScore(e.target.value)
    setTimeout(()=>{
    setTransition(false);
      },1000);
    setTimeout(()=>{
        setTransition(true);
        setQuestionState(questionState+1);
        setVal("")
      },1500);
    });

  const [questionState, setQuestionState] = useState(-1)
  const [lastAnswerList, setLastAnswerList] = useState("[0,0,0,0,0]")
  console.log("lastAnswerList", lastAnswerList)

  const nextPage = ()=>{
    setQuestionState(questionState+1);
    const opt = Object.assign({},{
      filter:{personId:{eq:personId}},
      sort: {
        direction: "desc",
        field: "createdAt"
      }
    });
    API.graphql(graphqlOperation(listFfmq2Data, opt)).then(values => {
      console.log(values);
      const data = values.data.listFfmq2Data.items;
      var mostRecentDate = ""
      var mostRecentId = 0
      for (let i = 0; i < data.length; i++) {
        console.log("iii", i)
        if (i===0){
          mostRecentDate = data[1].createdAt
          mostRecentId = 1
        }
        console.log("lenght",data.length)
        if (i>=1){
          if (data[i].createdAt > data[i-1].createdAt){
            console.log("1番目");
            mostRecentDate = data[i].createdAt;
            mostRecentId = i
          } else if (data[i].createdAt < data[i-1].createdAt) {
            console.log("2番目")
            mostRecentDate = data[i-1].createdAt
            mostRecentId = i-1
          }
        }}
      console.log("recentdate:",mostRecentDate)
      console.log("recentId", mostRecentId)
      setLastAnswerList(data[mostRecentId].ffmqScore)
    })
    };
    console.log("LastFFMQ:",lastAnswerList);

    // const backPage = () =>{
  //   setQuestionState(questionState-1);
  // }

  const fixResult = () =>{
    API.graphql(graphqlOperation(createFfmq2Data, 
      {input:{personId:personId, ffmqScore:answerList}}))
      .then(()=>{alert("送信しました")})
    setAnswerList([]);
    setQuestionState(-1);
    console.log(val)
  }
  console.log(transition);
  console.log("personID", personId);

  if (questionState<0){
    return(
      <div className="App">
        <form>
          <h2>個人ID（4桁数字）の入力をお願いします</h2>
          <input 
            className="inputText" type="number" max="9999" min="1000" step="1" placeholder="４桁の数字-手入力OK"
            onChange={(e) => setPersonId(e.target.value)}>
            </input>
        </form>
        <h2>サーベー開始! １問目へ</h2>
            <button onClick={nextPage}>開始</button>
        {/* <div>
            <button onClick={graphqlCreating}>データ送信</button>
        </div> */}
      </div>
    )
  } else if (questionState===5){
    return(
    <div className="App">
      <h2>終了しました!お疲れ様でした</h2>
      <button
        onClick={fixResult}
      >最初に戻る</button>
      <div style={{margin:"auto",width:"500px"}}>
        <RaderChart answerListChart={[answerList, JSON.parse(lastAnswerList)]}/>
      </div>
    </div>
  )}
  else if (transition===true){
    // return(
    //   <div className="App">
    //     <div>
    //     <p>{questions[questionState]}</p>
    //     <input id={answers[0]} type="radio" value={answers[0]} onChange={handleChange} checked={answers[0]=== val}/>
    //     {answers[0]}
    //     <input id={answers[1]} type="radio" value={answers[1]} onChange={handleChange} checked={answers[1]=== val}/>
    //     <input id={answers[2]} type="radio" value={answers[2]} onChange={handleChange} checked={answers[2]=== val}/>
    //     <input id={answers[3]} type="radio" value={answers[3]} onChange={handleChange} checked={answers[3]=== val}/>
    //     </div>
    //     <p>答えは{val}</p>
    //   </div>
    // )
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
        <p>選んだ答えは、{val}</p>
        </div>
      );
    } else {
      if (questionState<=3){
      return(
        <>
        <h3 className="App">{questionState+2} 問目へ</h3>
        </>
      )} else if (questionState===4){
        return(
        <h3 className="App">結果の表示</h3>
      )};
    }
}
// export default withAuthenticator(App);
export default App;
