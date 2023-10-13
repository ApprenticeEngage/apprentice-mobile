import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomView from "../components/CustomView";
import { ScrollView } from "react-native-gesture-handler";
import MyText from "../components/MyText";
import BulletList from "../components/course-landing/BulletList";
import Instructor from "../components/course-landing/Instructor";

const CourseLanding = () => {
  return (
    <ScrollView className="flex-1">
      <View className="w-screen h-screen flex justify-start bg-bg-light">
        <View className="bg-card-pic w-screen h-[125px]"></View>
        <View className="bg-card-color pl-4 rounded-b-xl w-screen h-[400px]">
          <MyText textStyle={style.title}>Title of Vocation</MyText>
          <MyText textStyle={style.subheading}>Who Is this Course for</MyText>
          <BulletList data={data}></BulletList>
          <MyText textStyle={style.subheading}>What You Will Learn</MyText>
          <BulletList data={data}></BulletList>
          <Instructor name="Hamid" rating={4.5}></Instructor>
        </View>
      </View>
    </ScrollView>
  );
};

const data = ["hello", "world", "is bad!"];

const style = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: "left",
    paddingTop: 6,
  },
  subheading: {
    fontSize: 20,
    paddingTop: 5,
  },
});

const BulletStyle = {
  container: {},
};

export default CourseLanding;
