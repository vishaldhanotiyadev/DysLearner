// RootNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import { navigationRef } from "navigation/RootNavigation";
import { SafeAreaView } from "react-native-safe-area-context";

const RootNavigator = () => {
  // const { isLoggedIn } = useAuth();
  // console.log("isLoggedIn========", isLoggedIn);
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView style={{flex:1}}>
      {/* <UserProvider> */}
        {false ? <AppNavigator /> : <AuthNavigator />}
      {/* </UserProvider> */}
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default RootNavigator;
