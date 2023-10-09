import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { setCustomText } from "react-native-global-props";
import * as Font from "expo-font";
import React, { useState } from "react";
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
    <View style={styles.container}>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Assistant-Regular",
  },
  Texts: {
    fontFamily: "Assistant-Bold",
  },
});
