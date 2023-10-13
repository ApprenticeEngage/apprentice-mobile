import React from 'react'
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
import { testimonial } from '../../types/testimonial';

interface Props {
  testimonies?: testimonial[]; // Add a question mark to make the prop optional
}

const Testimonials: React.FC<Props> = ({ testimonies }) => {
  return (
    <ScrollView className="flex-1" horizontal={true}>
      <View className="m-1 p-3 pl-5  bg-card-color rounded-2xl">
        <MyText textStyle={{ fontSize: 31 }}>
          Testimonials
        </MyText>
        <View className="flex-row items-center justify-around">
          {testimonies?.map((obj, index) => (
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
export default Testimonials