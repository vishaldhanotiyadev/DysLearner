import type React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Text } from "@components/Restyle";
import { palette } from "theme/theme";

interface StudyMaterialCardProps {
  icon: string;
  title: string;
  subtitle: string;
  points: number;
  duration?: string;
  onPress: () => void;
}

export const StudyMaterialCard: React.FC<StudyMaterialCardProps> = ({
  icon,
  title,
  subtitle,
  points,
  duration,
  onPress,
}) => {
  return (
    <Box
      backgroundColor="cardPrimary"
      borderRadius="m"
      padding="m"
      marginBottom="m"
      shadowColor="black"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.1}
      shadowRadius={4}
      elevation={3}
    >
      <Box flexDirection="row">
        <Box
          backgroundColor="primary"
          borderRadius="s"
          width={75}
          height={65}
          justifyContent="center"
          alignItems="center"
          marginRight="m"
        >
          <Text fontSize={24}>{icon}</Text>
        </Box>

        <Box flex={1}>
          <Box flexDirection="row" justifyContent="space-between">
            <Box flexDirection="column" alignItems="flex-start">
              <Text variant="body" fontSize={16}>
                {title}
              </Text>
              <Text variant="caption" color="textSecondary">
                {subtitle}
              </Text>
            </Box>
            <Box flexDirection="column" alignItems="flex-end">
              <Text variant="caption" color="orange01" fontWeight="700">
                +{points}
              </Text>
              <Text variant="caption" color="textSecondary">
                points
              </Text>
            </Box>
          </Box>

          <LinearGradient
            start={{ x: 0.2, y: 0.3 }}
            end={{ x: 1.1, y: 0.7 }}
            colors={palette.startLearningGradient}
            style={{
              borderRadius: 14,
              paddingVertical: 4,
              marginTop: 10,
              paddingHorizontal: 16,
            }}
          >
            <Text variant="button" textAlign="center" fontSize={14}>
              ▶ Start Learning
            </Text>
          </LinearGradient>
        </Box>
      </Box>
    </Box>
  );
};
