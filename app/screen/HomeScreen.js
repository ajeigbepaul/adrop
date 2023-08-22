import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import { useDispatch, useSelector } from "react-redux";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_KEY } from "@env";
import { setDestination, setOrigin } from "../../features/navSlice";
import { useNavigation } from "@react-navigation/native";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white flex-1 pt-10">
      <View className="p-4">
        <View>
          <Image
            source={require("../../assets/droplogo.jpg")}
            className="w-20 h-20"
          />
        </View>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          nearbyPlacesAPI="googlePlacesSearch"
          debounce={400}
          enablePoweredByContainer={false}
          returnKeyType={"search"}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location:details.geometry.location,
              description:data.description
            }));
            dispatch(setDestination(null))
          }}
          fetchDetails={true}
          minLength={2}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          query={{
            key: GOOGLE_MAPS_KEY,
            language: "en",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
