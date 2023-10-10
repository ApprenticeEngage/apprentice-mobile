import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import React, { useState } from "react";
import TabNavigator from "./src/navigation/navigators/BottomNavigator";
import Homepage from "./src/screens/home-test";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "Assistant-Bold": require("./assets/fonts/Assistant-Bold.ttf"),
    "Assistant-ExtraBold": require("./assets/fonts/Assistant-ExtraBold.ttf"),
    "Assistant-Regular": require("./assets/fonts/Assistant-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
