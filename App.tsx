
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
import { navigationRef } from "./src/navigation/RootNavigation";
import RootStack from "./src/navigation/RootStack";
import React, { useEffect } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import theme from "./src/theme/theme";
export default function App() {


  useEffect(() => {
    // DevSettings.reload();
    //DevSettings.show();
  }, []);
  return (
    // <>
    //   <Text>{"Heloo...."}</Text>
    // </>
    // <AuthProvider>
    <SafeAreaView style={{flex:1}}>
      <ThemeProvider theme={theme}>
        <RootStack />
      </ThemeProvider>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
