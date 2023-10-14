import React from "react";
import { View, StyleSheet } from "react-native";
import MyText from "../MyText";
import Title from "./Title";
import SubTitle from "./subTitle";
import { ScrollView } from "react-native-gesture-handler";
import SectionTile from "./SectionTile";
import { curriculum } from "../../contants/data";

const Curriculum = () => {
  return (
    <View className="h-auto bg-card-color pl-2 m-2 mt-5 rounded-2xl flex-col ">
      <MyText textStyle={{ fontSize: 31, paddingTop: 14 }}> Curriculum</MyText>
      <View className="flex-1 flex-row justify-around">
        <SubTitle title="Sections" attribute="5" />
        <SubTitle title="Lectures" attribute="20" />
        <SubTitle title="Total Length" attribute="10 hr 20 min" />
      </View>
      <View className="p-4">
        {curriculum.sections.map((section, index) => (
          <SectionTile section={section} />
        ))}
      </View>
    </View>
  );
};




export default Curriculum;
