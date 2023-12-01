import React from "react";
import { View } from "react-native";
import MyText from "../reusable/MyText";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  icon_name: any;
  title: string;
  attribute: string;
}

const Title: React.FC<Props> = ({ icon_name, title, attribute }) => {
  return (
    <View className="flex-row mt-5 justify-start items-center">
      <Ionicons name={icon_name} size={45} color={"black"} />
      <MyText textStyle={{ paddingLeft: 6, fontSize: 22 }}>{title}</MyText>
      <MyText textStyle={{ paddingLeft: 18, fontSize: 22 }}>{attribute}</MyText>
    </View>
  );
};

export default Title;
