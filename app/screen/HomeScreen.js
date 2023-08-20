import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white flex-1 pt-10">
      <View className="p-4">
        <View>
          <Image
            source={require("../../assets/droplogo.jpg")}
            className="w-20 h-20"
          />
        </View>
        <NavOptions/>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
