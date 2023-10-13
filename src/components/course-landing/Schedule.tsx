import React from 'react'
import {View} from "react-native"
import MyText from '../MyText'

const Schedule = () => {
  return (
    <View className='bg-card-color max-w-fit h-[600px] m-1 mt-5 rounded-xl flex justify-start items-center'>
        <MyText textStyle={{fontSize: 31}}> Schedule</MyText>
    </View>  
  )
}

export default Schedule