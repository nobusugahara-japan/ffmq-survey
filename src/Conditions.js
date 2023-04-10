import {API, graphqlOperation} from "aws-amplify";
import {createConditionData} from "./graphql/mutations";
import { Box, Flex, Text,VStack, useToken,Button } from "@chakra-ui/react";
import {useState} from "react";

const Conditions= (props) => {

    const [selectedSholderCondition, setSelectedSholderCondition] = useState("");
    const [selectedSleepCondition, setSelectedSleepCondition] = useState("");
    const [selectedMentalCondition, setSelectedMentalCondition] = useState("");
    const [selectedFocusCondition, setSelectedFocusCondition] = useState("");
    const [selectedRelationship, setSelectedRelationship] = useState("");

    const sendData=()=>{
        const newConditionData = [selectedSholderCondition,selectedSleepCondition,selectedMentalCondition,
                                    selectedFocusCondition,selectedRelationship]
        API.graphql(graphqlOperation(createConditionData, 
            {input:{personId:props.personId, CompanyName: props.customerName, ConditionData:newConditionData}}))
            .then(()=>{console.log("送信成功")})
        props.setQuestionState(props.questionState+1);
    }

    const handleSholderConditionClick = (value) => {
        setSelectedSholderCondition(value);
      };
    
      const handleSleepConditionClick = (value) => {
        setSelectedSleepCondition(value);
      };
    
      const handleMentalConditionClick = (value) => {
        setSelectedMentalCondition(value);
      };

      const handleFocusConditionClick = (value) => {
        setSelectedFocusCondition(value);
      };

      const handleRelationshipClick = (value) => {
        setSelectedRelationship(value);
      };

      const sholderPainOptions = [
        { value: "ひどく痛む", label: "ひどく痛む", onClick: handleSholderConditionClick },
        { value: "少し痛む", label: "少し痛む", onClick: handleSholderConditionClick },
        { value: "ほとんど感じない", label: "ほとんど感じない", onClick: handleSholderConditionClick },
      ];
      
      const sleepConditionOptions = [
        { value: "あまり眠れない", label: "あまり眠れない", onClick: handleSleepConditionClick },
        { value: "夜中に時々起きてしまう", label: "夜中に時々起きてしまう", onClick: handleSleepConditionClick },
        { value: "よく眠れている", label: "よく眠れている", onClick: handleSleepConditionClick },
      ];
      
      const mentalConditionOptions = [
        { value: "すぐに起こったりイライラする", label: "すぐに起こったりイライラする", onClick: handleMentalConditionClick },
        { value: "怒りやイライラが起こるが外に表すことはない", label: "怒りやイライラが起こるが外に表すことはない", onClick: handleMentalConditionClick },
        { value: "ほどんと怒りやイライラを感じない", label: "ほどんと怒りやイライラを感じない", onClick: handleMentalConditionClick },
      ];

      const focusConditionOptions = [
        { value: "集中しようとしても出来ないことが多い", label: "集中しようとしても出来ないことが多い", onClick: handleFocusConditionClick },
        { value: "集中することは出来るが長続きしない", label: "集中することは出来るが長続きしない", onClick: handleFocusConditionClick },
        { value: "集中したい時は、集中することが出来る", label: "集中したい時は、集中することが出来る", onClick: handleFocusConditionClick },
      ];

      const relationshipOptions = [
        { value: "親しい人でも会うのが億劫に感じる", label: "親しい人でも会うのが億劫に感じる", onClick: handleRelationshipClick },
        { value: "あまり親しくない人には、出来るだけ会いたくない", label: "あまり親しくない人には、出来るだけ会いたくない", onClick: handleRelationshipClick },
        { value: "人と会うことを苦痛に感じない", label: "人と会うことを苦痛に感じない", onClick: handleRelationshipClick },
      ];

      const CustomOption = ({ option, isSelected}) => {
        const [bgColorSelected, bgColorNotSelected] = useToken("colors",["#23A6BA","#c0c0c0"]);

        return (
          <Flex
            display="block"
            width="300px"
            onClick={() => option.onClick(option.value)}
            mb={3}
            cursor="pointer"
            alignItems="center"
            borderRadius="lg"
            boxShadow="0 5px 5px rgba(0, 0, 0, 0.2)"
            p={5}
          >
            <Flex alignItems="center">
            <Box
                bg={isSelected ? bgColorSelected : bgColorNotSelected}
                borderRadius="50%"
                width="15px"
                height="15px"
                // boxShadow="sm"
                mr={2}
                position="relative"
            >
            {isSelected && (
              <Box
                bg={bgColorSelected}
                borderRadius="50%"
                width="12px"
                height="12px"
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
              />
            )}
            </Box>
              <Box whiteSpace="nowrap">
                <Text fontSize="md" fontFamily="Arial, sans-serif">
                  {option.label}
                </Text>
              </Box>
            </Flex>
          </Flex>
        );
      };

      return (
        <div className="App content">
          <Text>1. 肩こり・変頭痛</Text>
          <VStack justifyContent={"center"} flexWrap={"wrap"}>
          {sholderPainOptions.map((option) => (
            <CustomOption
              key={option.value}
              option={option}
              isSelected={selectedSholderCondition === option.value}
              onClick={handleSholderConditionClick}
            />
          ))}
          </VStack>
          <Text>2.睡眠の状態</Text>
          <VStack justifyContent={"center"} flexWrap={"wrap"}>
            {sleepConditionOptions.map((option) => (
                <CustomOption
                key={option.value}
                option={option}
                isSelected={selectedSleepCondition === option.value}
                onClick={handleSleepConditionClick}
                />
            ))}
            </VStack>
            <Text>3.こころの状態</Text>
            <VStack justifyContent={"center"} flexWrap={"wrap"}>
            {mentalConditionOptions.map((option) => (
                <CustomOption
                key={option.value}
                option={option}
                isSelected={selectedMentalCondition === option.value}
                onClick={handleMentalConditionClick}
                />
            ))}
            </VStack>
            <Text>4.集中力の状態</Text>
            <VStack justifyContent={"center"} flexWrap={"wrap"}>
            {focusConditionOptions.map((option) => (
                <CustomOption
                key={option.value}
                option={option}
                isSelected={selectedFocusCondition === option.value}
                onClick={handleFocusConditionClick}
                />
            ))}
            </VStack>
            <Text>5.人間関係の状態</Text>
            <VStack justifyContent={"center"} flexWrap={"wrap"}>
            {relationshipOptions.map((option) => (
                <CustomOption
                key={option.value}
                option={option}
                isSelected={selectedRelationship === option.value}
                onClick={handleRelationshipClick}
                />
            ))}
            </VStack>
            <Text as="h3">入力が完了したら、下記のボタンを押して次へ進んでください</Text>
            <Button 
                name="nextButton" 
                onClick={sendData}
                size="lg"
                fontWeight="bold"
                fontSize="lg"
                color="white"
                bg="#23A6BA"
                _hover={{ bg: "#2BB1C5" }}
                _active={{ bg: "#1E8A9D" }}
                marginTop="16px"
                height="30px"
                width="100px"
                borderRadius="10px">
                次へ
            </Button>
        </div>
        );
    }
