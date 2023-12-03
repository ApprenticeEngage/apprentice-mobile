import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Style } from "nativewind/dist/style-sheet/runtime";

interface Props {
  children: ReactNode;
  textStyle?: Style;
}

const MyText = ({ children, textStyle }: Props) => {
  const [loaded] = useFonts({
    "Assistant-Regular": require("../../assets/fonts/Assistant-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  // Define a default style for text, including the default font family
  const defaultTextStyle = {
    fontFamily: "Assistant-Regular",
    // Add other default text styles here
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={[defaultTextStyle, textStyle]}>{children}</Text>
    </View>
  );
};

export default MyText;
