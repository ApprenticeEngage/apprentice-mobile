import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { setCustomText } from "react-native-global-props";
import * as Font from "expo-font";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "Assistant-Bold": require("./assets/fonts/Assistant-Bold.ttf"),
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
      <Text style={styles.Texts}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text  className="bg-primary-green text-[40px]">
        Hello World regarding today
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Texts: {
    fontFamily: "Assistant-Bold"
  },
});
