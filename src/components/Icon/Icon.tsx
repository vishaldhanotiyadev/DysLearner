/* eslint-disable no-magic-numbers */
import React, { ComponentProps } from "react";
import { TouchableOpacity } from "react-native";

import Box from "../Restyle/Box";
import RestyleIcon from "./RestyleIcon";

/*
  Example pre-defined size:
    <Icon name="Activity1" variant="s" color="magentaDark" />

  Example custom size:
    <Icon name="Activity1" color="magentaDark" width={30} height={30} />
*/
type Props = ComponentProps<typeof RestyleIcon> &
  Pick<
    ComponentProps<typeof TouchableOpacity>,
    "onPress" | "onPressIn" | "disabled" | "onPressOut" | "delayPressOut"
  > & {
    accessibilityLabel?: string;
  };

const Icon = ({
  onPress,
  onPressIn,
  disabled,
  accessibilityLabel,
  onPressOut,
  delayPressOut,
  testId,
  ...rest
}: Props) => {
  return (
    <Box pointerEvents={onPress ? "auto" : "none"}>
      <TouchableOpacity
        testID={testId}
        disabled={disabled}
        onPressIn={onPressIn}
        onPress={onPress}
        onPressOut={onPressOut ? onPressOut : undefined}
        delayPressOut={delayPressOut ? delayPressOut : 0}
        activeOpacity={(onPress || onPressIn) && !onPressOut ? undefined : 1}
        accessibilityLabel={accessibilityLabel}
      >
        <RestyleIcon {...rest} />
      </TouchableOpacity>
    </Box>
  );
};

export default Icon;
