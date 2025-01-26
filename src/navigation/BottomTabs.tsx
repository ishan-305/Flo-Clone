import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Calendar,
  BarChart2,
  MessageCircle,
  Users,
  MessageSquare,
} from "lucide-react-native";
import TodayScreen from "../../app/screens/TodayScreen";
import InsightsScreen from "../../app/screens/InsightScreen";
import SecretChatsScreen from "../../app/screens/SecretChatsScreen";
import MessagesScreen from "../../app/screens/MessagesScreen";
import PartnerScreen from "../../app/screens/PartnerScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#eee",
        },
        tabBarActiveTintColor: "#ff4d7d",
        tabBarInactiveTintColor: "#666",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Today"
        component={TodayScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Calendar size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Insights"
        component={InsightsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <BarChart2 size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SecretChats"
        component={SecretChatsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MessageCircle size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MessageSquare size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Partner"
        component={PartnerScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Users size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
