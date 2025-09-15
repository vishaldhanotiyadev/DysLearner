/* eslint-disable import/no-default-export */

import { createTheme } from "@shopify/restyle";
import { Platform } from "react-native";

export const palette = {
  textPrimary: "#000000",
  textSecondary: "#303742",
  white: "#FFFFFF",
  grey: "#f5f5f5",
  black: "#000000",
  darkGrey: "#45484d",
  green: "#74ba3e",
  yellow: "#ecbf4b",
  lightGray: "#f6f6f6",
  slate: "#1e1f24",
  blue: "#007AFF",
  red: "#FF3B30",

  gradient01: "#7C94FC",
  gradient02: "#B448FD",
  gradient03: "#CE46C9",
  transparent: "transparent",

  grey02:'rgba(230, 230, 227, 1)',
  semiTransparent:'rgba(255, 255, 255, 0.72)'
};

const theme = createTheme({
  colors: {
    background: palette.white,
    onBackground: "e1f1f5",
    onBackgroundSecondary: "e1f1f5",
    onBackgroundTertiary: "e1f1f5",
    surface: palette.white,
    onSurface: palette.textPrimary,
    onSurfaceSecondary: palette.textSecondary,
    buttonBackground: palette.black,
    androidShadow: `rgba(0,0,0,0.7)`,
    buttonText: palette.white,

    ...palette,
  },

  spacing: {
    none: 0,
    xxxs: 2,
    xxs: 4,
    xs: 8,
    s: 12,
    m: 16,
    l: 24,
    xl: 36,
    xxl: 48,
    listFooter: 80,
  } as const,

  borderRadii: {
    none: 0,
    xxxs: 2,
    xxs: 4,
    xs: 8,
    s: 12,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  } as const,

  breakpoints: {
    phone: 0,
    tablet: 768,
  },

  textVariants: {
    defaults: {
      fontFamily: "Inter_400Regular",
      fontSize: {
        phone: 16,
      },
      lineHeight: 24,
      color: "onSurface",
    },

    heading1: {
      fontFamily: "Inter_700Bold",
      fontSize: 34,
      lineHeight: 41,
      color: "textPrimary",
    },

    heading2: {
      fontFamily: "Inter_700Bold",
      fontSize: 28,
      lineHeight: 34,
      color: "textPrimary",
    },
    
    heading3: {
      fontFamily: "Inter_700Bold",
      fontSize: 24,
      color: "textPrimary",
    },
    heading4: {
      fontFamily: "Inter_700Bold",
      fontSize: 22,
      lineHeight: 28,
      color: "textPrimary",
    },
    heading5: {
      fontFamily: "Inter_700Bold",
      fontSize: 20,
      lineHeight: 25,
      color: "textPrimary",
    },

    heading6: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 16,
      color: "textPrimary",
    },
    heading7: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 15,
      lineHeight: 18,
      color: "textPrimary",
    },
    heading8: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 13,
      lineHeight: 18,
      color: "textPrimary",
    },
    heading9: {
      fontFamily: "Inter_500Medium",
      fontSize: 20,
      color: "textPrimary",
    },

    contentLabel: {
      fontFamily: "Inter_500Medium",
      fontSize: 15,
      lineHeight: 18,
    },

    labelLarge: {
      fontFamily: "Inter_500Medium",
      fontSize: 18,
      lineHeight: 24,
      color: "onSurface",
    },

    label9: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 15,
      lineHeight: 18,
      color: "onSurface",
    },

    buttonLabel: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 15,
      lineHeight: 18,
      color: "onSurface",
    },

    label1: {
      fontFamily: "Inter_400Regular",
      fontSize: 15,
      lineHeight: 18,
    },

    label2: {
      fontFamily: "Inter_400Regular",
      fontSize: 14,
      lineHeight: 24,
    },

    label3: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 14,
      lineHeight: 18,
      color: "onSurface",
    },
    label4: {
      fontFamily: "Inter_400Regular",
      fontSize: 14,
      lineHeight: 20,
      color: "onSurface",
    },
    label5: {
      fontFamily: "Inter_500Medium",
      fontSize: 15,
      lineHeight: 18,
    },
    label6: {
      fontFamily: "Inter_500Medium",
      fontSize: 11,
      lineHeight: 18,
    },
    label7: {
      fontFamily: "Inter_500Medium",
      fontSize: 12,
      lineHeight: 18,
    },
    label8: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 12,
      lineHeight: 18,
    },
    label10: {
      fontFamily: "Inter_400Regular",
      fontSize: 13,
      lineHeight: 18,
    },
    label11: {
      fontFamily: "Inter_400Regular",
      fontSize: 12,
      lineHeight: 16,
    },
    label12: {
      fontFamily: "Inter_400Regular",
      fontSize: 14,
      lineHeight: 16,
    },
    label13: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 16,
    },

    labelRequired: {
      fontFamily: "Inter_500Medium",
      fontSize: 10,
      lineHeight: 16,
    },

    headerLabel: {
      fontWeight: 600,
      fontFamily: "Inter_500Medium",
      fontSize: 16,
      lineHeight: 21,
      color: "textSecondary",
    },

    bodySecondary: {
      fontFamily: "Inter_400Regular",
      fontSize: {
        phone: 14,
      },
      lineHeight: {
        phone: 20,
      },

      color: "onSurface",
    },

    metadata: {
      fontFamily: "Inter_400Regular",
      fontSize: 12,
      lineHeight: 16,
      color: "onSurface",
    },

    metadataSecondary: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      lineHeight: 16,
      color: "onSurface",
    },

    error: {
      fontFamily: "Inter_400Regular",
      fontSize: 12,
      lineHeight: 16,
      color: "red",
    },

    alertLabel: {
      fontFamily: "Inter_500Medium",
      fontWeight: "600",
      fontSize: 17,
      lineHeight: 22,
    },
  },

  shadowBoxVariants: {
    defaults: {
      borderColor: "grey02",
      borderStyle: "solid",
      backgroundColor: "white",
      elevation: 5,
      shadowColor:
        Platform.OS === "android" ? "androidShadow" : "buttonBackground",
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 25,
    },

    base: {
      elevation: 5,
      shadowColor:
        Platform.OS === "android" ? "androidShadow" : "buttonBackground",
      shadowOpacity: 0.05,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 25,
    },

    dark: {
      elevation: 5,
      backgroundColor: "white",
      shadowColor:
        Platform.OS === "android" ? "androidShadow" : "buttonBackground",
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 12,
    },

    thin: {
      elevation: 4,
      shadowColor:
        Platform.OS === "android" ? "androidShadow" : "buttonBackground",
      shadowOpacity: 0.06,
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 6,
    },

    none: {
      shadowOpacity: 0,
    },
  },

  buttonVariants: {
    defaults: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "grey02",
      borderRadius: "l",
    },

    primary: {
      backgroundColor: "blue",
      borderColor: "blue",
      borderWidth: 1,
    },

    text: {
      backgroundColor: undefined,
      borderWidth: 0,
    },

    textSecondary: {
      backgroundColor: undefined,
      borderWidth: 0,
    },

    reversed: {
      borderWidth: 1,
      borderColor: "blue",
      backgroundColor: "white",
    },
    gradient: {
      color:'white',
    borderWidth: 0,
    borderRadius:0,
      backgroundColor: "transparent",
    },

    icon: {
      borderWidth: 1,
      borderColor: "black",
      backgroundColor: "semiTransparent",
      padding: "s",
    },
    tab: {
      borderRadius: 0,
      borderWidth: 0,
      flex: 1,
      paddingVertical: "m",
    },
    tabActive: {
      borderRadius: 0,
      borderWidth: 0,
      flex: 1,
      paddingVertical: "m",
      backgroundColor: "grey01",
    },
    edit: {
      borderWidth: 1,
      borderColor: "grey03",
      backgroundColor: "grey01",
    },
    editWhite: {
      borderWidth: 1,
      borderColor: "grey03",
      backgroundColor: "grey01",
    },
    editError: {
      borderWidth: 1,
      //borderColor: "alertRed",
      backgroundColor: "grey01",
    },
    editSelected: {
      width: "100%",
      paddingHorizontal: "m",
      borderWidth: 1,
      borderRadius: "xs",
      borderColor: "grey03",
      backgroundColor: "white",
      fontFamily: "Inter_400Regular",
      height: 48,
    },
  },
});

// TODO: Add the web text styles

export type Theme = typeof theme;

export default theme;
