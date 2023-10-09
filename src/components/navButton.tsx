import React from 'react'
import { View } from "react-native";
interface NavButtonProps {
  icon: React.ReactNode;
}

const navButton: React.FC<NavButtonProps> = ({icon}) => {
  return (
    <View className='bg-primary-green text-center'>
      {icon}
    </View>
  );
}

export default navButton