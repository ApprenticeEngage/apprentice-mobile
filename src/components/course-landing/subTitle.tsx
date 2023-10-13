import React from "react";
import { View } from "react-native";
import MyText from "../MyText";
import { ScrollView } from "react-native-gesture-handler";

interface Props {
  title: string;
  attribute: string;
}

const SubTitle: React.FC<Props> = ({ title, attribute }) => {
  return (
    <View className="mt-2">
      <MyText textStyle={{ fontSize: 15 }}>{`${attribute}  ${title}`}</MyText>
    </View>
  );
};

export default SubTitle;
