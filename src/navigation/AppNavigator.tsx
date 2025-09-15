// AppNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "screens/Login/Login";


const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="DashBoard"
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="DashBoard" component={LoginScreen} />
    {/* <Stack.Screen name="Notifications" component={Notifications} />
    <Stack.Screen
      name="CriticalBusinessAlert"
      component={CriticalBusinessAlert}
    /> */}
    {/* Other authenticated screens */}
  </Stack.Navigator>
);

export default AppNavigator;
