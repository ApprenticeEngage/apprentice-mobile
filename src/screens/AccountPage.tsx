import React from "react";
import { View, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import MyText from "../components/MyText";
import { Ionicons } from "@expo/vector-icons";
import { announcements, courseData } from "../contants/data";
import BulletList from "../components/course-landing/BulletList";
import Instructor from "../components/course-landing/Instructor";
import Schedule from "../components/course-landing/Schedule";
import Curriculum from "../components/course-landing/Curriculum";
import Testimonials from "../components/course-landing/Testimonials";
import { testimonials } from "../contants/data";
import RegularText from "../components/RegularText";
import CourseTile from "../components/CourseTile";
import CurrentChapter from "../components/course-AfterEnrollement/CurrentChapter";
import CurrentCourseTile from "../components/CurrentCourses/currentCourseTile";
import CompletedCourseTile from "../components/CurrentCourses/completedCourseTile";

interface Props {
  username: string;
  skills: number;
}

const AccountPage: React.FC<Props> = ({ username, skills }) => {
  return (
    <ScrollView className="flex-1">
      <View className="bg-bg-light min-h-screen">
        <View className="flex pt-10 pl-4">
          <View className="flex-row justify-between items-center pr-3">
            <RegularText textStyle={style.title}>User's Account</RegularText>
            <Ionicons name="settings-sharp" size={24} color="black" />
          </View>

          <View className="bg-card-color rounded-xl mt-2 w-[360px] h-[300px]">
            <View className="flex-row justify-between  items-center m-4">
              <View className="bg-card-pic w-[100px] h-[90px] rounded-lg"></View>
              <View className="flex justify-between w-[200px] items-start">
                <MyText textStyle={{ fontSize: 22 }}>
                  Username:{username}
                </MyText>
                <MyText textStyle={{ fontSize: 22 }}>
                  Skills Earned: 45{skills}
                </MyText>
              </View>
            </View>

            <View className="flex-row justify-around items-center  p-4">
              <View className="p-1 flex justify-center items-center bg-curriculum h-[80px] w-[160px] mr-6 rounded-lg">
                <View className="flex-row justify-start items-center pl-8">
                  <View className="flex-row justify-center items-center pl-8">
                    <MyText textStyle={{ fontSize: 19 }}>Courses</MyText>
                  </View>
                  <View className="flex-row justify-end pl-3">
                    <MyText textStyle={{ fontSize: 32 }}>12</MyText>
                  </View>
                </View>
                <View className="flex-row justify-start pl-1">
                  <MyText textStyle={{ fontSize: 19 }}>Completed</MyText>
                </View>
              </View>

              <View className="p-1 flex justify-center items-center bg-curriculum h-[80px] w-[160px] rounded-lg">
                <View className="flex-row justify-start items-center pl-8">
                  <View className="flex-row justify-center items-center pl-8">
                    <MyText textStyle={{ fontSize: 19 }}>Enrolled</MyText>
                  </View>
                  <View className="flex-row justify-end pl-3">
                    <MyText textStyle={{ fontSize: 32 }}>6</MyText>
                  </View>
                </View>
                <View className="flex-row justify-start pl-1">
                  <MyText textStyle={{ fontSize: 19 }}>In</MyText>
                </View>
              </View>


            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 35,
    textAlign: "left",
    marginBottom: 5,
  },
  subheading: {
    fontSize: 20,
    paddingTop: 10,
  },
});

export default AccountPage;
