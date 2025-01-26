import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function App() {
  const [selectedDate, setSelectedDate] = useState(24);
  const dates = [20, 21, 22, 23, 24, 25, 26];
  const days = ["M", "T", "W", "T", "F", "S", "S"];

  const insights = [
    {
      id: 1,
      title: "Log your symptoms",
      icon: "plus",
      type: "button",
      color: "#FF4B8C",
    },
    {
      id: 2,
      title: "Your free gift!",
      subtitle: "$0.00",
      image: "🎁",
      color: "#FFE6EE",
    },
    { id: 3, title: "Pimples on your vulva?", image: "🔍", color: "#FFD6E5" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://placekitten.com/40/40" }}
          style={styles.profileImage}
        />
        <Text style={styles.headerTitle}>24 January</Text>
        <Ionicons name="calendar-outline" size={24} color="#000" />
      </View>

      {/* Calendar Strip */}
      <View style={styles.calendarStrip}>
        <View style={styles.daysRow}>
          {days.map((day, index) => (
            <View key={index} style={styles.dayCell}>
              <Text style={styles.dayText}>{day}</Text>
            </View>
          ))}
        </View>
        <View style={styles.datesRow}>
          {dates.map((date) => (
            <TouchableOpacity
              key={date}
              style={[
                styles.dateCell,
                selectedDate === date && styles.selectedDate,
              ]}
              onPress={() => setSelectedDate(date)}
            >
              <Text
                style={[
                  styles.dateText,
                  selectedDate === date && styles.selectedDateText,
                ]}
              >
                {date}
              </Text>
              {selectedDate === date && (
                <Text style={styles.todayLabel}>TODAY</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.content}>
        <View style={styles.messageContainer}>
          <Text style={styles.messageTitle}>
            Log the first day of your last Period{"\n"}for better predictions
          </Text>
          <TouchableOpacity style={styles.logButton}>
            <Text style={styles.logButtonText}>Log period</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>My daily insights · Today</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.insightsContainer}
        >
          {insights.map((item) => (
            <View
              key={item.id}
              style={[styles.insightCard, { backgroundColor: item.color }]}
            >
              {item.type === "button" ? (
                <View style={styles.addButton}>
                  <Text style={styles.addButtonText}>+</Text>
                </View>
              ) : (
                <Text style={styles.insightEmoji}>{item.image}</Text>
              )}
              <Text style={styles.insightTitle}>{item.title}</Text>
              {item.subtitle && (
                <Text style={styles.insightSubtitle}>{item.subtitle}</Text>
              )}
            </View>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Suggested for you</Text>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#999" />
          <Text style={styles.searchText}>
            Search articles, videos and more
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="calendar-outline" size={24} color="#FF4B8C" />
          <Text style={[styles.navText, styles.activeNavText]}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons
            name="view-dashboard-outline"
            size={24}
            color="#999"
          />
          <Text style={styles.navText}>Insights</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="robot-outline" size={24} color="#999" />
          <Text style={styles.navText}>Secret Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={24} color="#999" />
          <Text style={styles.navText}>Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="#999" />
          <Text style={styles.navText}>Partner</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  calendarStrip: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  daysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  dayCell: {
    width: 40,
    alignItems: "center",
  },
  dayText: {
    fontSize: 16,
    color: "#666",
  },
  datesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateCell: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedDate: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    height: 65,
  },
  dateText: {
    fontSize: 20,
    fontWeight: "600",
  },
  selectedDateText: {
    color: "#000",
  },
  todayLabel: {
    fontSize: 10,
    color: "#666",
    marginTop: 4,
  },
  content: {
    flex: 1,
  },
  messageContainer: {
    alignItems: "center",
    paddingVertical: 30,
  },
  messageTitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 26,
  },
  logButton: {
    backgroundColor: "#FF4B8C",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  logButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  insightsContainer: {
    paddingLeft: 20,
  },
  insightCard: {
    width: width * 0.4,
    height: 160,
    marginRight: 15,
    borderRadius: 15,
    padding: 15,
    justifyContent: "space-between",
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#FF4B8C",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    fontSize: 30,
    color: "#fff",
  },
  insightEmoji: {
    fontSize: 24,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },
  insightSubtitle: {
    fontSize: 14,
    color: "#FF4B8C",
    marginTop: 5,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginHorizontal: 20,
    marginTop: 15,
    padding: 12,
    borderRadius: 10,
  },
  searchText: {
    marginLeft: 10,
    color: "#999",
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    marginTop: 5,
    color: "#999",
  },
  activeNavText: {
    color: "#FF4B8C",
  },
});
