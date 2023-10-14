import React, { useState } from "react";
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

const CourseProgress = () => {
  const [selectedView, setSelectedView] = useState("ongoing");

  const handleViewSelection = (view) => {
    setSelectedView(view);
  };

  return (
    <ScrollView className="flex-1">
      <View className="bg-bg-light min-h-screen">
        <View className="flex justify-start items-center pt-10">
          <RegularText textStyle={style.title}>Course History</RegularText>
          <View className="flex-row mb-6">
            <TouchableOpacity
              onPress={() => handleViewSelection("ongoing")}
              className={`${
                selectedView === "ongoing"
                  ? "bg-primary-green"
                  : "bg-primary-accent"
              } p-4 rounded-2xl mr-16`}
            >
              <MyText textStyle={{ fontSize: 20 }}>Ongoing</MyText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleViewSelection("completed")}
              className={`${
                selectedView === "completed"
                  ? "bg-primary-green"
                  : "bg-primary-accent"
              } p-4 rounded-2xl`}
            >
              <MyText textStyle={{ fontSize: 20 }}>Completed</MyText>
            </TouchableOpacity>
          </View>

          {selectedView === "ongoing" && (
            <CurrentCourseTile
              title={item.title}
              horizontal={true}
              sections={sections}
              total={3}
              completed={1}
            />
          )}

          {selectedView === "completed" && (
            <CompletedCourseTile title={item.title} total={3} />
          )}
        </View>
      </View>
    </ScrollView>
  );
};

const item = {
  id: "1",
  title: "Introduction to Programming",
  price: 4.67,
  recommendations: 32,
  author: "Al-shevidat",
};

const sections = ["First", "Second", "Third"];
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

export default CourseProgress;
