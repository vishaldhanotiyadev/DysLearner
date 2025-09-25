import React from "react"
import { Box, Text } from "@components/Restyle"
import { SkillCard } from "screens/SkillCard/SkillCard"


interface Skill {
  icon: string
  title: string
  rating: number
}

interface SkillSectionProps {
  icon: string
  title: string
  skills: Skill[]
  backgroundColor?: string
}

export const SkillSection: React.FC<SkillSectionProps> = ({ icon, title, skills, backgroundColor = "#FFFFFF" }) => {
  return (
    <Box backgroundColor="cardPrimary" borderRadius="l" padding="m" marginBottom="m">
      <Box flexDirection="row" alignItems="center" marginBottom="m">
        <Box
         // backgroundColor={backgroundColor}
          borderRadius="s"
          width={32}
          height={32}
          alignItems="center"
          justifyContent="center"
          marginRight="m"
        >
          <Text fontSize={18}>{icon}</Text>
        </Box>
        <Text variant="body" fontWeight="600" fontSize={18}>
          {title}
        </Text>
      </Box>

      {skills.map((skill, index) => (
        <SkillCard
          key={index}
          icon={skill.icon}
          title={skill.title}
          rating={skill.rating}
          onLearnPress={() => console.log(`Learn ${skill.title}`)}
        />
      ))}
    </Box>
  )
}
