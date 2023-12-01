import React from "react";
import { View, Text } from "react-native";

interface CourseProps {
  title: string;
  price: number;
  recommendations: number;
  author: string;
  horizontal: boolean;
}

const CourseTile: React.FC<CourseProps> = ({
  title,
  price,
  recommendations,
  author,
  horizontal,
}) => {
  const viewClassName = `rounded-lg h-[200px] w-[350px] mb-3  bg-card-color ${
    horizontal ? "ml-3" : ""
  }`;

  return (
    <View className={viewClassName}>
      <View className="rounded-t-lg bg-card-pic h-[75px]"></View>
      <View className="flex-1 justify-center pl-6 mt-1 items-start">
        <Text className="text-[20px] font-bold text-center mb-2">{title}</Text>
        <Text className="text-[17px]">Price: {price}</Text>
        <Text className="text-[17px]">
          # of Recommendations: {recommendations}
        </Text>
        <Text className="text-[17px]">Author: {author}</Text>
      </View>
    </View>
  );
};

export default CourseTile;
