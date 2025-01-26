import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import BottomNavBar from "../../src/copmponents/BottomNavBar";

const messages = [
  {
    id: "1",
    title: "Sex check-in",
    subtitle: "Let's talk about chances of conceiving and boosting pleasure",
    time: "11:30 am",
    icon: "❤️",
    color: "#FFE8EC",
  },
  {
    id: "2",
    title: "Cramps",
    subtitle: "Let's discuss causes for cramps you might have.",
    time: "11:29 am",
    icon: "🔴",
    color: "#F5E6FF",
  },
  {
    id: "3",
    title: "Period support",
    subtitle:
      "It's that time 💧 I've got some period topics you might find helpful.",
    time: "11:27 am",
    icon: "🩸",
    color: "#E3F2FD",
  },
];

const MessagesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <TouchableOpacity>
          <Icon name="edit-2" size={24} color="#FF4B8C" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.messageItem}>
            <View
              style={[styles.iconContainer, { backgroundColor: item.color }]}
            >
              <Text style={styles.icon}>{item.icon}</Text>
            </View>
            <View style={styles.messageContent}>
              <Text style={styles.messageTitle}>{item.title}</Text>
              <Text style={styles.messageSubtitle}>{item.subtitle}</Text>
            </View>
            <View style={styles.messageRight}>
              <Text style={styles.messageTime}>{item.time}</Text>
              <View style={styles.unreadDot} />
            </View>
          </TouchableOpacity>
        )}
      />
      <BottomNavBar
        currentScreen="Messages"
        onScreenChange={(screen) => console.log(screen)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  messageItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  icon: {
    fontSize: 24,
  },
  messageContent: {
    flex: 1,
  },
  messageTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  messageSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  messageRight: {
    alignItems: "flex-end",
  },
  messageTime: {
    fontSize: 12,
    color: "#999",
    marginBottom: 5,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF4B8C",
  },
});

export default MessagesScreen;
