import React from 'react'
import {View, Text} from "react-native"
import CustomView from '../components/CustomView'
import { ScrollView } from 'react-native-gesture-handler'
import MyText from '../components/MyText'

const CourseLanding = () => {
  return (
    <ScrollView className="flex-1">
      <View className="w-screen h-screen flex items-center justify-center">
          <View className="p-20">
            <MyText>Hello</MyText>
          </View>
      </View>
    </ScrollView>
  );
}

export default CourseLanding