export default Conditions;


//     const sholderPainOption=(event)=>{
//         const newConditions = [...props.conditionData]
//         newConditions[0] = event.target.value
//         props.setConditionData(newConditions)
//     }
//     const sleepConditionOption=(event)=>{
//         const newConditions = [...props.conditionData]
//         newConditions[1] = event.target.value
//         props.setConditionData(newConditions)
//     }

//     const mindConditionOption=(event)=>{
//         const newConditions = [...props.conditionData]
//         newConditions[2] = event.target.value
//         props.setConditionData(newConditions)
//     }

//     const focusConditionOption=(event)=>{
//         const newConditions = [...props.conditionData]
//         newConditions[3] = event.target.value
//         props.setConditionData(newConditions)
//     }

//     const relationshipOption=(event)=>{
//         const newConditions = [...props.conditionData]
//         newConditions[4] = event.target.value
//         props.setConditionData(newConditions)
//     }

//     const sendData = async ()=>{
//         console.log("ここでチェック",props.personId, props.conditionData)
//         API.graphql(graphqlOperation(createConditionData, 
//             {input:{personId:props.personId, CompanyName: props.customerName, ConditionData:props.conditionData}}))
//             .then(()=>{console.log("送信成功")})
//         props.setQuestionState(props.questionState+1);
//     }

//     // console.log(props.conditionData)

//     return (
//     <div className="App">
//     <h3>あなたの心身の状態について教えてください</h3>
//       <h4>1. 肩こり・変頭痛</h4>
//         <p>
//             <input
//             type="radio"
//             id="sholder_pain_1"
//             value="ひどく痛む"
//             checked={props.conditionData[0] === 'ひどく痛む'}
//             onChange={sholderPainOption}
//             />
//             ひどく痛む
//         </p>
//         <p>
//             <input
//             type="radio"
//             id="sholder_pain_2"
//             value="少し痛む"
//             checked={props.conditionData[0]=== '少し痛む'}
//             onChange={sholderPainOption}
//             />
//             少し痛む
//         </p>
//         <p>
//             <input
//             type="radio"
//             id="sholder_pain_3"
//             value="ほとんど感じない"
//             checked={props.conditionData[0] === 'ほとんど感じない'}
//             onChange={sholderPainOption}
//             />
//             ほとんど感じない
//         </p>

