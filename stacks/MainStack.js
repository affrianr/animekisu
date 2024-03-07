import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Details from "../screens/Detail";
import { Pressable, TouchableOpacity } from "react-native";
import MaintTab from "../tabs/MainTab";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={MaintTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Details}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            // Access navigation prop directly
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 10,
              }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back-outline" size={40} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
