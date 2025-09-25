import { FieldProps } from "formik";

import React, { useEffect, useState } from "react";

import {
  ColorValue,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  TextInputProps,
} from "react-native";

import Box from "@components/Restyle/Box";
import theme from "../../theme/theme";

// import Icon from "../Icon/Icon";

import { Text } from "@components/Restyle";

interface TextFieldProps {
  autoFocus: boolean;
  label: string;
  isFullWidth?: boolean;
  isRequired?: boolean;
  placeholder?: string;
  prefix?: React.ReactChild;
  suffix?: React.ReactChild;
  textInputProps?: TextInputProps;
  isLarge?: boolean;
  showCharsRemaining?: boolean;
  borderless?: boolean;
  isLargeText?: boolean;
  marginBottom?: keyof typeof theme.spacing;
  marginTop?: keyof typeof theme.spacing;
  accessibilityLabel?: string;
  defaultValue?: string;
  validateOnChange?: boolean;
  hideError?: boolean;
  onChangeText?: (value?: string) => void;
  onBlur?: () => void;
  onFocus?: (b: boolean) => void;
  customBorderColor?: ColorValue;
  customBackgroundColor?: ColorValue;
  onKeyPress?:
    | ((e: NativeSyntheticEvent<TextInputKeyPressEventData>) => void)
    | undefined;
}

const TextField: React.FC<TextFieldProps & FieldProps> = ({
  autoFocus,
  label,
  isFullWidth = true,
  isRequired,
  placeholder,
  suffix,
  prefix,
  field,
  textInputProps,
  isLarge,
  marginBottom,
  marginTop,
  showCharsRemaining,
  form: { touched, errors, setTouched, setFieldValue },
  borderless,
  isLargeText,
  accessibilityLabel,
  validateOnChange = true,
  defaultValue,
  hideError,
  onChangeText,
  onBlur,
  onFocus,
  customBorderColor,
  customBackgroundColor,
  onKeyPress,
}) => {
  // const { t } = useTranslation("forms");
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    if (defaultValue) {
      setFieldValue(field.name, defaultValue);
    }
  }, []);

  const getMarginTop = () => {
    if (isLarge) return "s";
    else return marginTop ? marginTop : "xs";
  };

  return (
    <Box
      width={isFullWidth ? "100%" : undefined}
      marginBottom={isLarge ? "s" : marginBottom || "m"}
    >
      {label && (
        <Box
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="space-between"
          marginBottom={"xxs"}
        >
          {!borderless && (
            <Text variant="label1">
              {label}
              <Text variant="error"> {" *"}</Text>
            </Text>
          )}
          {/* {isRequired && !borderless && (
            <Text variant="metadataSecondary">{t("required")}</Text>
          )} */}
        </Box>
      )}

      <Box
        flexDirection="row"
        style={
          !isLarge && {
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
          }
        }
      >
        {!!prefix && (
          <Box
            flex={1}
            alignItems="flex-start"
            justifyContent="center"
            style={{ marginRight: -theme.spacing.xl, zIndex: 1 }}
          >
            {prefix}
          </Box>
        )}

        <TextInput
          style={[
            borderless && { flex: 1 },
            borderless && isRequired && { height: 48 },
            !borderless && styles.input,
            isLargeText && styles.largeText,
            !!prefix && { paddingLeft: 74 },
            !!suffix && { paddingRight: theme.spacing.xxl },
            !!touched[field.name] &&
              !!errors[field.name] && {
                borderColor: theme.colors.alertRed,
              },
            !!customBorderColor && {
              borderColor: customBorderColor,
            },
            !!customBackgroundColor && {
              backgroundColor: customBackgroundColor,
            },
            showCharsRemaining && { paddingRight: theme.spacing.xxl },
          ]}
          onChangeText={(value) => {
            setTouched({ ...touched, [field.name]: validateOnChange });
            setFieldValue(field.name, value);
            onChangeText && onChangeText(value);
          }}
          onBlur={() => {
            setTouched({ ...touched, [field.name]: true });
            setIsFocused(false);
            onBlur && onBlur();
          }}
          autoFocus={autoFocus}
          onFocus={() => {
            setIsFocused(true);
            onFocus && onFocus(true);
          }}
          onKeyPress={onKeyPress}
          value={field.value}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.grey04}
          accessibilityLabel={accessibilityLabel}
          {...textInputProps}
        />

        {borderless && isRequired && !field.value?.length && (
          <Text variant="metadataSecondary">{"required"}</Text>
        )}

        {(!!suffix || showCharsRemaining) && (
          <Box
            alignItems="flex-start"
            justifyContent="center"
            style={{
              position: "absolute",
              right: theme.spacing.m,
              top: 0,
              bottom: 0,
            }}
          >
            {showCharsRemaining && textInputProps?.maxLength && isFocused ? (
              <Text color="textSecondary" variant="bodySecondary">
                {textInputProps?.maxLength - field.value.length}
              </Text>
            ) : (
              suffix
            )}
          </Box>
        )}
      </Box>

      {!!touched[field.name] && !!errors[field.name] && !hideError && (
        <Box
          flexDirection="row"
          alignItems="center"
          marginTop={getMarginTop()}
          marginRight="m"
        >
          {/*  <Icon 
              name='AlertTriangle' 
              color='alertRed' 
              variant='s' 
              marginRight='xxs' 
            />  */}

          <Text variant="error">{errors[field.name]}</Text>
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingHorizontal: theme.spacing.m,
    borderWidth: 1,
    borderRadius: theme.spacing.xs,
    borderColor: theme.colors.grey02,
    backgroundColor: theme.colors.white,
    fontFamily: "Inter_400Regular",
    height: 48,
  },

  largeText: {
    ...theme.textVariants.labelLarge,
    color: theme.colors.textPrimary,
  },
});

export default TextField;
