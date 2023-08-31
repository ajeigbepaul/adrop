import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../../features/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavorite from './NavFavorite';
import { Icon } from "@rneui/base";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation()
  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center text-xl">Good Morning, Paul</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
            nearbyPlacesAPI="googlePlacesSearch"
            debounce={400}
            enablePoweredByContainer={false}
            returnKeyType={"search"}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            fetchDetails={true}
            minLength={2}
            styles={{
              container: {
                flex: 0,
              },
              textInputContainer: {
                // backgroundColor: "orange",
                paddingHorizontal: 15,
                paddingVertical: 15,
              },
              textInput: {
                fontSize: 18,
                backgroundColor: "#e5e5e5",
              },
            }}
            query={{
              key: GOOGLE_MAPS_KEY,
              language: "en",
            }}
          />
        </View>
        <NavFavorite />
      </View>
      <View className="flex-row mt-5 border-t py-2 border-gray-200 items-center justify-evenly bg-white">
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptionsCard")}
          className="bg-gray-800 flex justify-between items-center flex-row w-20 space-x-1 px-2 py-2 rounded-full"
        >
          <Icon name="car" type="font-awesome" color="white" />
          <Text className="text-center text-white">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" flex justify-between items-center flex-row w-20 space-x-1 px-2 py-2 rounded-full">
          <Icon name="fast-food-outline" type="ionicon" color="gray" />
          <Text className="text-center text-gray-800">Rides</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default NavigateCard