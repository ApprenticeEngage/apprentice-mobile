import React from "react";
import { View } from "react-native";
import MyText from "../MyText";
import Title from "./Title";

const Schedule = () => {
  return (
    <View className="bg-card-color h-[600px] pl-4 m-1 mt-5 rounded-xl flex flex-col justify-center items-start">
      <MyText textStyle={{ fontSize: 31, paddingTop: 14 }}> Schedule</MyText>
      <Title
        icon_name="ios-barcode-sharp"
        title="Course Difficulty"
        attribute="Lvl 9"
      ></Title>
      <Title icon_name="pie-chart" title="Pre-Requisites" attribute=""></Title>
      <Title
        icon_name="timer-sharp"
        title="Completion Time"
        attribute="3 weeks"
      ></Title>
      <Title icon_name="calendar" title="Schedule" attribute=""></Title>
    </View>
  );
};

export default Schedule;
