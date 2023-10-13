import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MyText from "../components/MyText";
import { Ionicons } from "@expo/vector-icons";
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

          <View className="flex-row justify-between">
            <View className="flex-row justify-center m-3 w-[150px] items-center">
              <Ionicons name="people-sharp" size={24} color="black" />
              <MyText textStyle={{ color: "#fffff" , paddingLeft: 5}}>Enrollments</MyText>
            </View>
            <View className="flex-row justify-center m-3 w-[150px] items-center">
              <Ionicons name="star-sharp" size={24} color="black" />
              <MyText textStyle={{ color: "#fffff" , paddingLeft: 5}}>Ratings</MyText>
            </View>
          </View>

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
    paddingTop: 5,
    marginBottom: 4,
    height: 120
  },
  subheading: {
    fontSize: 20,
    paddingTop: 10,
  },
});

const BulletStyle = {
  container: {},
};

export default CourseLanding;
