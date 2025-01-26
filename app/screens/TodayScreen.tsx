import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { Calendar } from "react-native-calendars";
import BottomNavBar from "../../src/copmponents/BottomNavBar";

const TodayScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon name="user" size={30} color="#FF4B8C" />
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#999" />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
        <Icon name="bell" size={24} color="#000" />
      </View>

      <ScrollView>
        <Calendar
          markedDates={{
            "2024-01-24": { selected: true, selectedColor: "#FF4B8C" },
          }}
          theme={{
            selectedDayBackgroundColor: "#FF4B8C",
            todayTextColor: "#FF4B8C",
            arrowColor: "#FF4B8C",
          }}
        />

        <View style={styles.logSection}>
          <Text style={styles.logTitle}>
            Log the first day of your last period for better predictions
          </Text>
          <TouchableOpacity style={styles.logButton}>
            <Text style={styles.logButtonText}>Log period</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.insightsSection}>
          <Text style={styles.sectionTitle}>My daily insights · Today</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.insightCard}>
              <Text style={styles.insightTitle}>Log your symptoms</Text>
              <View style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.insightCard, styles.giftCard]}>
              <Text style={styles.strikethrough}>$9.99/year</Text>
              <Text style={styles.price}>$0.00</Text>
              <Text style={styles.giftTitle}>Your free gift!</Text>
              <Text style={styles.giftEmoji}>🎁</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.insightCard, styles.healthCard]}>
              <Text style={styles.healthTitle}>Pimples on your vulva?</Text>
              <View style={styles.illustration} />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
      <BottomNavBar
        currentScreen="Today"
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
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    marginHorizontal: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  logSection: {
    padding: 20,
    alignItems: "center",
  },
  logTitle: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  logButton: {
    backgroundColor: "#FF4B8C",
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
  },
  logButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  insightsSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  insightCard: {
    backgroundColor: "#F5F5F5",
    padding: 20,
    borderRadius: 15,
    marginRight: 15,
    width: 150,
    height: 180,
  },
  giftCard: {
    backgroundColor: "#FFE8EC",
  },
  healthCard: {
    backgroundColor: "#FFD6E5",
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF4B8C",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  strikethrough: {
    textDecorationLine: "line-through",
    color: "#666",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  giftTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  giftEmoji: {
    fontSize: 24,
    marginTop: 10,
  },
  healthTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  illustration: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#FF8AB5",
    borderRadius: 10,
  },
});

export default TodayScreen;
