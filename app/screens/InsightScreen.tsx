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
import BottomNavBar from "../../src/copmponents/BottomNavBar";

const InsightsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#999" />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
        <TouchableOpacity>
          <Icon name="bookmark" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell" size={24} color="#000" style={styles.bellIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, { marginHorizontal: 50 }]}>
            <Text style={styles.tabText}>Following</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, { marginHorizontal: 50 }]}>
            <Text style={styles.tabText}>Saved</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categorySection}>
          <View style={styles.categoryRow}>
            <TouchableOpacity style={styles.categoryItem}>
              <Icon name="thermometer" size={24} color="#000" />
              <Text style={styles.categoryText}>Am I pregnant?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Icon name="heart" size={24} color="#000" />
              <Text style={styles.categoryText}>Orgasms and pleasure</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.categoryItem}>
              <Icon name="droplet" size={24} color="#000" />
              <Text style={styles.categoryText}>Vaginal discharge</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Reproductive health 101</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.articleCard}>
              <View style={styles.articleImage}>
                <Text style={styles.articleImageText}>
                  How to clean your vulva
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.articleCard}>
              <View style={styles.articleImage}>
                <Text style={styles.articleImageText}>
                  How to clean your vulva
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.articleCard}>
              <View style={styles.articleImage}>
                <Text style={styles.articleImageText}>
                  How to clean your vulva
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.articleCard}>
              <View style={[styles.articleImage, styles.purpleBackground]}>
                <Text style={styles.articleImageText}>
                  Vaginal discharge color guide
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sex</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.articleCard}>
              <View style={[styles.articleImage, styles.darkBackground]}>
                <Icon name="play-circle" size={24} color="#fff" />
                <Text style={styles.articleImageText}>
                  Mastering your orgasm
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.articleCard}>
              <View style={[styles.articleImage, styles.pinkBackground]}>
                <Text style={styles.articleImageText}>
                  9 life-changing masturbation tips
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.articleCard}>
              <View style={[styles.articleImage, styles.pinkBackground]}>
                <Text style={styles.articleImageText}>
                  9 life-changing masturbation tips
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.articleCard}>
              <View style={[styles.articleImage, styles.pinkBackground]}>
                <Text style={styles.articleImageText}>
                  9 life-changing masturbation tips
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
      <BottomNavBar
        currentScreen="Insights"
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
    marginRight: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  bellIcon: {
    marginLeft: 15,
  },
  tabsContainer: {
    flexDirection: "row",
    padding: 15,
  },
  tab: {
    marginRight: 20,
    paddingVertical: 5,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#FF4B8C",
  },
  tabText: {
    fontSize: 16,
    color: "#666",
    fontWeight: "800",
  },
  activeTabText: {
    color: "#FF4B8C",
    fontWeight: "600",
  },
  categorySection: {
    padding: 15,
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  categoryItem: {
    alignItems: "center",
    width: "30%",
  },
  categoryText: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 12,
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  articleCard: {
    width: 150,
    height: 150,
    marginRight: 15,
    borderRadius: 15,
    overflow: "hidden",
  },
  articleImage: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    padding: 15,
    justifyContent: "flex-end",
  },
  purpleBackground: {
    backgroundColor: "#EDE7F6",
  },
  dpinkBackground: {
    backgroundColor: "#EDE7F6",
  },
  blueBackground: {
    backgroundColor: "#EDE7F6",
  },

  darkBackground: {
    backgroundColor: "grey",
  },
  pinkBackground: {
    backgroundColor: "#FFE8EC",
  },
  articleImageText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default InsightsScreen;
