import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MaintTab({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "Profile") {
            iconName = focused ? "user" : "user";
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={28} color={"gray"} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitle: "Animekisu",
          headerTitleAlign: "center",
          headerStatusBarHeight: 35,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerTitleAlign: "center",
          headerShown: true,
          headerTransparent: true,
          headerBackgroundContainerStyle: {
            backgroundColor: "rgba(255, 255, 255, 0.5)",
          },
          //   headerTitle: "Search",
          headerLeft: () => (
            // Access navigation prop directly
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 10,
                marginLeft: 15,
              }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back-outline" size={40} color="black" />
            </TouchableOpacity>
          ),
          headerStatusBarHeight: 35,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          // headerTransparent: true,
          headerTitleAlign: "center",
          // headerBackgroundContainerStyle: {
          //   backgroundColor: "rgba(255, 255, 255, 0.5)",
          // },
          headerStatusBarHeight: 35,
          headerLeft: () => (
            // Access navigation prop directly
            <TouchableOpacity
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: 10,
                marginLeft: 15,
              }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back-outline" size={40} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
