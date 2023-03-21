import { useState } from "react";
import { ChakraProvider,useToken,Flex} from "@chakra-ui/react";
import OptionToggle from "./OptionToggle";
  

function Test2() {
  
    const answers = [
        {id:"1", label:"いつも当てはまる"},
        {id:"2", label: "しばしば当てはまる"}, 
        {id:"3", label: "たまに当てはまる"}, 
        {id:"4", label: "ほとんど当てはまらない"},
        {id:"5", label: "全く当てはまらない"}
    ];


  const [selectedOption, setSelectedOption] = useState(answers[0]);

  console.log("チェック", selectedOption.id)

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <ChakraProvider>
      <Flex alignItems="center" justifyContent="center" h="100vh">
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
    </ChakraProvider>
  );
}

export default Test2;

