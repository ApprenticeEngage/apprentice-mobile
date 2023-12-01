import React from 'react'
import { View, Text } from 'react-native'

interface CategoryChip {title: string}


const CourseCategory:React.FC<CategoryChip> = ({title}) => {
  return (
    <View className='ml-2 mt-2 p-2 pr-3 pl-3 rounded-2xl h-[35px] bg-primary-accent'>
        <Text className="text-center font-bold">{title}</Text>
    </View>
  )
}

export default CourseCategory