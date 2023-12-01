import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MyText from "../components/reusable/MyText";
import { Ionicons } from "@expo/vector-icons";
import { announcements, courseData } from "../contants/data";
import BulletList from "../components/course-landing/BulletList";
import Instructor from "../components/course-landing/Instructor";
import Schedule from "../components/course-landing/Schedule";
import Curriculum from "../components/course-landing/Curriculum";
import Testimonials from "../components/course-landing/Testimonials";
import { testimonials } from "../contants/data";
import RegularText from "../components/reusable/RegularText";
import CourseTile from "../components/reusable/CourseTile";
import CurrentChapter from "../components/course-AfterEnrollement/CurrentChapter";
import CurrentCourseTile from "../components/CurrentCourses/currentCourseTile";

const CourseHome = () => {
  return (
    <ScrollView className="flex-1">
      <View className="bg-bg-light min-h-screen">
        <View className="bg-card-pic w-screen h-[125px]"></View>
        <View className="p-4">
          <RegularText textStyle={style.title}>Title of Vocation</RegularText>
          {/* Current Chapter Section */}
          <MyText textStyle={{ fontSize: 31, marginBottom: 6 }}>
            Currently Learning
          </MyText>
          <CurrentChapter
            chapter="Chapter"
            section="Section"
            icon={"videocam"}
            resource_type="Video"
          />
          {/* Tests Section */}
          <MyText textStyle={{ fontSize: 31, marginBottom: 6 }}>
            Upcoming Tests
          </MyText>
          <CurrentChapter
            chapter="Test 1"
            section="Section"
            icon={"document"}
            resource_type="Book"
          />
          {/* Announcements Section */}
          <MyText textStyle={{ fontSize: 31, marginBottom: 6 }}>
            Announcements
          </MyText>
          <Testimonials choice="Announcements" announcements={announcements} />
          <Curriculum />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: "left",
    paddingTop: 5,
    fontWeight: "",
    height: 80,
  },
  subheading: {
    fontSize: 20,
    paddingTop: 10,
  },
});

export default CourseHome;
