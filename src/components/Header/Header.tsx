import { Box, Text } from "@components/Restyle";
import { goBack } from "@navigation/RootNavigation";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "theme/images";
import { palette } from "theme/theme";

export default function Header({ gradient, title, subTitle }: any) {
  return (
    <LinearGradient
      colors={gradient ?? palette.headerGradient}
      start={{ x: 0.1, y: 0.3 }}
      end={{ x: 1.1, y: 1 }}
    >
      <SafeAreaView>
        <Box paddingHorizontal="l" paddingVertical={"m"}>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box flexDirection="row" alignItems="center">
              <TouchableOpacity onPress={() => goBack()}>
                <Image style={styles.logos} source={Images.BackIcon} />
              </TouchableOpacity>
              <Box>
                <Text variant="header" fontSize={20}>
                  {title}
                </Text>
                <Text variant="subheader" fontSize={14}>
                  {subTitle}
                </Text>
              </Box>
            </Box>
            {/* Profile Icon */}
            <Box
              width={40}
              height={40}
              borderRadius="xl"
              backgroundColor="semiTransparent"
              alignItems="center"
              justifyContent="center"
            >
              <Image style={styles.profile} source={Images.PeopleIcon} />
            </Box>
            {/* <Box  borderRadius="xl" paddingHorizontal="m" paddingVertical="xs">
                <Text variant="button" fontSize={12}>
                  Level 5
                </Text>
              </Box> */}
          </Box>
        </Box>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  },
  logo: {
    width: 75,
    height: 75,
    marginBottom: 10,
    alignSelf: "center",
  },
  logos: {
    width: 20,
    height: 20,
    marginRight: 15,
    alignSelf: "center",
  },
  profile: {
    width: 22,
    height: 22,
    alignSelf: "center",
  },
});
