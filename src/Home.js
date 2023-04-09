import './App.css';
import { useEffect, useState } from "react";
import RaderChart from "./Chart";
import {API, graphqlOperation, Amplify, AmazonPersonalizeProvider} from "aws-amplify";
import {listFfmq2Data} from "./graphql/queries";
import {createFfmq2Data} from "./graphql/mutations";
import aws_exports from "./aws-exports";
import {withAuthenticator} from "@aws-amplify/ui-react";
import questionsData from "./Questions.json";
import Attribute from './Attribute';
import Conditions from "./Conditions";
import {listCompanyNames} from "./graphql/queries";

Amplify.configure(aws_exports)

function Home({ signOut, user }) {
  const answers = ["いつも当てはまる", "しばしば当てはまる", "たまに当てはまる", "ほとんど当てはまらない", "全く当てはまらない"];
  const questions = questionsData;

  const [val, setVal] = useState("");
  const [transition, setTransition] = useState(true);
  const [answerList, setAnswerList] = useState([]);
  const [personId, setPersonId] = useState();
  const [chartDisplay, setChartDisplay] = useState(false);
  const [firstSecondTime, setFirstSecondTime] = useState("")
  const [questionState, setQuestionState] = useState(-5)
  const [lastAnswerList, setLastAnswerList] = useState([])
  const [attributeData, setAttributeData] = useState(["選択なし","選択なし","選択なし"])
  const [conditionData, setConditionData] = useState(["選択なし","選択なし","選択なし"])
  const [customerName, setCustomerName] = useState("表示されていない場合、管理者にご連絡ください")

  const getCustomerData = async () => {
    const values = await API.graphql(graphqlOperation(listCompanyNames))
    console.log("CompName", values);
    const newCustomerName = values.data.listCompanyNames.items[0].companyName
    setCustomerName(newCustomerName)
}

useEffect(()=>{
    getCustomerData()
},[])

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
    console.log("ここが知りたい", e.target.value)
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
    event.preventDefault();
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
    console.log("fetch data2", values.data.listFfmq2Data.items.length);
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
    if (values.data.listFfmq2Data.items.length===0){
      alert('前回のデータがありません。今回が1回目か、あるいはIDの入力を間違っていませんか？IDの入力を間違っている場合は最初からやり直してください');
    } else{
    setLastAnswerList(JSON.parse(lastData[mostRecentId].Ffmq2Data))
    setTimeout(()=>{
      setTransition(true);
      setQuestionState(questionState+2);
      setVal("")
      },800);
    }
  }

  console.log("last FFMQ Score", lastAnswerList)
  

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
    setQuestionState(-5);
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
            id="person_id_input"
            name = "personIdInput"
            className="inputText" type="number" max="9999" min="1000" step="1" placeholder="４桁の数字-手入力OK"
            onChange={(e) => setPersonId(e.target.value)}>
          </input>
          <p style={{fontSize:"12px"}}>確認ください→ {personId}</p>
        </form>
        <h3>下記の組織名の確認をお願いします</h3>
        <p style={{fontSize:"16px"}}>{customerName}</p>
        <h3>確認ができたら下記のボタンを押して次へ進んでください</h3>
        <button onClick={nextPage} name="personIdNext">次へ</button>
      </div>
      )
    } else if (questionState===-4){
      return(
        <div className="App">
          <div>
           <h2>1回目ですか、それとも2回目以降でしょうか？</h2>
          </div>
          <div>
            <button id="first_time_button" name="1stTime" style={{width:"80px",marginRight:"10px"}} onClick={firstTime}>1回目</button>
            <button id="second_time_button" name="2stTime" style={{width:"80px",marginRight:"10px"}} onClick={secondTime}>2回目</button>
            <p>{firstSecondTime}</p>
          </div>
        <p>最初からやり直す場合は下記のボタンを押してください</p>
        <button  onClick={returnFirst}>最初に戻る</button>
        </div>
      )
    } else if (questionState===-3){
      return(
      <Attribute
      personId = {personId}
      attributeData={attributeData}
      setAttributeData = {setAttributeData}
      questionState = {questionState}
      setQuestionState = {setQuestionState}
      customerName = {customerName}
      />
      )
    } else if (questionState===-2){ 
      return (
      <Conditions
      personId = {personId}
      conditionData={conditionData}
      setConditionData = {setConditionData}
      questionState = {questionState}
      setQuestionState = {setQuestionState}
      customerName = {customerName}
        />
      )
    } else if (questionState===-1){
      return(
      <div className='App'>
        <h2>サーベイ</h2>
        <h4>下記注意事項です。始める前に目を通してください</h4>
        {/* <div style={{textAlign:"center"}}> */}
        <div style={{fontSize:"14px", textAlign:"center"}}>次ページから始まる質問に、あまり考えることなく直感的にお答えください。</div>
        <div style={{fontSize:"14px"}}>選択すると1秒後に自動的にページが推移します。</div>
        <div style={{fontSize:"14px"}}>もしやり直す場合は最後のページまで進んで最初に戻ってください。</div>
        <div style={{fontSize:"14px"}}>これはテストではなく、何が良い、悪いはありませんので、お気軽にお答えください。</div>
        {/* </div> */}
        <h2>では、サーベイを開始します。</h2>
        <button onClick={nextPage} name="surveyStart">開始</button>
      </div>
    )
    } else if (questionState===20 & chartDisplay===false){
      return(
      <div className="App">
        <h2>終了しました!お疲れ様でした</h2>
        <p> 下記の完了ボタンを押して下さい。チャートが表示されます</p>
        <button id="completion_button" onClick={fixResult}>完了しました</button>
      </div>
    ) } else if (questionState===20 & chartDisplay===true)
    return(
    <>
      <div style={{margin:"auto",width:"500px"}}>
        <RaderChart 
            answerListChart={[answerList, lastAnswerList]}
            firstSecondTime = {firstSecondTime}
            />
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
              {answers.map((answer, index) => {
                return (
                  <div key={answer}>
                    <input
                      id={`question_${questionState}_answer_${index}`}
                      type="radio"
                      value={answer}
                      onChange={handleChange}
                      checked={answer === val}
                    />
                    <label htmlFor={`question_${questionState}_answer_${index}`}>{answer}</label>
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
export default Home;
