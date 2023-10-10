import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "../../screens/home-test";
import { Header, HeaderTitle } from "@react-navigation/elements";
import { Ionicons } from "@expo/vector-icons";
import test from "../../screens/homepage";

const Tab = createBottomTabNavigator();
const options = {
  headerStyle: {
    height: 90,
  },
};

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: "#D8D0EC",
        tabBarLabelStyle: {
          marginBottom: 7,
          color: "#000000",
          fontSize: 13,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Homepage}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="home-sharp" size={24} color={"black"} />
            ) : (
              <Ionicons name="home-outline" size={24} color={"red"} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
