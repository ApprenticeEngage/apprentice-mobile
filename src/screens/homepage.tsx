import React from "react";
import { View, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import navButton from "../components/navButton";
import { Data } from "../contants/data";
import { courseData } from "../contants/data";
import CourseCategory from "../components/CourseCategory";
import CourseTile from "../components/CourseTile";

const Homepage = () => {
  return (
    <View className="p-3 bg-bg-light flex-1 justify-start content-center min-h-screen w-screen">
      <Text className="max-w-[240px] text-[30px] pt-6 pl-[13px]">
        Find your mentor and Learn a Skill!
      </Text>
      {/* Search bar */}
      <View className="rounded-lg h-[50px] ml-2 mt-4 w-[350px] bg-primary-accent flex-row justify-start items-center">
        <View className="pl-7">
          <Ionicons className="" name={"radio-button-off"} size={32} />
        </View>
        <Text className=" text-center pl-6 text-xl">Search</Text>
      </View>

      <View className="flex-row justify-between items-center">
        <Text className="max-w-[300px] text-[22px] pt-6 pl-[10px]">
          Discover Vocations
        </Text>
        <Text className="max-w-[300px] underline text-[14px] pt-7 pr-3">
          View All
        </Text>
      </View>
      <View className="mb-4">
        <FlatList
          data={Data}
          horizontal={true}
          renderItem={({ item }) => <CourseCategory title={item.title} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View className="flex-1 items-center">
        <FlatList
          data={courseData}
          renderItem={({ item }) => (
            <CourseTile
              title={item.title}
              price={item.price}
              recommendations={item.recommendations}
              author={item.author}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Homepage;
