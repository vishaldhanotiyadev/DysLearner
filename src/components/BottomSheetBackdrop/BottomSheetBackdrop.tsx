import { BottomSheetBackdropProps } from "@gorhom/bottom-sheet";
import React from "react";
// eslint-disable-next-line import/default
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import theme from "theme/theme";

interface BottomSheetBackdropWithCloseProps extends BottomSheetBackdropProps {
  closeSheet?: () => void;
}

export const BottomSheetBackdrop = ({
  animatedIndex,
  style,
  closeSheet,
}: BottomSheetBackdropWithCloseProps) => {
  // animated variables
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [-1, 0], // value
      [0, 0.5], // opacity
      Extrapolate.CLAMP
    ),
  }));

  const containerStyle = [
    style,
    {
      backgroundColor: theme.colors.black,
    },
    containerAnimatedStyle,
  ];

  return (
    <View style={StyleSheet.absoluteFill}>
      <TouchableOpacity style={StyleSheet.absoluteFill} onPress={closeSheet}>
        <Animated.View style={containerStyle} />
      </TouchableOpacity>
    </View>
  );
};
