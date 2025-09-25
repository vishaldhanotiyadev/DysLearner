import React from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text } from "@components/Restyle";
import Button from "@components/Button/Button";
import { palette } from "theme/theme";

interface PracticeQuestionProps {
  questionNumber: number;
  question: string;
  options: string[];
  correctAnswer?: number;
}

export const PracticeQuestion: React.FC<PracticeQuestionProps> = ({
  questionNumber,
  question,
  options,
  correctAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  return (
    <Box
      backgroundColor="cardPrimary"
      borderRadius="l"
      padding="m"
      marginBottom="m"
      shadowColor="black"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.1}
      shadowRadius={4}
      elevation={3}
    >
      {/* Question Header */}
      <Box flexDirection="row" alignItems="center" marginBottom="m">
        <Box
          backgroundColor="primary"
          borderRadius="xl"
          width={24}
          height={24}
          justifyContent="center"
          alignItems="center"
          marginRight="m"
        >
          <Text variant="button" fontSize={12}>
            {questionNumber}
          </Text>
        </Box>
        <Text variant="body" fontWeight="600" flex={1}>
          {question}
        </Text>
      </Box>

      {/* Options */}
      <Box marginBottom="m">
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedOption(index)}
            style={{ marginBottom: 8 }}
          >
            <Box
              flexDirection="row"
              alignItems="center"
              padding="s"
              borderRadius="s"
              backgroundColor={
                selectedOption === index ? "purpleLight" : "grayLight"
              }
            >
              <Box
                width={20}
                height={20}
                borderRadius="xl"
                borderWidth={2}
                borderColor={selectedOption === index ? "primary" : "gray"}
                backgroundColor={selectedOption === index ? "primary" : "white"}
                marginRight="m"
                justifyContent="center"
                alignItems="center"
              >
                {selectedOption === index && (
                  <Box
                    width={8}
                    height={8}
                    borderRadius="xl"
                    backgroundColor="white"
                  />
                )}
              </Box>
              <Text
                variant="body"
                color={selectedOption === index ? "primary" : "text"}
              >
                {option}
              </Text>
            </Box>
          </TouchableOpacity>
        ))}
      </Box>

      {/* Check Answer Button */}
      <Box alignItems="center">
        <Box width={"100%"} marginBottom="xl">
          <Button
            gradientColors={palette.loginButtonGradient}
            variant="gradient"
            onPress={() => {}}
            isSmall
            height={35}
          >
            <Text variant="buttonLabel" color="white">
              {"Check Answer"}
            </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
