import React from "react"
import { TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Box,Text } from "@components/Restyle"
import { palette } from "theme/theme"
import { navigate } from "@navigation/RootNavigation"

interface LearnButtonProps {
  onPress?: () => void
}

export const LearnButton: React.FC<LearnButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
            start={{ x: 0.2, y: 0.3 }}
      end={{ x: 1.1, y: 0.7 }}
        colors={palette.learnMoreGradient}
        style={{
          paddingHorizontal: 18,
          paddingVertical: 9,
          borderRadius: 20,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={()=>{navigate('LearningPlan')}}> 
        <Box flexDirection="row" alignItems="center">
          <Text variant="contentLabel" fontSize={15} color={'white'} fontWeight="700">
            ▶ Learn
          </Text>
        </Box>
        </TouchableOpacity>
      </LinearGradient>
    </TouchableOpacity>
  )
}
