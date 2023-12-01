import React, { ReactElement, ReactNode, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

interface CustomViewProps {
  children: ReactNode;
}

// Load fonts function
const fetchFonts = async () => {
  await Font.loadAsync({
    "Assistant-Bold": require("../../../assets/fonts/Assistant-Bold.ttf"),
    "Assistant-ExtraBold": require("../../../assets/fonts/Assistant-ExtraBold.ttf"),
    "Assistant-Regular": require("../../../assets/fonts/Assistant-Regular.ttf"),
  });
};

const CustomView: React.FC<CustomViewProps> = ({ children }) => {
  // State to track whether fonts are loaded
  const [fontLoaded, setFontLoaded] = useState(false);

  // Check if fonts are not loaded yet, show AppLoading
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts} // Load fonts
        onFinish={() => setFontLoaded(true)} // Set fontLoaded to true when fonts are loaded
        onError={console.warn}
      />
    );
  }

  // Once fonts are loaded, render the custom view
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE9F6",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Assistant-Bold",
    padding: 12,
    minHeight: "100%",
    width: "100%",
  },
  Texts: {
    fontFamily: "Assistant-Bold",
  },
});

export default CustomView;
