import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MyText from "../components/MyText";
import { Ionicons } from "@expo/vector-icons";
import { courseData } from "../contants/data";
import BulletList from "../components/course-landing/BulletList";
import Instructor from "../components/course-landing/Instructor";
import Schedule from "../components/course-landing/Schedule";
import Curriculum from "../components/course-landing/Curriculum";
import Testimonials from "../components/course-landing/Testimonials";
import { testimonials } from "../contants/data";
import CourseTile from "../components/CourseTile";

const CourseLanding = () => {
  return (
    <ScrollView className="flex-1">
      <View className="bg-bg-light">
        <View>
          <View className="bg-card-pic w-screen h-[125px]"></View>
          <View className="bg-card-color pl-4 rounded-b-xl w-screen h-[500px]">
            <MyText textStyle={style.title}>Title of Vocation</MyText>

            <MyText textStyle={style.subheading}>Who Is this Course for</MyText>
            <BulletList icon="chevron-forward-outline" data={data}></BulletList>
            <MyText textStyle={style.subheading}>What You Will Learn</MyText>
            <BulletList icon="chevron-forward-outline" data={data}></BulletList>

            <Instructor name="Hamid" rating={4.5}></Instructor>

            <View className="flex-row justify-between">
              <View className="flex-row justify-center m-3 w-[150px] items-center">
                <Ionicons name="people-sharp" size={24} color="black" />
                <MyText textStyle={{ color: "#fffff", paddingLeft: 5 }}>
                  Enrollments
                </MyText>
              </View>
              <View className="flex-row justify-center m-3 w-[150px] items-center">
                <Ionicons name="star-sharp" size={24} color="black" />
                <MyText textStyle={{ color: "#fffff", paddingLeft: 5 }}>
                  Ratings
                </MyText>
              </View>
            </View>

            <View className="pl-16 pb-3 ">
              <View className="flex-col justify-center items-center rounded-lg h-[50px] w-[200px] bg-primary-accent ">
                <MyText textStyle={{ fontSize: 20 }}>Enroll Me</MyText>
              </View>
            </View>
          </View>
        </View>

        <Schedule />

        <Curriculum />

        <Testimonials testimonies={testimonials} choice="Testimonials" />
        <MyText textStyle={{ fontSize: 31, padding: 5, paddingLeft: 18 }}>
          Similar Courses
        </MyText>
        <View className="flex-1 items-center">
          <FlatList
            data={courseData}
            horizontal={true}
            renderItem={({ item }) => (
              <CourseTile
                title={item.title}
                price={item.price}
                recommendations={item.recommendations}
                author={item.author}
                horizontal={true}
              />
            )}
            keyExtractor={(item) => item.id}
          />
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
    height: 120,
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
