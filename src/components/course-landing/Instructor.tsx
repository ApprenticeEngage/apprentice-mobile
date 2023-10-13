import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MyText from "../MyText";

interface Props {
  name: string;
  rating: number;
}

const Instructor: React.FC<Props> = ({name, rating }: Props) => {
  return (
    <View className="h-[60px] flex-row justify-start mt-4">
      <Ionicons name="radio-button-on" size={45} color={"black"} />
      <View className="flex-1 flex-col justify-start h-[45px] pl-4">
        <MyText textStyle={{ fontSize: 20 }}>{name}</MyText>
        <MyText textStyle={{ fontSize: 15 }}>{rating} stars</MyText>
      </View>
    </View>
  );
};

export default Instructor;
