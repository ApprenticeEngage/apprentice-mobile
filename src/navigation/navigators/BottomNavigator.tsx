import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "../../screens/homepage";

const Tab = createBottomTabNavigator();
const options = {
  headerStyle: {
    height: 90,
  },
  
};

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={options}>
      <Tab.Screen name="Home" component={Homepage} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
