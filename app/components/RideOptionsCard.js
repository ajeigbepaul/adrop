import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTime } from "../../features/navSlice";
const data = [
  {
    id: 1,
    title: "Taxi-Basics",
    multiplier: 1,
    image: require("../../assets/car1.jpeg"),
  },
  {
    id: 2,
    title: "Taxi-Share",
    multiplier: 1.25,
    image: require("../../assets/car5.png"),
  },
  {
    id: 3,
    title: "Taxi-Exclusive",
    multiplier: 2,
    image: require("../../assets/car4.png"),
  },
];
const RideOptionsCard = () => {
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTime);
  const navigation = useNavigation();
  let naira = Intl.NumberFormat("en-NGN");
  let SURGE_CHARGE_RATE = 1.5;
  return (
    <SafeAreaView className="bg-white flex-grow">
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          className="absolute top-3 left-5 z-50 p-3 rounded-full"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text className="py-3 text-center text-sm">
          Select a Ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            className={`flex-row items-center justify-between px-4 ${
              selected?.id === item?.id && "bg-gray-100"
            }`}
            onPress={() => setSelected(item)}
          >
            <Image source={item.image} className="w-20 h-20 object-contain" />
            <View className="-ml-12">
              <Text className="text-[16px] font-semibold">{item.title}</Text>
              <Text>{travelTimeInformation?.duration.text} </Text>
            </View>
            <Text className="text-[16px]">
              {" "}
              ₦{" "}
              {naira.format(
                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * item.multiplier * 10) / 100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View className="pb-7 px-3 ">
        <TouchableOpacity
          className={`bg-gray-800 py-2 rounded-lg ${
            !selected && "bg-gray-400"
          }`}
          disabled={!selected}
        >
          <Text className="text-center text-white text-lg">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
