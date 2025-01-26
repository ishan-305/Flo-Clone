import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import BottomNavBar from "../../src/copmponents/BottomNavBar";

const PartnerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.gradientTitle}>Flo for Partners</Text>
          <Text style={styles.mainTitle}>
            Supercharge your relationship and sex life
          </Text>
        </View>

        <View style={styles.benefitsSection}>
          <Text style={styles.subtitle}>
            Share your cycle insights with your partner
          </Text>

          <View style={styles.benefitItem}>
            <Icon name="check-circle" size={24} color="#FF4B8C" />
            <Text style={styles.benefitText}>
              You'll feel supported every day of your cycle.
            </Text>
          </View>

          <View style={styles.benefitItem}>
            <Icon name="check-circle" size={24} color="#FF4B8C" />
            <Text style={styles.benefitText}>
              We'll explain your cycle to him so you don't have to.
            </Text>
          </View>

          <View style={styles.benefitItem}>
            <Icon name="check-circle" size={24} color="#FF4B8C" />
            <Text style={styles.benefitText}>
              He'll understand your body better.
            </Text>
          </View>
        </View>

        <View style={styles.previewSection}>
          <Text style={styles.previewTitle}>What your partner sees</Text>
          <View style={styles.previewCard}>
            <View style={styles.previewHeader}>
              <Text>Your partner's insights · Today</Text>
            </View>
            <View style={styles.insightCards}>
              <View style={[styles.insightCard, styles.blueCard]}>
                <Text style={styles.cardLabel}>Her</Text>
                <Text style={styles.cardTitle}>Her day today</Text>
              </View>
              <View style={[styles.insightCard, styles.lightBlueCard]}>
                <Text style={styles.cardLabel}>Her</Text>
                <Text style={styles.cardTitle}>Chance of getting pregnant</Text>
                <Text style={styles.cardValue}>LOW</Text>
              </View>
              <View style={[styles.insightCard, styles.darkCard]}>
                <Text style={styles.cardLabel}>Both</Text>
                <Text style={styles.cardTitle}>
                  Are your sex drives in sync today?
                </Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.linkButton}>
          <Text style={styles.linkButtonText}>Link your partner</Text>
        </TouchableOpacity>
      </ScrollView>
      <BottomNavBar
        currentScreen="Partner"
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
    padding: 20,
    backgroundColor: "#F8F0FF",
  },
  gradientTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FF4B8C",
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  benefitsSection: {
    padding: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  benefitText: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  previewSection: {
    padding: 20,
  },
  previewTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  previewCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  previewHeader: {
    marginBottom: 15,
  },
  insightCards: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  insightCard: {
    width: "48%",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  blueCard: {
    backgroundColor: "#2196F3",
  },
  lightBlueCard: {
    backgroundColor: "#90CAF9",
  },
  darkCard: {
    backgroundColor: "#1A237E",
  },
  cardLabel: {
    color: "#fff",
    marginBottom: 5,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  cardValue: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  linkButton: {
    backgroundColor: "#FF4B8C",
    margin: 20,
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  linkButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default PartnerScreen;
