import React from "react";
import { View, StyleSheet } from "react-native";
import RegularText from "../RegularText";
import { Table, Row, Rows } from "react-native-table-component";
import MyText from "../MyText";
import Icon from "react-native-ionicons";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  chapter: string;
  section: string;
  resource_type: string;
  icon: any;
}

const CurrentChapter: React.FC<Props> = ({
  chapter,
  section,
  resource_type,
  icon,
}) => {
  return (
    <View className="bg-card-color rounded-xl mb-8 w-[350px] p-4 flex-row justify-between items-center">
      <View className="flex pl-6">
        <MyText textStyle={{ fontSize: 22 }}>{chapter}</MyText>
        <MyText textStyle={{ fontSize: 15 }}>{section}</MyText>
      </View>
      <View className="pr-6 flex justify-center items-center">
        <Ionicons name={icon} size={24} color="black" />
        <MyText>{resource_type}</MyText>
      </View>
    </View>
  );
};

export default CurrentChapter;
