import { View, Text, Platform } from "react-native";
import React from "react";
import { SafeAreaView, KeyboardAvoidingView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/HomeScreen";
import MapScreen from "../screen/MapScreen";

const Stack = createStackNavigator();
const AppNavigation = () => {
  return (
    <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === "ios" ? "padding":"height"}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </KeyboardAvoidingView>
  );
};

export default AppNavigation;
