import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="information-box" size={24} color={color} />
          )
        }}
        />
      <Tabs.Screen
        name="first"
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="numeric-1-box" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="second"
        options={{
          popToTopOnBlur: true,
          headerShown: false,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="numeric-2-box" size={24} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="third"
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="numeric-3-box" size={24} color={color} />
          )
        }}
      />
    </Tabs>
  )
}
