import { Box, Flex, useToken,Text } from "@chakra-ui/react";

function OptionToggle({ option, isSelected, onClick }) {

    const [bgColorSelected, bgColorNotSelected] = useToken("colors", [
      "#23A6BA",
      "#c0c0c0",
    ]);
  
    return (
      <Flex
        // display="inline-block"
        display="block"
        width="300px"
        onClick={onClick}
        mb={3}
        cursor="pointer"
        alignItems="center"
        borderRadius="lg"
        // boxShadow="0 5px 5px rgba(0, 0, 0, 0.2)"
        p={2}
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
            <Text  fontSize="md" fontFamily="Arial, sans-serif">{option.label}</Text>
          </Box>
        </Flex>
      </Flex>
    );
  };

export default OptionToggle;