import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import MyText from "../MyText";
import { Ionicons } from "@expo/vector-icons";
import Title from "./Title";
import SubTitle from "./subTitle";
import { ScrollView } from "react-native-gesture-handler";
import { Curriculum, Section } from "../../types/curriculum";
import { FontAwesome } from "@expo/vector-icons";
import { testimonial } from "../../types/testimonial";
import { Announcment } from "../../types/announcements";

//this component is to be used for both announcments and testimonials; so a choice flag is added to the prop
//if choice == "announcements" then announcements data is dispalyed otherwise testimonials
interface Props {
  testimonies?: testimonial[]; // Add a question mark to make the prop optional
  choice: "Testimonials" | "Announcements"; // Define choice as either "testimonials" or "announcements"
  announcements?: Announcment[];
}

const Testimonials: React.FC<Props> = ({
  testimonies,
  choice,
  announcements,
}) => {
  const data = choice === "Announcements" ? announcements : testimonies;

  return (
    <ScrollView className="flex-1" horizontal={true}>
      <View className="m-2 p-4 pl-5 bg-card-color rounded-2xl">
        {choice === "Testimonials" && (
          <MyText textStyle={{ fontSize: 31, marginBottom: 10 }}>
            {choice}
          </MyText>
        )}
        <View className="flex-row items-start justify-between">
          {data?.map((obj, index) => (
            <View
              className="bg-curriculum h-[147px] w-[247px] rounded-2xl p-6 flex-row justify-center items-center mr-3"
              key={index}
            >
              <Ionicons name="person" size={24} color="black" />
              <View className="flex justify-start items-start pl-5">
                <MyText textStyle={{ fontSize: 21 }}>{obj?.person}</MyText>
                <MyText textStyle={{ fontSize: 15 }}>{obj?.comment}</MyText>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Testimonials;
