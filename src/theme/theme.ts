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
  lightGray: "#f6f6f6",
  lightGray01: "#d0d4db",
  slate: "#1e1f24",
  blue: "#007AFF",
  red: "#FF3B30",
  blueMagenta: "#980ffa",
  orange01: "#cf8600",

  loginGradient: ["#7C94FC", "#B448FD", "#CE46C9"],
  headerGradient: ["#b147fc", "#d147cf", "#f2339c"],
  overAllGradient: ["#f4e8ff", "#f9e6fa", "#fde6f5"],

  myStudentHeader: ["#b14aff", "#d647cd", "#f5369f"],
  guestHeader: ["#ba49f2", "#f7369a", "#f2ae00"],
  loginButtonGradient: ["#b84af7", "#cf49d1", "#f03aa4"],

  addMemberGradient01: ["#00d982", "#00aed1", "#2688ff"],
  learnMoreGradient: ["#00db7c", "#00a8db", "#2684ff"],
  pointGradient: ["#c879ff", "#e371d8", "#f768be"],
  startLearningGradient: ["#5ca0ff", "#8c7dff", "#ad4fff"],

  transparent: "transparent",

  grey02: "rgba(230, 230, 227, 1)",
  semiTransparent: "rgba(255, 255, 255, 0.25)",
  pink: "#ded3d3ff",

  purpleLight: "#E6D7FF",
  purplePrimary: "#8B5CF6",
  purpleDark: "#7C3AED",
  pinkLight: "#F8BBD9",
  pinkPrimary: "#EC4899",
  greenLight: "#86EFAC",
  greenPrimary: "#10B981",
  gray: "#6B7280",
  lightGrey: "#f7f9fa",
  grayLight: "#F3F4F6",
  orange: "#F97316",
  yellow: "#EAB308",

  gold: "#FFD700",
  silver: "#C0C0C0",
  bronze: "#CD7F32",
  grey1: "#E5E7EB",
  activeBorderColor: "#e8d4ff",
  activeBackground: "#f4e8ff",
};

const theme = createTheme({
  colors: {
    background: palette.white,
    onBackground: "#e1f1f5",
    onBackgroundSecondary: "#e1f1f5",
    onBackgroundTertiary: "#e1f1f5",
    surface: palette.white,
    onSurface: palette.textPrimary,
    onSurfaceSecondary: palette.textSecondary,
    buttonBackground: palette.black,
    androidShadow: `rgba(0,0,0,0.7)`,
    buttonText: palette.white,
    mainBackground: palette.purpleLight,
    cardPrimary: palette.white,
    cardSecondary: palette.grayLight,
    primary: palette.purplePrimary,
    secondary: palette.pinkPrimary,
    success: palette.greenPrimary,
    text: palette.black,
    textSecondarys: palette.gray,
    whites: palette.white,
    purple: palette.purplePrimary,
    pinks: palette.pinkPrimary,
    greens: palette.greenPrimary,
    oranges: palette.orange,
    yellows: palette.yellow,
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
    2: 2,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    24: 24,
    32: 32,
    48: 48,
  } as const,

  breakpoints: {
    phone: 0,
    tablet: 768,
  },

  textVariants: {
    header: {
      fontWeight: "bold",
      fontSize: 24,
      color: "white",
    },
    subheader: {
      fontSize: 16,
      color: "white",
      opacity: 0.9,
    },
    body: {
      fontSize: 16,
      color: "text",
    },
    caption: {
      fontSize: 14,
      color: "textSecondary",
    },
    button: {
      fontSize: 14,
      fontWeight: "600",
      color: "white",
    },

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
      fontSize: 30,
      lineHeight: 41,
      fontWeight: "600",
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

    buttonLabel: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 15,
      lineHeight: 18,
      color: "onSurface",
    },

    label1: {
      fontFamily: "Inter_400Regular",
      fontSize: 10,
      lineHeight: 18,
    },

    label2: {
      fontFamily: "Inter_400Regular",
      fontSize: 11,
      lineHeight: 24,
    },

    label3: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 12,
      lineHeight: 18,
      color: "onSurface",
    },
    label4: {
      fontFamily: "Inter_400Regular",
      fontSize: 13,
      lineHeight: 20,
      color: "onSurface",
    },
    label5: {
      fontFamily: "Inter_500Medium",
      fontSize: 14,
      lineHeight: 18,
    },
    label6: {
      fontFamily: "Inter_500Medium",
      fontSize: 15,
      lineHeight: 18,
    },
    label7: {
      fontFamily: "Inter_500Medium",
      fontSize: 16,
      lineHeight: 18,
    },
    label8: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 17,
      lineHeight: 18,
    },
    label9: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 18,
      lineHeight: 18,
      color: "onSurface",
    },

    label10: {
      fontFamily: "Inter_400Regular",
      fontSize: 19,
      lineHeight: 18,
    },
    label11: {
      fontFamily: "Inter_400Regular",
      fontSize: 20,
      lineHeight: 16,
    },
    label12: {
      fontFamily: "Inter_400Regular",
      fontSize: 21,
      lineHeight: 16,
    },
    label13: {
      fontFamily: "Inter_600SemiBold",
      fontSize: 22,
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
      backgroundColor: "black",
      borderWidth: 0,
    },

    textSecondary: {
      backgroundColor: "black",
      borderWidth: 0,
    },

    reversed: {
      borderWidth: 1,
      borderRadius: "s",
      borderColor: "blue",
      backgroundColor: "white",
    },
    gradient: {
      color: "white",
      borderWidth: 0,
      borderRadius: 0,
      backgroundColor: "transparent",
    },

    icon: {
      borderColor: "pink",
      borderWidth: 0.8,
      borderRadius: "s",
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

  cardVariants: {
    defaults: {
      backgroundColor: "cardPrimary",
      borderRadius: "l",
      padding: "m",
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    elevated: {
      backgroundColor: "cardPrimary",
      borderRadius: "l",
      padding: "l",
      shadowColor: "black",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 5,
    },
  },
});

// TODO: Add the web text styles

export type Theme = typeof theme;

export default theme;
