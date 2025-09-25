// AuthNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "screens/Login/Login";
import StudentDashboard from "screens/StudentDashboard/StudentDashboard";
import LearningPlan from "screens/LearningPlan/LearningPlan";
import MyStudent from "screens/MyStudent/MyStudent";
import AddNewStudent from "screens/AddNewStudent/AddNewStudent";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="StudentDashboard" component={StudentDashboard} />
    <Stack.Screen name="LearningPlan" component={LearningPlan} />
    <Stack.Screen name="MyStudent" component={MyStudent} />
    <Stack.Screen name="AddNewStudent" component={AddNewStudent} />
  </Stack.Navigator>
);

export default AuthNavigator;
