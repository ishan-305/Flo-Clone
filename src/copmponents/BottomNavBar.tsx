import type React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { router, useRouter } from "expo-router";

interface BottomNavBarProps {
  currentScreen: string;
}

const BottomNavBar: React.FC<BottomNavBarProps> = ({ currentScreen }) => {
  const router = useRouter();
  const navItems = [
    { name: "Today", icon: "calendar", route: "/screens/TodayScreen" as const },
    {
      name: "Insights",
      icon: "grid",
      route: "/screens/InsightScreen" as const,
    },
    {
      name: "SecretChats",
      icon: "message-circle",
      route: "/screens/SecretChatsScreen" as const,
    },
    {
      name: "Messages",
      icon: "mail",
      route: "/screens/MessagesScreen" as const,
    },
    {
      name: "Partner",
      icon: "users",
      route: "/screens/PartnerScreen" as const,
    },
  ];

  return (
    <View style={styles.container}>
      {navItems.map((item) => (
        <TouchableOpacity
          key={item.name}
          style={styles.navItem}
          onPress={() => {
            router.push(item.route);
          }}
          accessibilityLabel={item.name}
        >
          <Icon
            name={item.icon}
            size={24}
            color={currentScreen === item.name ? "#FF4B8C" : "#666"}
          />
          <Text
            style={[
              styles.navText,
              currentScreen === item.name && styles.activeNavText,
            ]}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingVertical: 10,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    marginTop: 4,
    color: "#666",
  },
  activeNavText: {
    color: "#FF4B8C",
  },
});

export default BottomNavBar;
