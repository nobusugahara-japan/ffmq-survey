import { Box, Flex, Text,VStack, useToken,Button } from "@chakra-ui/react";
import {useState} from "react";
import {API, graphqlOperation} from "aws-amplify";
import { createAttributeData } from "./graphql/mutations";
import "./App.css";

const Attribute = (props) => {
    const [selectedJob, setSelectedJob] = useState("");
    const [selectedAge, setSelectedAge] = useState("");
    const [selectedGender, setSelectedGender] = useState("");

    const sendData=()=>{
        const newAttributeData = [selectedJob,selectedAge,selectedGender]
        API.graphql(graphqlOperation(createAttributeData, 
            {input:{personId:props.personId, companyName:props.customerName, attributeData:newAttributeData}}))
            .then(()=>{console.log("送信成功")})
        props.setQuestionState(props.questionState+1);
    }

    const handleJobClick = (value) => {
        setSelectedJob(value);
      };
    
      const handleAgeClick = (value) => {
        setSelectedAge(value);
      };
    
      const handleGenderClick = (value) => {
        setSelectedGender(value);
      };

      const jobOptions = [
        { value: "技術・エンジニア", label: "技術・エンジニア", onClick: handleJobClick },
        { value: "営業・接客", label: "営業・接客", onClick: handleJobClick },
        { value: "専門職、管理", label: "専門職、管理", onClick: handleJobClick },
      ];
      
      const ageOptions = [
        { value: "20代以下", label: "20代以下", onClick: handleAgeClick },
        { value: "30代", label: "30代", onClick: handleAgeClick },
        { value: "40代", label: "40代", onClick: handleAgeClick },
        { value: "50代", label: "50代", onClick: handleAgeClick },
        { value: "60代以上", label: "60代以上", onClick: handleAgeClick },
      ];
      
      const genderOptions = [
        { value: "女性", label: "女性", onClick: handleGenderClick },
        { value: "男性", label: "男性", onClick: handleGenderClick },
        { value: "その他・回答しない", label: "その他・回答しない", onClick: handleGenderClick },
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
          <Text>職種</Text>
          <VStack justifyContent={"center"} flexWrap={"wrap"}>
          {jobOptions.map((option) => (
            <CustomOption
              key={option.value}
              option={option}
              isSelected={selectedJob === option.value}
              onClick={handleJobClick}
            />
          ))}
          </VStack>
          <Text>年齢（年代）</Text>
          <VStack justifyContent={"center"} flexWrap={"wrap"}>
            {ageOptions.map((option) => (
                <CustomOption
                key={option.value}
                option={option}
                isSelected={selectedAge === option.value}
                onClick={handleAgeClick}
                />
            ))}
            </VStack>
            <Text>性別</Text>
            <VStack justifyContent={"center"} flexWrap={"wrap"}>
            {genderOptions.map((option) => (
                <CustomOption
                key={option.value}
                option={option}
                isSelected={selectedGender === option.value}
                onClick={handleGenderClick}
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
export default Attribute;