import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import navButton from "../components/navButton";

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

    
    </View>
  );
};

export default Homepage;
