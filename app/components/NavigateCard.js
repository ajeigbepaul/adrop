import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination } from '../../features/navSlice';
import { useNavigation } from '@react-navigation/native';
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
      </View>
    </SafeAreaView>
  );
}

export default NavigateCard