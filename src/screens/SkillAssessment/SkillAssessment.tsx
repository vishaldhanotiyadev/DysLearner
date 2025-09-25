import { Box, Text } from "@components/Restyle";
import type React from "react";
import { useState } from "react";
import { StarRating } from "screens/StarRating/StarRating";
import { Slider } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { palette } from "theme/theme";

interface SkillAssessmentProps {
  title: string;
  icon: string;
  skills: Array<{
    name: string;
    icon: string;
  }>;
  iconColor: string;
}

export const SkillAssessment: React.FC<SkillAssessmentProps> = ({
  title,
  icon,
  skills,
  iconColor,
}) => {
  const [skillLevels, setSkillLevels] = useState<{
    [key: string]: { stars: number; level: string };
  }>({});

  return (
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
      <Box flexDirection="row" alignItems="center" marginBottom="m">
        <Box
          width={36}
          height={36}
          backgroundColor={iconColor}
          borderRadius={24}
          // backgroundColor={iconColor}
          alignItems="center"
          justifyContent="center"
          marginRight="m"
        >
          <Text fontSize={12}>{icon}</Text>
        </Box>

        <Text variant="body" fontWeight="600">
          {title}
        </Text>
      </Box>

      {skills.map((skill, index) => {
        return (
          <Box key={index} marginBottom="m">
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              marginBottom="s"
            >
              <Box flexDirection="row" alignItems="center" flex={1}>
                <Text fontSize={14} marginRight="s">
                  {skill.icon}
                </Text>
                <Text variant="body" fontSize={14}>
                  {skill.name}
                </Text>
              </Box>
              <Box flexDirection="row" alignItems="center">
                <StarRating rating={3} maxStars={5} />
              </Box>
            </Box>
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box flexDirection="row" alignItems="center">
                <Slider
                  animateTransitions
                  animationType="timing"
                  maximumTrackTintColor="#ececf0"
                  maximumValue={100}
                  minimumTrackTintColor="#030212"
                  minimumValue={0}
                  onSlidingComplete={() => console.log("onSlidingComplete()")}
                  onSlidingStart={() => console.log("onSlidingStart()")}
                  onValueChange={(value) =>
                    console.log("onValueChange()", value)
                  }
                  orientation="horizontal"
                  step={1}
                  style={{ width: "100%", height: 20 }}
                  thumbStyle={{
                    height: 20,
                    width: 20,
                    marginTop: -10,
                    borderWidth: 1,
                  }}
                  thumbTintColor="#ffffff"
                  thumbTouchSize={{ width: 40, height: 40 }}
                  trackStyle={{ height: 10, marginTop: -10, borderRadius: 10 }}
                  value={50}
                />
              </Box>
            </Box>
            <Box flexDirection="row" style={{ marginTop: -10 }} justifyContent="space-between">
              <Text color={'textSecondary'} fontSize={13}>Beginner</Text>
              <Text color={'textSecondary'} fontSize={13}>Expert</Text>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};
