import { View, Text, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";
import * as Icons from "react-native-heroicons/outline";

const data = [
  {
    id: 1,
    title: "Get a ride",
    image: require("../../assets/ride.jpg"),
    screen: "MapScreen",
  },
  {
    id: 2,
    title: "Order food",
    image: require("../../assets/food.jpeg"),
    screen: "EatsScreen",
  },
];
const NavOptions = () => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity className="bg-gray-100 m-2 p-3 w-fit rounded-lg shadow-md">
          <View>
            <Image source={item.image} className="w-32 h-32 object-cover" />
            <Text className="text-sm font-semibold mt-3">{item.title}</Text>
            <View className="w-10 h-10 rounded-full bg-yellow-400 mt-3 items-center justify-center">
              <Icons.ArrowRightIcon color="white" />
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
