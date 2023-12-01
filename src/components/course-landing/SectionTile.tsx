import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import MyText from "../reusable/MyText";
import { Ionicons } from "@expo/vector-icons";
import Title from "./Title";
import SubTitle from "./subTitle";
import { ScrollView } from "react-native-gesture-handler";
import { Curriculum, Section } from "../../types/curriculum";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  section: any;
}
const SectionTile = ({ section }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View className="p-6  mb-3 bg-curriculum rounded-2xl">
      <View className="flex-row items-center justify-around">
        <TouchableWithoutFeedback onPress={() => setExpanded(!expanded)}>
          <View className="flex-row justify-evenly items-center">
            <MyText
              textStyle={{ fontSize: 18 }}
            >{`${section.id}        -`}</MyText>
            <MyText textStyle={{ fontSize: 18 }}>{section.title}</MyText>
            {expanded ? (
              <FontAwesome name="minus-circle" size={24} color="black" />
            ) : (
              <Ionicons name="add-circle" size={24} color="black" />
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
      {expanded && (
        <View className="mt-2 flex justify-center items-center">
          {section.chapters.map((chapter) => (
            <View className="flex-1 flex-row justify-center items-center">
              <MyText textStyle={{ fontSize: 18 }}>{chapter.id}</MyText>
              <View className="flex flex-1 justify-center items-center">
                <MyText textStyle={{ fontSize: 18 }}>{chapter.title}</MyText>
                <MyText textStyle={{ fontSize: 18 }}>{chapter.type}</MyText>
              </View>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default SectionTile;
