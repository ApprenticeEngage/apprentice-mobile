import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "../../screens/homepage";
import TabNavigator from "./BottomNavigator";
import SignUpScreen from "../../auth/_login";

const Stack = createStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawable"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

export default StackNav;