//         <h4>2.睡眠の状態</h4>
//         <p>
//             <input
//             type="radio"
//             id="sleep_condition_1"
//             value="あまり眠れない"
//             checked={props.conditionData[1] === 'あまり眠れない'}
//             onChange={sleepConditionOption}
//             />
//             あまり眠れない
//         </p>
//         <p>
//             <input
//             type="radio"
//             id="sleep_condition_2"
//             value="夜中に時々起きてしまう"
//             checked={props.conditionData[1]=== '夜中に時々起きてしまう'}
//             onChange={sleepConditionOption}
//             />
//             夜中に時々起きてしまう
//         </p>
//         <p>
//             <input
//             type="radio"
//             id="sleep_condition_3"
//             value="問題を感じない"
//             checked={props.conditionData[1] === '問題を感じない'}
//             onChange={sleepConditionOption}
//             />
//             問題を感じない
//         </p>

//     <h4>3.こころの状態</h4>
//         <p>
//             <input
//             type="radio"
//             id="mind_condition_1"
//             value="すぐに起こったりイライラする"
//             checked={props.conditionData[2] === 'すぐに起こったりイライラする'}
//             onChange={mindConditionOption}
//             />
//             すぐに起こったりイライラする
//         </p>
//         <p>
//             <input
//             type="radio"
//             id="mind_condition_2"
//             value="怒りやイライラが起こるが外に表すことはない"
//             checked={props.conditionData[2]=== '怒りやイライラが起こるが外に表すことはない'}
//             onChange={mindConditionOption}
//             />
//             怒りやイライラが起こるが外に表すことはない
//         </p>
//         <p>
//             <input
//             type="radio"
//             id="mind_condition_3"
//             value="ほどんと怒りやイライラを感じない"
//             checked={props.conditionData[2] === 'ほどんと怒りやイライラを感じない'}
//             onChange={mindConditionOption}
//             />
//             ほどんと怒りやイライラを感じない
//         </p>

//     <h4>4.集中力の状態</h4>
//         <p>
//             <input
//             type="radio"
//             id="focus_condition_1"
//             value="集中しようとしても出来ないことが多い"
//             checked={props.conditionData[3] === '集中しようとしても出来ないことが多い'}
//             onChange={focusConditionOption}
//             />
//             集中しようとしても出来ないことが多い
//         </p>
//         <p>
//             <input
//             type="radio"
//             id="focus_condition_2"
//             value="集中することは出来るが長続きしない"
//             checked={props.conditionData[3]=== '集中することは出来るが長続きしない'}
//             onChange={focusConditionOption}
//             />
//             集中することは出来るが長続きしない
//         </p>
//         <p>
//             <input
//             type="radio"
//             id="focus_condition_3"
//             value="集中したい時は、多くの場合、集中することが出来る"
//             checked={props.conditionData[3] === '集中したい時は、多くの場合、集中することが出来る'}
//             onChange={focusConditionOption}
//             />
//             集中したい時は、多くの場合、集中することが出来る
//         </p>

//     <h4>5.人間関係の状態</h4>
//         <p>
//             <input
//             type="radio"
//             id="relationship_1"
//             value="親しい人にも会うのが億劫に感じる"
//             checked={props.conditionData[4] === '親しい人にも会うのが億劫に感じる'}
//             onChange={relationshipOption}
//             />
//             親しい人にも会うのが億劫に感じる
//         </p>
//         <p>
//             <input
//             type="radio"
//             id="relationship_2"
//             value="あまり親しくない人には、出来るだけ会いたくない"
//             checked={props.conditionData[4]=== 'あまり親しくない人には、出来るだけ会いたくない'}
//             onChange={relationshipOption}
//             />
//             あまり親しくない人には、出来るだけ会いたくない
//         </p>
//         <p>
//             <input
//             type="radio"
//             id="relationship_3"
//             value="人と会うことを苦痛に感じない"
//             checked={props.conditionData[4] === '人と会うことを苦痛に感じない'}
//             onChange={relationshipOption}
//             />
//             人と会うことを苦痛に感じない
//         </p>
  
//         <h3>入力が完了したら、下記のボタンを押して次へ進んでください</h3>
//         <button onClick={sendData}>次へ</button>
//     </div>
//     )
// }

// export default Conditions;