import './App.css';
import { useState } from "react";
import RaderChart from "./Chart";
import {API, graphqlOperation, Amplify, AmazonPersonalizeProvider} from "aws-amplify";
import {listFfmq2Data} from "./graphql/queries";
import {createFfmq2Data} from "./graphql/mutations";
import aws_exports from "./aws-exports";
import {withAuthenticator} from "@aws-amplify/ui-react";
import questionsData from "./Questions.json";

Amplify.configure(aws_exports)

function App({ signOut, user }) {
  const answers = ["いつも当てはまる", "しばしば当てはまる", "たまに当てはまる", "ほとんど当てはまらない", "全く当てはまらない"];
  const questions = questionsData;

  const [val, setVal] = useState("");
  const [transition, setTransition] = useState(true);
  const [answerList, setAnswerList] = useState([]);
  const [personId, setPersonId] = useState();
  const [chartDisplay, setChartDisplay] = useState(false);
  const [firstSecondTime, setFirstSecondTime] = useState("")
  const [questionState, setQuestionState] = useState(-5)
  const [lastAnswerList, setLastAnswerList] = useState(new Array(20).fill(2.5))

  console.log("AnswerList",answerList);
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

  const nextPage = (event)=>{
    setQuestionState(questionState+1);
  }

  function firstTime () {
    console.log("チェック")
    setFirstSecondTime("1回目")
    setTimeout(()=>{
      setTransition(true);
      setQuestionState(questionState+1);
      setVal("")
    },800);
  }

  const secondTime = async () => {
    
    setFirstSecondTime("2回目以降")
    const opt = {
      filter:{personId:{eq:personId}
    }};
    const values = await API.graphql(graphqlOperation(listFfmq2Data, opt))
    console.log("fetch data", values);
    console.log("fetch data2", values.data.listFfmq2Data.items);
    const lastData = values.data.listFfmq2Data.items;
    var mostRecentDate = "";
    var mostRecentId = 0;
    for (let i = 0; i < lastData.length; i++) {
      if (i===0){
        mostRecentDate = lastData[0].createdAt
        mostRecentId = 0
      }
      if (i>=1){
        if (lastData[i].createdAt > mostRecentDate){
          console.log("1(2)番目");
          mostRecentDate = lastData[i].createdAt;
          mostRecentId = i
        } else if (lastData[i].createdAt < mostRecentDate) {
          console.log("2(3)番目")
          mostRecentDate = mostRecentDate
          mostRecentId = mostRecentId
        }
      }}
    setLastAnswerList(JSON.parse(lastData[mostRecentId].Ffmq2Data))
    console.log("last FFMQ Score", lastAnswerList)
    setTimeout(()=>{
      setTransition(true);
      setQuestionState(questionState+2);
      setVal("")
    },800);
  }
  

    // const backPage = () =>{
  //   setQuestionState(questionState-1);
  // }

  const fixResult = () =>{
    console.log("ここで確認")
    API.graphql(graphqlOperation(createFfmq2Data, 
      {input:{personId:personId, Ffmq2Data:answerList}}))
      .then(()=>{console.log("送信成功")})
    setChartDisplay(true)
  }

  const returnFirst =()=>{
    setAnswerList([]);
    setQuestionState(-3);
    setChartDisplay(false)
  }
  // console.log(transition);
  // console.log("personID", personId);

  if (questionState===-5){
    return(
      <div className="App">
        <form>
          <h2>個人ID（4桁数字）の入力をお願いします</h2>
          <input
            className="inputText" type="number" max="9999" min="1000" step="1" placeholder="４桁の数字-手入力OK"
            onChange={(e) => setPersonId(e.target.value)}>
          </input>
          <p>確認ください: {personId}</p>
        </form>
        <h3>確認ができたら下記のボタンを押して次へ進んでください</h3>
        <button onClick={nextPage}>次へ</button>
      </div>
      )
    } else if (questionState===-4){
      return(
        <div className="App">
          <div>
           <h2>1回目ですか、それとも2回目以降でしょうか？</h2>
          </div>
          <div>
            <button style={{width:"80px",marginRight:"10px"}} onClick={firstTime}>1回目</button>
            <button style={{width:"80px"}} onClick={secondTime}>2回目以降</button>
            <p>{firstSecondTime}</p>
          </div>
        </div>
      )
    } else if (questionState===-3){
      return (
        <div className="App">
          <h4>あとでそれぞれプルダウンを作成する</h4>
          <p>1.職種（技術・エンジニア、営業・接客、専門職、管理）</p>
          <p>2.年齢（年代のみ）</p>
          <p>3.性別</p>
        <h3>入力が完了したら、下記のボタンを押して次へ進んでください</h3>
        <button onClick={nextPage}>次へ</button>
        </div>
      )
    } else if (questionState===-2){ 
      return (
        <div className="App">
          <h4>あとでそれぞれ選択式質問を作成する</h4>
          <h4>現在のあなたの状態を教えて下さい</h4>
          <p>1.肩こり・変頭痛がひどい</p>
          <p>2.人と会うのが辛い・億劫</p>
          <p>3.イライラすることが多い</p>
          <p>4.集中力が欠ける。ぼうっとすることが多い。</p>
          <p>5.眠れない、眠りが浅い</p>
        <h3>入力が完了したら、下記のボタンを押して次へ進んでください</h3>
        <button onClick={nextPage}>次へ</button>
        </div>
      )
    } else if (questionState===-1){
      return(
      <div className='App'>
        <h2>サーベイ開始! １問目へ</h2>
        <button onClick={nextPage}>開始</button>
      </div>
    )
    } else if (questionState===20 & chartDisplay===false){
      return(
      <div className="App">
        <h2>終了しました!お疲れ様でした</h2>
        <p> 下記の完了ボタンを押して下さい。チャートが表示されます</p>
        <button onClick={fixResult}>完了しました</button>
      </div>
    ) } else if (questionState===20 & chartDisplay===true)
    return(
    <>
      <div style={{margin:"auto",width:"500px"}}>
        <RaderChart answerListChart={[answerList, lastAnswerList]}/>
      </div>
      <div style={{textAlign:"center"}}>
        <button  onClick={returnFirst}>最初に戻る</button>
      </div>
    </>
      )
    else if (transition===true){
        return (
          <div className="App">
            <div>
            <p>{questions[questionState].question}</p>
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
        if (questionState<19){
        return(
          <>
          <h3 className="App">{questionState+2} 問目へ</h3>
          </>
        )} else if (questionState===19){
          return(
          <h3 className="App">結果の表示</h3>
        )};
      }
  }
// export default withAuthenticator(App);
export default App;
