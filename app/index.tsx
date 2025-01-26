import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

import TodayScreen from "./screens/TodayScreen";
import InsightsScreen from "./screens/InsightScreen";
import MessagesScreen from "./screens/MessagesScreen";
import PartnerScreen from "./screens/PartnerScreen";
import SecretChatsScreen from "./screens/SecretChatsScreen";

export default function App() {
  return <PartnerScreen />;
}

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle="dark-content" />
//       <NavigationContainer>
//         <Tab.Navigator
//           screenOptions={{
//             tabBarActiveTintColor: "#FF4B8C",
//             tabBarInactiveTintColor: "#666",
//             headerShown: false,
//           }}
//         >
//           <Tab.Screen
//             name="Today"
//             component={TodayScreen}
//             options={{
//               tabBarIcon: ({ color }) => (
//                 <Icon name="calendar" size={24} color={color} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Insights"
//             component={InsightsScreen}
//             options={{
//               tabBarIcon: ({ color }) => (
//                 <Icon name="grid" size={24} color={color} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="SecretChats"
//             component={SecretChatsScreen}
//             options={{
//               tabBarIcon: ({ color }) => (
//                 <Icon name="message-circle" size={24} color={color} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Messages"
//             component={MessagesScreen}
//             options={{
//               tabBarIcon: ({ color }) => (
//                 <Icon name="mail" size={24} color={color} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Partner"
//             component={PartnerScreen}
//             options={{
//               tabBarIcon: ({ color }) => (
//                 <Icon name="users" size={24} color={color} />
//               ),
//             }}
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// };

// export default App;
