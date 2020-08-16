import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { AntDesign, Entypo } from "@expo/vector-icons";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import GalleryMain from "../screens/GalleryMain";
import Home from "../screens/Home";
import About from "../screens/About";

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Gallery"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        keyboardHidesTabBar: true,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Gallery"
        component={GalleryMain}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="images" size={24} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="About Us"
        component={About}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="phone" size={24} color="black" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  console.log(props);
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: "Home" }}
      />
    </HomeStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Gallery" }}
      />
    </TabTwoStack.Navigator>
  );
}
