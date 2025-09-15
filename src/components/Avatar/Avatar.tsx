// components/Avatar.tsx
import { Text } from "@components/Restyle";
import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { Theme } from "../../theme/theme"; // Adjust the path to your theme

type AvatarSize = "small" | "medium" | "large";

type AvatarProps = {
  uri?: string | ImageSourcePropType;
  size?: AvatarSize;
  initials?: string;
  borderColor?: keyof Theme["colors"];
  borderWidth?: number;
};

const sizeMap = {
  small: 24,
  medium: 40,
  large: 64,
};

const Avatar = ({
  uri,
  size = "medium",
  initials,
  borderColor = "white",
  borderWidth = 2,
}: AvatarProps) => {
  const dimension = sizeMap[size];
  const radius = dimension / 2;

  const imageSource: ImageSourcePropType | undefined =
    typeof uri === "string" ? { uri } : uri;

  return (
    <View
      style={{
        width: dimension,
        height: dimension,
        borderRadius: radius,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: borderWidth,
        borderColor: borderColor,
        backgroundColor: "grey02",
      }}
    >
      {imageSource ? (
        <Image
          source={imageSource}
          style={{
            width: dimension,
            height: dimension,
            borderRadius: radius,
          }}
          resizeMode="cover"
        />
      ) : (
        <Text variant="bodySecondary" color="white">
          {initials || "?"}
        </Text>
      )}
    </View>
  );
};

export default Avatar;
