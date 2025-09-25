import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  color,
  ColorProps,
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
} from "@shopify/restyle";
import React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Box, Text } from "@components/Restyle";
import theme, { palette, Theme } from "theme/theme";
import { LinearGradient } from "expo-linear-gradient";

type RestyleProps = ColorProps<Theme> &
  BorderProps<Theme> &
  SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  VariantProps<Theme, "buttonVariants">;

const RestyleButton = createRestyleComponent<RestyleProps, Theme>([
  color,
  border,
  spacing,
  backgroundColor,
  createVariant({ themeKey: "buttonVariants" }),
]);

type Props = RestyleProps & {
  fullWidth?: boolean;
  children: React.ReactChild;
  prefix?: React.ReactChild;
  suffix?: React.ReactChild;
  disabled?: boolean;
  gradientColors?: any;
  alignTextLeft?: boolean;
  onPress?: () => void;
  prefixMarginRight?: keyof typeof theme.spacing;
  activeOpacity?: number;
  isSmall?: boolean;
  float?: "bottom" | "bottom-right" | "bottom-inset" | "bottom-right-inset";
  accessibilityLabel?: string;
  height?: number;
  borderColor?: keyof typeof theme.colors;
  testID?: string;
};

const Button: React.FC<Props> = ({
  fullWidth = false,
  disabled = false,
  gradientColors=palette.loginButtonGradient,
  children,
  onPress,
  prefix,
  suffix,
  alignTextLeft,
  prefixMarginRight,
  activeOpacity = 0.2,
  isSmall,
  float,
  accessibilityLabel,
  height,
  borderColor,
  testID,
  ...rest
}: Props) => {
  const insets = useSafeAreaInsets();
  let styleOverrides = fullWidth ? {} : { alignItems: "center" };
  let color = null;
  let labelVariant = null;

  switch (rest.variant) {
    case "primary":
      color = "white";
      labelVariant = "buttonLabel";
      break;

    case "text":
      color = "black";
      break;

    case "reversed":
      color = "black";
      labelVariant = "buttonLabel";
      break;
    case "gradient":
      color = "black";
      labelVariant = "buttonLabel";
      break;
    case "icon":
      color = "white";
      labelVariant = null;
      styleOverrides = { ...styleOverrides };
      //  buttonPadding = "xs";
      break;

    default:
      color = "black";
      labelVariant = "bodySecondary";
  }

  const renderButton = () => {
    const height1 = height ? height : 48;
    const txtColor = Platform.OS === "web" ? "grey04" : "textSecondary";
    return (
      <TouchableOpacity
        style={{ width: fullWidth ? "100%" : undefined }}
        disabled={disabled}
        activeOpacity={activeOpacity}
        onPress={onPress}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
      >
        {rest.variant === "gradient" ? (
          <LinearGradient
            colors={gradientColors}
            style={[
              disabled && {
                backgroundColor: theme.colors.grey02,
                borderColor: theme.colors.grey02,
              },
              borderColor && {
                borderColor: borderColor,
                borderWidth: 1,
              },
              {
                borderRadius: 10,
                justifyContent: "center",
                height: isSmall ? height1 : 56,
              },
            ]}
            start={{ x: 0.2, y: 0.3 }}
            end={{ x: 1.1, y: 0.7 }}
          >
            <RestyleButton
              {...rest}
              style={[
                styleOverrides,
                disabled && {
                  backgroundColor: theme.colors.grey02,
                  borderColor: theme.colors.grey02,
                },
                borderColor && {
                  borderColor: borderColor,
                  borderWidth: 1,
                },
                {
                  justifyContent: "center",
                  height: isSmall ? height1 : 56,
                },
              ]}
            >
              {prefix && (
                <Box
                  width={16}
                  height={16}
                  marginRight={prefixMarginRight || "s"}
                  alignItems="center"
                  justifyContent="center"
                  pointerEvents="none"
                >
                  {prefix}
                </Box>
              )}
              <Box
                alignItems={alignTextLeft ? "flex-start" : "center"}
                justifyContent="center"
                style={(!prefix || alignTextLeft) && { flex: 1 }}
              >
                <Text
                  width={"100%"}
                  textAlign={"center"}
                  variant={labelVariant}
                  color={!disabled ? color : txtColor}
                  style={[
                    alignTextLeft && {
                      marginLeft: theme.spacing.m,
                    },
                  ]}
                >
                  {children}
                </Text>
              </Box>
              {suffix && (
                <Box width="m" height="m" marginLeft="xs" pointerEvents="none">
                  {suffix}
                </Box>
              )}
            </RestyleButton>
          </LinearGradient>
        ) : (
          <RestyleButton
            {...rest}
            style={[
              styleOverrides,
              disabled && {
                backgroundColor: theme.colors.grey02,
                borderColor: theme.colors.grey02,
              },
              borderColor && {
                borderColor: borderColor,
                borderWidth: 1,
              },
              {
                justifyContent: "center",
                height: isSmall ? height1 : 56,
              },
            ]}
          >
            {prefix && (
              <Box
                width={16}
                height={16}
                marginRight={prefixMarginRight || "s"}
                alignItems="center"
                justifyContent="center"
                pointerEvents="none"
              >
                {prefix}
              </Box>
            )}
            <Box
              alignItems={alignTextLeft ? "flex-start" : "center"}
              justifyContent="center"
              style={(!prefix || alignTextLeft) && { flex: 1 }}
            >
              <Text
                width={"100%"}
                textAlign={"center"}
                variant={labelVariant}
                color={!disabled ? color : txtColor}
                style={[
                  alignTextLeft && {
                    marginLeft: theme.spacing.m,
                  },
                ]}
              >
                {children}
              </Text>
            </Box>
            {suffix && (
              <Box width="m" height="m" marginLeft="xs" pointerEvents="none">
                {suffix}
              </Box>
            )}
          </RestyleButton>
        )}
      </TouchableOpacity>
    );
  };

  const floatBottomRight = () => {
    return (
      <Box
        style={{
          position: "absolute",
          bottom: theme.spacing.m,
          right: theme.spacing.m,
        }}
      >
        {renderButton()}
      </Box>
    );
  };

  const floatBottomInset = () => {
    return (
      <Box
        style={[
          styles.submitButton,
          { bottom: insets.bottom ? theme.spacing.s : 0 },
        ]}
        marginBottom="m"
        marginHorizontal="m"
      >
        {renderButton()}
      </Box>
    );
  };

  const floatBottomRightInset = () => {
    return (
      <Box
        style={{
          position: "absolute",
          bottom: insets.bottom ? theme.spacing.xl : theme.spacing.l,
          right: theme.spacing.m,
        }}
      >
        {renderButton()}
      </Box>
    );
  };

  if (float === "bottom-right") return floatBottomRight();
  if (float === "bottom-inset") return floatBottomInset();
  if (float === "bottom-right-inset") return floatBottomRightInset();

  return renderButton();
};

const styles = StyleSheet.create({
  submitButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Button;
