import React from "react"
import { TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Box, Text } from "@components/Restyle"

interface AddStudentButtonProps {
  onPress?: () => void
}

export const AddStudentButton: React.FC<AddStudentButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Box marginBottom="l">
        <LinearGradient
          colors={["#10B981", "#3B82F6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            borderRadius: 12,
            paddingVertical: 16,
            paddingHorizontal: 24,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text fontSize={18} marginRight="s" color="white">
            +
          </Text>
          <Text variant="button" fontSize={16}>
            Add New Student
          </Text>
        </LinearGradient>
      </Box>
    </TouchableOpacity>
  )
}
