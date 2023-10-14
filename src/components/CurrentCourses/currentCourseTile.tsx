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
  completed: number;
  horizontal: boolean;
  sections: string[];
}

const CurrentCourseTile: React.FC<CourseProps> = ({
  title,
  horizontal,
  total,
  completed,
  sections,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <ScrollView style={{ flex: 1 }}>
      <View className="rounded-lg h-[180px] w-[350px] mb-3 bg-card-color">
        <View className="rounded-t-lg bg-card-pic h-[75px]"></View>
        <View className="flex-1 mt-1 items-center">
          <MyText textStyle={{ fontSize: 21 }}>{title}</MyText>
          <View className="flex flex-row justify-start items-center p-2">
            <TouchableOpacity>
              <Ionicons name="list" size={21} color={"black"} />
            </TouchableOpacity>
            <MyText
              textStyle={{ fontSize: 20 }}
            >{`${completed} / ${total} completed`}</MyText>
            <Button title="Jump Back!" color={"#AADF26"}></Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CurrentCourseTile;
