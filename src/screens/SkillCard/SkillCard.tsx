import  React from "react"
import { StarRating } from "../StarRating/StarRating"
import { LearnButton } from "../LearnButton/LearnButton"
import { Box,Text } from "@components/Restyle"

interface SkillCardProps {
  icon: string
  title: string
  rating: number
  onLearnPress?: () => void
}

export const SkillCard: React.FC<SkillCardProps> = ({ icon, title, rating, onLearnPress }) => {
  return (
    <Box
    backgroundColor={"lightGrey"}
      borderRadius="m"

      marginBottom="s"
      paddingHorizontal={'s'}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box paddingVertical={'m'} flexDirection="row" alignItems="center" flex={1} >
        <Text  fontSize={20} marginRight="xxs">
          {icon}
        </Text>
        <Box flex={1} flexDirection="row"  alignItems="center">
          <Text variant="body" fontWeight="500" >
            {title}
          </Text>
          <Box marginStart={'xs'}>
          <StarRating rating={rating} maxStars={5}/>
          </Box>
        </Box>
      </Box>
      <LearnButton onPress={onLearnPress} />
    </Box>
  )
}
