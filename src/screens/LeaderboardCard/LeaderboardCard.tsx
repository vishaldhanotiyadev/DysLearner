import React from "react";
import { Box, Text } from "@components/Restyle";

interface LeaderboardCardProps {
  icon: string;
  title: string;
  points: number;
  rank: number;
}

export const LeaderboardCard: React.FC<LeaderboardCardProps> = ({
  icon,
  title,
  points,
  rank,
}) => {
  const getBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "gold"; // Gold
      case 2:
        return "silver"; // Silver
      case 3:
        return "bronze"; // Bronze
      case 4:
        return "gold"; // Bronze
      case 5:
        return "bronze"; // Bronze
      case 6:
        return "silver"; // Bronze
      default:
        return "grey1"; // Gray
    }
  };

  return (
    <Box
      style={{
        backgroundColor: "white",
        borderRadius: 12,
        padding: 5,
        marginRight: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
      minWidth={100}
    >
      <Text alignSelf="flex-end" fontSize={15}>
        {icon}
      </Text>
      <Box alignItems="center">
        <Box
          backgroundColor={getBadgeColor(rank)}
          borderRadius="xl"
          width={25}
          height={25}
          alignItems="center"
          justifyContent="center"
        >
          <Text fontSize={15}>{icon}</Text>
        </Box>
        <Text variant="caption" textAlign="center" fontSize={12}>
          {title}
        </Text>
        <Text variant="caption" fontWeight="800" fontSize={12}>
          {points} pts
        </Text>
      </Box>
    </Box>
  );
};
