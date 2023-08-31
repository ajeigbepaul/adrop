import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import {HomeIcon, BriefcaseIcon} from "react-native-heroicons/solid";
const data = [
  {
    id: 1,
    icon:  HomeIcon ,
    location: "Home",
    destination: "Ayobo, Ipaja Lagos",
  },
  {
    id: 2,
    icon: BriefcaseIcon ,
    location: "Work",
    destination: "Victoria Island, Lagos",
  },
];
const NavFavorite = () => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={()=><View className="h-[0.7] bg-gray-200"/>}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { icon: Icon, location, destination } }) => (
        <TouchableOpacity className="flex-row py-3 px-4">
          <View className="bg-yellow-400 rounded-full p-3 mr-4">
            <Icon color="white" size={20} />
          </View>
          <View>
            <Text className="font-semibold text-lg">{location}</Text>
            <Text className="text-gray-400">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
const styles = StyleSheet.create({
  bgstyle:{
   backgroundColor:"gray",
   borderRadius:25,
   padding:16
   
  }
})
export default NavFavorite;
