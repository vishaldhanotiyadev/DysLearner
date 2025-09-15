import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  createRestyleComponent,
  spacing,
  SpacingProps,
} from "@shopify/restyle";
import React from "react";
import { ViewStyle } from "react-native";
import Images from "theme/images";

import theme, { Theme } from "../../theme/theme";

/*
  Example pre-defined size:
    <Icon name="Activity1" variant="s" color="magentaDark" />

  Example custom size:
    <Icon name="Activity1" color="magentaDark" width={30} height={30} />
*/

export type IconSizes = "xxxs" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl";

export type RestyleProps = BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  SpacingProps<Theme> & {
    name?: keyof typeof Images;
    variant?: IconSizes;
    padding?: keyof typeof theme.spacing;
    borderRadius?: keyof typeof theme.spacing;
    width?: number;
    height?: number;
    style?: ViewStyle;
    isCircle?: boolean;
    color?: keyof typeof theme.colors;
    testId?: string;
  };

const RestyleIcon = createRestyleComponent<
  RestyleProps & {
    children: React.ReactNode;
  },
  Theme
>([border, spacing, backgroundColor]);

const RestyleIconWrapper = ({
  name = "EyeOn",
  variant,
  width,
  height,
  style,
  isCircle,
  padding,
  borderRadius,
  testId,
  ...rest
}: RestyleProps) => {
  let iconName = name;

  const allIcons = { ...Images };
  const Comp = allIcons[iconName];

  let size = 20;

  switch (variant) {
    case "xxxs":
      size = 10;
      break;

    case "xxs":
      size = 12;
      break;

    case "xs":
      size = 14;
      break;

    case "s":
      size = 16;
      break;

    case "m":
      size = 20;
      break;

    case "l":
      size = 24;
      break;

    case "xl":
      size = 28;
      break;

    case "xxl":
      size = 32;
      break;

    default:
      size = 20;
  }
  return (
    <RestyleIcon
      {...rest}
      padding={padding || (rest.backgroundColor && "xs")}
      borderRadius={borderRadius || (rest.backgroundColor && "xs")}
      style={isCircle ? { borderRadius: 24 } : {}}
      name={name}
      testId={testId}
    >
      <Comp
        color={
          theme.colors[
            (rest.color as keyof (typeof theme)["colors"]) || "black"
          ]
        }
        width={width || size}
        height={height || size}
        style={style}
      />
    </RestyleIcon>
  );
};

export default RestyleIconWrapper;
