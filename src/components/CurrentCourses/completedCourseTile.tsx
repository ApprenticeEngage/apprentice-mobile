import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Button,
} from "react-native";
import MyText from "../MyText";
import { Ionicons } from "@expo/vector-icons";

interface CourseProps {
  title: string;
  total: number;
}

const CurrentCourseTile: React.FC<CourseProps> = ({ title, total }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View className="rounded-lg h-[180px] w-[350px] mb-3 bg-card-color">
        <View className="rounded-t-lg bg-card-pic h-[75px]"></View>
        <View className="flex-1 mt-1 items-center">
          <MyText textStyle={{ fontSize: 21 }}>{title}</MyText>
          <View className="flex flex-row justify-start items-center p-2">
            <TouchableOpacity>
              <Ionicons name="checkbox-outline" size={21} color={"black"} />
            </TouchableOpacity>
            <MyText
              textStyle={{ fontSize: 20 }}
            >{`${total} / ${total} completed`}</MyText>
            <Button title="Jump Back!" color={"#AADF26"}></Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CurrentCourseTile;
