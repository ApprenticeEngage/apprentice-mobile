import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import navButton from "../components/reusable/navButton";
import { Data } from "../contants/data";
import { courseData } from "../contants/data";
import CourseCategory from "../components/reusable/CourseCategory";
import CourseTile from "../components/reusable/CourseTile";

const Home = () => {
  return (
    <ScrollView className="flex-1">
      <View className="p-3">
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
                horizontal={false}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <Text className="max-w-[300px] text-[24px] pt-1 pb-4 pl-[10px]">
          Recommended For You
        </Text>
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

export default Home;
