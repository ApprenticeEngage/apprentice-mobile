import React from "react";
import { View, StyleSheet } from "react-native";
import MyText from "../MyText";
import Title from "./Title";
import SubTitle from "./subTitle";
import { ScrollView } from "react-native-gesture-handler";
import SectionTile from "./SectionTile";

const Curriculum = () => {
  return (
    <View className="h-auto bg-card-color pl-4 m-1 mt-5 rounded-2xl flex-col ">
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

const curriculum = {
  sections: [
    {
      id: "section1",
      title: "Section 1",
      chapters: [
        {
          id: "1",
          title: "Chapter 1",
          type: "video",
        },
        {
          id: "2",
          title: "Chapter 2",
          type: "article",
        },
      ],
    },
    {
      id: "section2",
      title: "Section 2",
      chapters: [
        {
          id: "3",
          title: "Chapter 3",
          type: "video",
        },
        {
          id: "4",
          title: "Chapter 4",
          type: "video",
        },
      ],
    },
  ],
};


export default Curriculum;
