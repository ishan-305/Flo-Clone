import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router, useNavigation, useRouter } from "expo-router";

const { width } = Dimensions.get("window");

const Calendar = () => {
  const days = ["M", "TODAY", "W", "T", "F", "S", "S"];
  const dates = ["7", "8", "9", "10", "11", "12", "13"];
  return (
    <View style={styles.calendarContainer}>
      <View style={styles.daysRow}>
        {days.map((day, index) => (
          <Text
            key={day}
            style={[styles.dayText, day === "TODAY" && styles.todayText]}
          >
            {day}
          </Text>
        ))}
      </View>
      <View style={styles.datesRow}>
        {dates.map((date, index) => (
          <Text
            key={date}
            style={[
              styles.dateText,
              Number.parseInt(date) >= 11 && styles.futureDateText,
            ]}
          >
            {date}
          </Text>
        ))}
      </View>
    </View>
  );
};

const Tweet = () => (
  <View style={styles.tweetContainer}>
    <View style={styles.tweetHeader}>
      <Image
        source={require("../../assets/user_ex.png")}
        style={styles.profileImage}
      />
      <View style={styles.tweetUserInfo}>
        <Text style={styles.userName}>perfect peach</Text>
        <Text style={styles.userHandle}>@_meganjaay_</Text>
      </View>
      <Image
        source={require("../../assets/twitter.png")}
        style={styles.twitterIcon}
      />
    </View>
    <Text style={styles.tweetText}>"why am i feeling like this?"</Text>
    <Text style={styles.tweetText}>*checks flo app*</Text>
    <Text style={styles.tweetText}>oh.</Text>
    <Text style={styles.tweetTime}>
      3:14 AM · Feb 3, 2021 · Twitter for iPhone
    </Text>
  </View>
);

export default function IntroScreen() {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={["#fff", "#ffe5e5"]} style={styles.gradient}>
        <View style={styles.content}>
          <Text style={styles.welcomeText}>You're in the right place!</Text>
          <Text style={styles.title}>
            Flo's tracked over{"\n"}
            <Text style={styles.highlightText}>2.2 billion cycles</Text>
          </Text>

          <View style={styles.cardContainer}>
            <Calendar />
            <View style={styles.predictionContainer}>
              <Text style={styles.predictionTitle}>Period in</Text>
              <Text style={styles.predictionDays}>3 days</Text>
              <Text style={styles.predictionSubtext}>
                Low chance of getting pregnant
              </Text>
            </View>
          </View>

          <Tweet />

          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => router.push("/(tabs)/Privacy")}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  gradient: {
    flex: 1,
    minHeight: Dimensions.get("window").height,
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 20,
    color: "#ff4d7d",
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },
  highlightText: {
    color: "#ff4d7d",
  },
  cardContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  calendarContainer: {
    marginBottom: 20,
  },
  daysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  datesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dayText: {
    width: width / 7 - 10,
    textAlign: "center",
    color: "#666",
    fontSize: 12,
  },
  todayText: {
    color: "#000",
    fontWeight: "bold",
  },
  dateText: {
    width: width / 7 - 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  futureDateText: {
    color: "#ff4d7d",
  },
  predictionContainer: {
    alignItems: "center",
  },
  predictionTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 5,
  },
  predictionDays: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 5,
  },
  predictionSubtext: {
    fontSize: 14,
    color: "#666",
  },
  tweetContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    width: "100%",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  tweetHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  tweetUserInfo: {
    flex: 1,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  userHandle: {
    color: "#666",
    fontSize: 14,
  },
  twitterIcon: {
    width: 20,
    height: 20,
  },
  tweetText: {
    fontSize: 16,
    marginBottom: 5,
  },
  tweetTime: {
    color: "#666",
    fontSize: 12,
    marginTop: 10,
  },
  nextButton: {
    backgroundColor: "#ff4d7d",
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 20,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
