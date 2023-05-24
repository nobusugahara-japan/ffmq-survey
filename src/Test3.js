import './App.css';
import { useEffect, useState } from "react";
import RaderChart from "./Chart";
import {API, graphqlOperation, Auth, Amplify} from "aws-amplify";
import {listFfmq2Data} from "./graphql/queries";
import {createFfmq2Data} from "./graphql/mutations";
import aws_exports from "./aws-exports";
import questionsData from "./Questions.json";
import Attribute from './Attribute';
import Conditions from "./Conditions";
import {listCompanyNames} from "./graphql/queries";
import OptionToggle from "./OptionToggle"; // ToggleOptionコンポーネントをインポート
import { ChakraProvider,Flex, Button,Box, FormControl, FormLabel, Input, Text,VStack,Stack} from "@chakra-ui/react";

Amplify.configure(aws_exports)

function Home({ signOut, user }) {

  const answers = [
    {id:"1", label:"いつも当てはまる"},
    {id:"2", label: "しばしば当てはまる"}, 
    {id:"3", label: "たまに当てはまる"}, 
    {id:"4", label: "ほとんど当てはまらない"},
    {id:"5", label: "全く当てはまらない"}
];
  const questions = questionsData;

  const [val, setVal] = useState("");
  const [transition, setTransition] = useState(true);
  const [answerList, setAnswerList] = useState([]);
  const [personId, setPersonId] = useState();
  const [chartDisplay, setChartDisplay] = useState(false);
  const [firstSecondTime, setFirstSecondTime] = useState("")
  const [questionState, setQuestionState] = useState(-5)
  const [lastAnswerList, setLastAnswerList] = useState([])
  const [conditionData, setConditionData] = useState(["選択なし","選択なし","選択なし"])
  const [customerName, setCustomerName] = useState("表示されていない場合、管理者にご連絡ください")

  const getCustomerData = async () => {
    const values = await API.graphql(graphqlOperation(listCompanyNames))
    console.log("CompName", values);
     // ソートして最新のデータを取得する
    const sortedItems = values.data.listCompanyNames.items.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    // 最新のデータを取得する
    const latestItem = sortedItems[0];
    const newCustomerName = latestItem.companyName;

    setCustomerName(newCustomerName);
  }

  const [selectedOption, setSelectedOption] = useState(answers[0].id);

    useEffect(()=>{
        getCustomerData()
    },[])

  console.log("AnswerList",answerList);

  const handleOptionSelect = ((option) => {
    console.log("スコア", option.id)
    setAnswerList([...answerList, Number(option.id)]);
    setSelectedOption(option);
    setVal(option.label)
    // answerToScore(option.label)
    setTimeout(()=>{
    setTransition(false);
      },1000);
    setTimeout(()=>{
        setTransition(true);
        setQuestionState(questionState+1);
        setVal("")
        setSelectedOption(answers[0].id)
      },1500);
    });

  const nextPage = (event)=>{
    setQuestionState(questionState+1);
  }

  function firstTime () {
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

  const fixResult = () =>{
    console.log("送信")
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


  if (questionState===-5){
    return(
    <ChakraProvider>
      <div className="App">
        <Box as="form">
        <Flex marginTop="25px" alignItems="center" justifyContent="center">
          <Text fontSize="16px">
            所属組織名 : 
          </Text>
          <Text fontSize="25px" fontWeight="bold" marginLeft="10px" color="#23A6BA">
            {customerName}
          </Text>
        </Flex>
            <Text fontSize="25px" marginTop="125px">個人ID（4桁数字）の入力をお願いします</Text>
                <FormControl>
                    <FormLabel htmlFor="personIdInput" srOnly>個人ID入力</FormLabel>
                    <Input
                    name="personIdInput"
                    type="number"
                    max="9999"
                    min="1000"
                    step="1"
                    placeholder="４桁の数字-半角"
                    onChange={(e) => setPersonId(e.target.value)}
                    width="200px"
                    textAlign={"center"}
                    fontSize={"18px"}
                    marginTop={"50px"}
                    marginBottom={"10px"}
                    />
                </FormControl>
            <Text fontSize="16px">入力した個人ID : <span style={{color:"#23A6BA",fontSize:"20px"}}>{personId}</span></Text>
        </Box>
        {/* <Text fontSize="xl" fontWeight="bold" marginTop="100px">確認ができたら下記のボタンを押して次へ進んでください</Text> */}
        <Button 
            onClick={nextPage} 
            name="personIdNext"
            size="lg"
            fontSize="md"
            fontWeight="bold"
            color="white" // テキストの色を変更する場合
            bg="#23A6BA" // 色コードで背景色を指定
            _hover={{ bg: "#2BB1C5" }} // 色コードでホバー時の背景色を指定
            _active={{ bg: "#1E8A9D" }} // 色コードでアクティブ時の背景色を指定
            marginTop="200px"
            borderRadius="0"
             >次へ</Button>
      </div>
      </ChakraProvider>
      )
    } else if (questionState===-4){
      return(
        <div className='App'>
            <Box>
              <Text fontSize="25px" marginTop="200px">
                1回目ですか、それとも2回目以降でしょうか？
              </Text>
            </Box>
            <Box>
            <Button
                onClick={firstTime}
                name="1stTime"
                size="lg"
                marginRight="20px"
                marginTop="30px"
                fontSize="25px"
                color="white"
                bg="#23A6BA"
                _hover={{ bg: "#2BB1C5" }}
                _active={{ bg: "#1E8A9D" }}
                borderRadius="0"
                border="none" 
                paddingTop="10px"
                paddingRight="15px"
                paddingBottom="10px"
                paddingLeft="15px"
              >
                1回目
              </Button>
                <Button
                  name="2ndTime"
                  size="lg"
                  onClick={secondTime}
                  marginLeft="50px"
                  marginTop="30px"
                  fontSize="25px"
                  color="white"
                  bg="#23A6BA"
                  _hover={{ bg: "#2BB1C5" }}
                  _active={{ bg: "#1E8A9D" }}
                  borderRadius="0"
                  border="none" 
                  paddingTop="10px"
                  paddingRight="15px"
                  paddingBottom="10px"
                  paddingLeft="15px"
                >
                  2回目以降
                </Button>
                {/* <Text fontSize="xl" fontWeight="bold" marginTop="10px">
                  {firstSecondTime}
                </Text> */}
              </Box>
          </div>
      )
    } else if (questionState===-3){
      return(
      <Attribute
      personId = {personId}
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
        <Text fontSize="25px" marginBottom="100px" marginTop="100px">マインドフルネスの程度測定を始めます</Text>
        <Text fontSize="15px">下記注意事項です。始める前に目を通してください</Text>
        <Text fontSize="15px">質問数は全部で15問です。</Text>
        {/* <div style={{textAlign:"center"}}> */}
        <Text fontSize="15px">次ページから始まる質問に、あまり考えることなく直感的にお答えください。</Text>
        <Text fontSize="15px">選択すると1秒後に自動的にページが推移します。</Text>
        <Text fontSize="15px">もしやり直す場合は最後のページまで進んで最初に戻ってください。</Text>
        <Text fontSize="15px" marginBottom="100px">これはテストではなく、何が良い、悪いはありませんので、お気軽にお答えください。</Text>
        {/* </div> */}
        <Button
          onClick={nextPage}
          size="lg"
          fontSize="20px"
          paddingTop="10px"
          paddingRight="15px"
          paddingBottom="10px"
          paddingLeft="15px"
          color="white"
          bg="#23A6BA"
          _hover={{ bg: "#2BB1C5" }}
          _active={{ bg: "#1E8A9D" }}
          marginTop={"30px"}
          marginBottom={"30px"}
          borderRadius="0"
          border="none"
          >開始
        </Button>
      </div>
    )
    } else if (questionState===15 & chartDisplay===false){
      return(
      <div className="App">
        <Text fontSize="25px" marginTop="180px" marginBottom="50px">終了しました！お疲れ様でした</Text>
        <Button
          onClick={fixResult}
          size="lg"
          fontSize="20px"
          paddingTop="10px"
          paddingRight="15px"
          paddingBottom="10px"
          paddingLeft="15px"
          color="white"
          bg="#23A6BA"
          _hover={{ bg: "#2BB1C5" }}
          _active={{ bg: "#1E8A9D" }}
          marginTop={"30px"}
          marginBottom={"30px"}
          borderRadius="0"
          border="none"
          >結果を見る
        </Button>
        {/* <button onClick={fixResult}>結果を見る</button> */}
      </div>
    ) } else if (questionState===15 & chartDisplay===true)
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
          <div>
      <ChakraProvider>
        <VStack spacing={20} alignItems="center" marginBottom="100px">
          <Stack>
            <Text
              style={{
                textAlign: "left",
                lineHeight: "2",
                fontSize: "25px",
                paddingLeft: "100px",
                paddingRight: "100px",
                maxWidth: "100%",
                wordWrap: "break-word",
                marginTop:"50px",
                marginBottom:"100px"
              }}
            >
              {questions[questionState].question}
            </Text>
          </Stack>
          <Box>
            <Flex alignItems="center" justifyContent="center" h="25vh" marginTop="20px" marginBottom="100px">
              <Flex flexDirection="Column">
                {answers.map((option) => (
                  <OptionToggle
                    key={option.id}
                    option={option}
                    isSelected={option.id === selectedOption.id}
                    onClick={() => handleOptionSelect(option)}
                  />
                ))}
              </Flex>
            </Flex>
            <Box marginBottom="100px"></Box> 
          </Box>
        </VStack>
      </ChakraProvider>
    </div>
  )
      } else {
        if (questionState<=14){
        return(
          <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"30vh"}}>
          {/* <h3 style={{textAlign:"center"}}>{questionState+2} 問目へ / 全15問</h3> */}
          </div>
        )} 
        // else if (questionState===14){
        //   return(
        //   <h3 className="App">結果の表示</h3>
        // )};
      }
  }
// export default withAuthenticator(App);
export default Home;
