import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import AppNavigation from "./app/navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaProvider>
          <AppNavigation />
        </SafeAreaProvider>
      </Provider>
    </NavigationContainer>
  );
}
