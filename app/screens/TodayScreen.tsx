import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { Calendar } from "react-native-calendars";
import BottomNavBar from "../../src/copmponents/BottomNavBar";
import { useRouter } from "expo-router";

const TodayScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push("/(tabs)/Setting")}
        >
          <Icon name="user" size={30} color="#FF4B8C" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#999" />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="bell" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Calendar Section */}

        <Calendar
          markedDates={{
            "2024-01-24": { selected: true, selectedColor: "#FF4B8C" },
          }}
          theme={{
            selectedDayBackgroundColor: "#FF4B8C",
            todayTextColor: "#FF4B8C",
            arrowColor: "#FF4B8C",
            backgroundColor: "transparent",
          }}
        />

        <View style={styles.logSection}>
          <Text style={styles.logTitle}>
            Log the first day of your last period for better predictions
          </Text>
          <TouchableOpacity
            style={styles.logButton}
            onPress={() => {
              router.push("/screens/CalenderScreen");
            }}
          >
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

        {/* Cycle Status Section */}
        <Text style={styles.cycleText}>In your early cycle</Text>

        {/* Search Section */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#999" />
          <TextInput
            placeholder="Search articles, videos and more"
            style={styles.searchInput}
            placeholderTextColor="#999"
          />
        </View>

        {/* Featured Card */}
        <TouchableOpacity style={styles.orangeCard}>
          <Text style={styles.orangeCardTitle}>Orgasms and pleasure</Text>
          <View style={styles.cardContent}>
            <View style={styles.cardItem}>
              <Icon name="heart" size={20} color="#fff" />
              <Text style={styles.cardItemText}>Master masturbation</Text>
            </View>
            <View style={styles.cardItem}>
              <Icon name="clock" size={20} color="#fff" />
              <Text style={styles.cardItemText}>Spice up partner sex</Text>
            </View>
            <View style={styles.cardItem}>
              <Icon name="star" size={20} color="#fff" />
              <Text style={styles.cardItemText}>
                Multiple orgasms made easy
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.whiteButton}>
            <Text style={styles.whiteButtonText}>Turn up the heat</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Articles Section */}
        <Text style={styles.sectionTitle}>Based on your current cycle</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.articlesRow}
        >
          <TouchableOpacity style={styles.articleCard}>
            <Image
              source={require("../../assets/ss1.png")}
              style={styles.articleImage}
            />
            <Text style={styles.articleTitle}>
              What to do after unprotected sex
            </Text>
            <Text style={styles.readTime}>9 min read</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.articleCard}>
            <Image
              source={require("../../assets/ss2.png")}
              style={styles.articleImage}
            />
            <Text style={styles.articleTitle}>
              9 life-changing masturbation tips
            </Text>
            <Text style={styles.readTime}>10 min read</Text>
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity style={styles.seeMoreButton}>
          <Text style={styles.seeMoreText}>See more</Text>
        </TouchableOpacity>
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
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  dateText: {
    fontSize: 18,
    fontWeight: "500",
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
    paddingHorizontal: 16,
  },
  calendarContainer: {
    backgroundColor: "#FFD6E5",
    padding: 16,
    borderRadius: 20,
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
  cycleText: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 16,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
    padding: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 25,
  },
  orangeCard: {
    margin: 16,
    padding: 20,
    backgroundColor: "#D35400",
    borderRadius: 20,
  },
  orangeCardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  cardContent: {
    marginBottom: 20,
  },
  cardItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  cardItemText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 12,
  },
  whiteButton: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignSelf: "flex-start",
  },
  whiteButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
  articlesRow: {
    paddingHorizontal: 16,
  },
  articleCard: {
    width: 200,
    marginRight: 16,
  },
  articleImage: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginBottom: 12,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  readTime: {
    fontSize: 14,
    color: "#666",
  },
  seeMoreButton: {
    margin: 16,
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    alignItems: "center",
  },
  seeMoreText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
  },
  iconButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
  },
});

export default TodayScreen;
