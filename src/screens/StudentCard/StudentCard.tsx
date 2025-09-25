import React,{useState} from "react";
import {  TouchableOpacity } from "react-native";
import { Box, Text } from "@components/Restyle";
import { StarRating } from "screens/StarRating/StarRating";
import { palette } from "theme/theme";
import Button from "@components/Button/Button";

interface StudentCardProps {
  name: string;
  age: number;
  isActive: boolean;
  skills: {
    reading: { phonics: number; comprehension: number; fluency: number };
    writing: { spelling: number; handwriting: number; composition: number };
    math: { numbers: number; operations: number; problemSolving: number };
  };
  onPress?: () => void;
}

export default function StudentCard({
  name,
  age,
  isActive,
  skills,
  onPress,
}: StudentCardProps) {
      const [value, setValue] = useState(0);
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Box
        style={{
          backgroundColor: "white",
          borderRadius: 12,
          padding: 16,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        }}
        marginBottom="m"
      >
   
        {/* Student Header */}
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="m"
        >
          <Box>
            <Text variant="body" fontWeight="600" fontSize={16}>
              {name}
            </Text>
            <Text variant="caption" fontSize={14}>
              Age: {age}
            </Text>
          </Box>
          <Box
            backgroundColor="activeBackground"
            paddingHorizontal="s"
            paddingVertical="xxxs"
            borderColor={"activeBorderColor"}
            borderWidth={2}
            borderRadius={"xs"}
          >
            <Text
              variant="button"
              fontSize={12}
              color="blueMagenta"
              fontWeight="700"
            >
              {isActive ? "Active" : "Inactive"}
            </Text>
          </Box>
        </Box>

        {/* Reading Skills */}
        <Box
          marginBottom="m"
          backgroundColor={"lightGrey"}
          padding="s"
          borderRadius="s"
        >
          <Text variant="body" fontWeight="700" fontSize={14} marginBottom="xxxs">
            Reading
          </Text>
          <Box flexDirection="row" justifyContent="space-between">
            <Box alignItems="center" flex={1}>
              <Text variant="caption" fontSize={12} marginBottom="xxxs">
                Phonics
              </Text>
              <StarRating rating={skills.reading.phonics} maxStars={5} />
            </Box>
            <Box alignItems="center" flex={1}>
              <Text variant="caption" fontSize={12} marginBottom="xxxs">
                Comprehension
              </Text>
              <StarRating rating={skills.reading.comprehension} maxStars={5} />
            </Box>
            <Box alignItems="center" flex={1}>
              <Text variant="caption" fontSize={12} marginBottom="xxxs">
                Fluency
              </Text>
              <StarRating rating={skills.reading.fluency} maxStars={5} />
            </Box>
          </Box>
        </Box>

        {/* Writing Skills */}
        <Box
          marginBottom="m"
          backgroundColor={"lightGrey"}
          padding="s"
          borderRadius="s"
        >
          <Text variant="body" fontWeight="600" fontSize={14} marginBottom="s">
            Writing
          </Text>
          <Box flexDirection="row" justifyContent="space-between">
            <Box alignItems="center" flex={1}>
              <Text variant="caption" fontSize={12} marginBottom="xxxs">
                Spelling
              </Text>
              <StarRating rating={skills.writing.spelling} maxStars={3} />
            </Box>
            <Box alignItems="center" flex={1}>
              <Text variant="caption" fontSize={12} marginBottom="xxxs">
                Handwriting
              </Text>
              <StarRating rating={skills.writing.handwriting} maxStars={3} />
            </Box>
            <Box alignItems="center" flex={1}>
              <Text variant="caption" fontSize={12} marginBottom="xxxs">
                Composition
              </Text>
              <StarRating rating={skills.writing.composition} maxStars={5} />
            </Box>
          </Box>
        </Box>

        {/* Math Skills */}
        <Box
          marginBottom="m"
          backgroundColor={"lightGrey"}
          padding="s"
          borderRadius="s"
        >
          <Text variant="body" fontWeight="600" fontSize={14} marginBottom="s">
            Math
          </Text>
          <Box flexDirection="row" justifyContent="space-between">
            <Box alignItems="center" flex={1}>
              <Text variant="caption" fontSize={12} marginBottom="xxxs">
                Numbers
              </Text>
              <StarRating rating={skills.math.numbers} maxStars={4} />
            </Box>
            <Box alignItems="center" flex={1}>
              <Text variant="caption" fontSize={12} marginBottom="xxxs">
                Operations
              </Text>
              <StarRating rating={skills.math.operations} maxStars={5} />
            </Box>
            <Box alignItems="center" flex={1}>
              <Text variant="caption" fontSize={12} marginBottom="xxxs">
                Problem Solving
              </Text>
              <StarRating rating={skills.math.problemSolving} maxStars={5} />
            </Box>
          </Box>
        </Box>

        {/* Overall Progress */}
        <Button
          gradientColors={palette.overAllGradient}
          variant="gradient"
          onPress={() => {}}
          isSmall
          height={35}
        >
          <Text variant="caption" fontSize={12} color="black">
            {"Overall Progress: Learning Well! 🎉"}
          </Text>
        </Button>
      </Box>
    </TouchableOpacity>
  );
}




