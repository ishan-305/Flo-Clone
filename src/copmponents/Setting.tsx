import React from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const menuItems = [
    { icon: "stats-chart", title: "Graphs & reports" },
    { icon: "time", title: "Cycle and ovulation" },
    { icon: "settings", title: "App settings" },
    { icon: "shield", title: "Privacy settings" },
    { icon: "lock-closed", title: "Access code" },
    { icon: "notifications", title: "Reminders" },
    { icon: "help-circle", title: "Help" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <TouchableOpacity style={styles.closeButton}>
          <Ionicons name="close" size={28} color="#000" />
        </TouchableOpacity>

        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.profileInfo}>
            <Image
              source={{ uri: "https://placeholder.svg?height=50&width=50" }}
              style={styles.avatar}
            />
            <View>
              <Text style={styles.profileName}>No account</Text>
              <TouchableOpacity>
                <Text style={styles.editInfo}>Edit info</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.premiumBadge}>
            <Text style={styles.premiumText}>Flo Premium</Text>
          </View>
        </View>

        {/* Goals Section */}
        <View style={styles.goalsSection}>
          <Text style={styles.goalsTitle}>My goal:</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.goalsScroll}
          >
            <TouchableOpacity style={[styles.goalButton, styles.activeGoal]}>
              <Text style={styles.activeGoalText}>Track cycle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.goalButton}>
              <Text style={styles.goalText}>Get pregnant</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.goalButton}>
              <Text style={styles.goalText}>Track pregnancy</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuItemContent}>
                <Ionicons
                  name={item.icon}
                  size={24}
                  color="#000"
                  style={styles.menuIcon}
                />
                <Text style={styles.menuText}>{item.title}</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#ccc" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  closeButton: {
    padding: 16,
  },
  profileCard: {
    backgroundColor: "#333",
    margin: 16,
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  profileName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  editInfo: {
    color: "#999",
    marginTop: 4,
  },
  premiumBadge: {
    backgroundColor: "#ff4d7d",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  premiumText: {
    color: "#fff",
    fontWeight: "600",
  },
  goalsSection: {
    padding: 16,
  },
  goalsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  goalsScroll: {
    flexDirection: "row",
    marginBottom: 16,
  },
  goalButton: {
    backgroundColor: "#eee",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 12,
  },
  activeGoal: {
    backgroundColor: "#ff4d7d",
  },
  goalText: {
    color: "#666",
    fontSize: 16,
  },
  activeGoalText: {
    color: "#fff",
    fontSize: 16,
  },
  menuContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    margin: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    marginRight: 12,
  },
  menuText: {
    fontSize: 16,
  },
});
