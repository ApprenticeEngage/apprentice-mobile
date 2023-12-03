import React from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Style } from "nativewind/dist/style-sheet/runtime";
import MyText from "../MyText";

interface CustomStyle {
  container?: ViewStyle;
  iconSize?: number;
  iconColor?: string;
}

interface Props {
  data: string[],
  style?: CustomStyle,
  icon : any
}

const BulletList = ({ icon, data, style }: Props) => {
  return (
    <View style={style?.container}>
      {data.map((item, index) => (
        <View key={index} className="flex-row justify-start items-center">
          <Ionicons
            name={icon}
            size={style?.iconSize || 20}
            color={style?.iconColor}
          />
          <MyText textStyle={{ fontSize: 18, paddingLeft: 6 }}>{item}</MyText>
        </View>
      ))}
    </View>
  );
};

export default BulletList;
