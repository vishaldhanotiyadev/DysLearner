import React from "react";
import { Box } from "@components/Restyle";
import Images from "theme/images";
import { Image } from "react-native";

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxStars = 5,
}) => {
  return (
    <Box flexDirection="row" alignItems="center">
      {Array.from({ length: maxStars }, (_, index) => (
        <Image
          style={{ width: 13, height: 13, marginRight: 2 }}
          key={index}
          source={
            index < rating
              ? Images.CheckedStar
              : Images.UnCheckStar
          }
        />
     
      ))}
    </Box>
  );
};
