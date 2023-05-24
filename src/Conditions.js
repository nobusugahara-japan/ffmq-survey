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
        { value: "ほどんと怒りやイライラを感じない", label: "ほとんど怒りやイライラを感じない", onClick: handleMentalConditionClick },
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
            width="400px"
            onClick={() => option.onClick(option.value)}
            mb={3}
            cursor="pointer"
            alignItems="center"
            borderRadius="lg"
            // boxShadow="0 5px 5px rgba(0, 0, 0, 0.2)"
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
              <Box whiteSpace="nowrap" marginLeft="10px">
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
          <Text fontSize="25px">1. 肩こり・偏頭痛</Text>
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
          <Text fontSize="25px">2.睡眠の状態</Text>
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
            <Text fontSize="25px">3.こころの状態</Text>
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
            <Text fontSize="25px">4.集中力の状態</Text>
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
            <Text fontSize="25px">5.人間関係の状態</Text>
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
            <Button 
                name="nextButton" 
                onClick={sendData}
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
                border="none">
                次へ
            </Button>
        </div>
        );
    }
export default Conditions;