import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Calendar } from "react-native-calendars";
import BottomNavBar from "../../src/components/BottomNavBar";

export default function App() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const Header = () => (
    <View style={styles.header}>
      <TouchableOpacity style={styles.profileButton}>
        <Image
          source={{
            uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-ZWQseViWKuOsmL3OMLKcbU1hTxpsGt.jpeg",
          }}
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <Text style={styles.headerDate}>
        {new Date(selectedDate).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
        })}
      </Text>
      <TouchableOpacity>
        <Ionicons name="calendar-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );

  const CustomCalendar = () => (
    <Calendar
      current={selectedDate}
      onDayPress={(day) => setSelectedDate(day.dateString)}
      monthFormat={"MMMM yyyy"}
      hideExtraDays={true}
      firstDay={1}
      onPressArrowLeft={(subtractMonth) => subtractMonth()}
      onPressArrowRight={(addMonth) => addMonth()}
      enableSwipeMonths={true}
      theme={{
        backgroundColor: "#FFE6F0",
        calendarBackground: "#FFE6F0",
        textSectionTitleColor: "#666",
        selectedDayBackgroundColor: "#FF4B8C",
        selectedDayTextColor: "#ffffff",
        todayTextColor: "#FF4B8C",
        dayTextColor: "#2d4150",
        textDisabledColor: "#d9e1e8",
        dotColor: "#FF4B8C",
        selectedDotColor: "#ffffff",
        arrowColor: "#FF4B8C",
        monthTextColor: "#000",
        textDayFontWeight: "300",
        textMonthFontWeight: "bold",
        textDayHeaderFontWeight: "300",
        textDayFontSize: 16,
        textMonthFontSize: 18,
        textDayHeaderFontSize: 14,
      }}
      markedDates={{
        [selectedDate]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: "white",
        },
      }}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <CustomCalendar />
        <Text style={styles.title}>
          Log the first day of your last period for better predictions
        </Text>
        <TouchableOpacity style={styles.logButton}>
          <Text style={styles.logButtonText}>Log period</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>My daily insights · Today</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.insightsContainer}
        >
          <TouchableOpacity style={styles.insightCard}>
            <View style={styles.insightIconContainer}>
              <Ionicons name="add" size={24} color="#FF4B8C" />
            </View>
            <Text style={styles.insightText}>Log your symptoms</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.insightCard}>
            <Image
              source={{
                uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-ZWQseViWKuOsmL3OMLKcbU1hTxpsGt.jpeg",
              }}
              style={styles.insightImage}
            />
            <Text style={styles.insightText}>Your free gift!</Text>
            <Text style={styles.insightSubtext}>$9.99/year</Text>
            <Text style={styles.insightPrice}>$0.00</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.insightCard}>
            <Image
              source={{
                uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-ZWQseViWKuOsmL3OMLKcbU1hTxpsGt.jpeg",
              }}
              style={styles.insightImage}
            />
            <Text style={styles.insightText}>Pimples on your vulva?</Text>
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.sectionTitle}>Suggested for you</Text>

        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search articles, videos and more"
            placeholderTextColor="#999"
          />
        </View>
      </ScrollView>
      <BottomNavBar />
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFE6F0",
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  headerDate: {
    fontSize: 20,
    fontWeight: "600",
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
    paddingHorizontal: 20,
  },
  logButton: {
    backgroundColor: "#FF4B8C",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: "center",
    marginBottom: 24,
  },
  logButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
    marginBottom: 12,
  },
  insightsContainer: {
    paddingLeft: 16,
    marginBottom: 24,
  },
  insightCard: {
    width: 150,
    height: 180,
    backgroundColor: "#FFF0F5",
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    justifyContent: "space-between",
  },
  insightIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFE6F0",
    justifyContent: "center",
    alignItems: "center",
  },
  insightImage: {
    width: "100%",
    height: 80,
    borderRadius: 8,
  },
  insightText: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 8,
  },
  insightSubtext: {
    fontSize: 12,
    color: "#666",
    textDecorationLine: "line-through",
  },
  insightPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FF4B8C",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 16,
  },
});
