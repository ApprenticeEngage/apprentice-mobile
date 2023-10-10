import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const MyText = ({ children }) => {
  const [loaded] = useFonts({
    "Assistant-Bold": require("../../assets/fonts/Assistant-Bold.ttf"),
    "Assistant-ExtraBold": require("../../assets/fonts/Assistant-ExtraBold.ttf"),
    "Assistant-Regular": require("../../assets/fonts/Assistant-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontFamily: "Assistant-Bold" }}>{children}</Text>
    </View>
  );
};

export default MyText;
