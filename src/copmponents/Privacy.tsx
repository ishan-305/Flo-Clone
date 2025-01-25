import type React from "react";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onPress }) => (
  <TouchableOpacity
    style={[styles.checkbox, checked && styles.checkboxChecked]}
    onPress={onPress}
  >
    {checked && <Ionicons name="checkmark" size={18} color="#fff" />}
  </TouchableOpacity>
);

export default function PrivacyScreen({ navigation }) {
  const [agreements, setAgreements] = useState({
    terms: false,
    health: false,
    marketing: false,
    tracking: false,
  });

  const allChecked = Object.values(agreements).every((v) => v);

  const toggleAgreement = (key: keyof typeof agreements) => {
    setAgreements((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const acceptAll = () => {
    setAgreements({
      terms: true,
      health: true,
      marketing: true,
      tracking: true,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Privacy first</Text>

        <View style={styles.agreementContainer}>
          <View style={styles.agreementRow}>
            <Checkbox
              checked={agreements.terms}
              onPress={() => toggleAgreement("terms")}
            />
            <Text style={styles.agreementText}>
              I agree to <Text style={styles.link}>Privacy Policy</Text> and{" "}
              <Text style={styles.link}>Terms of Use</Text>.
            </Text>
          </View>

          <View style={styles.agreementRow}>
            <Checkbox
              checked={agreements.health}
              onPress={() => toggleAgreement("health")}
            />
            <Text style={styles.agreementText}>
              I agree to processing of my personal health data for providing me
              Flo app functions.{"\n"}
              See more in <Text style={styles.link}>Privacy Policy</Text>.
            </Text>
          </View>

          <View style={styles.agreementRow}>
            <Checkbox
              checked={agreements.marketing}
              onPress={() => toggleAgreement("marketing")}
            />
            <Text style={styles.agreementText}>
              I agree that Flo may use my personal data (except health data) to
              send me product or service offerings, via email.**
            </Text>
          </View>

          <View style={styles.agreementRow}>
            <Checkbox
              checked={agreements.tracking}
              onPress={() => toggleAgreement("tracking")}
            />
            <Text style={styles.agreementText}>
              I agree to allow Flo to track me across apps and websites owned by
              other companies and that AppsFlyer and its integrated partners may
              receive information about my age-group, subscription status, fact
              of application launch and technical identifiers all as more
              detailed in the <Text style={styles.link}>Privacy Policy</Text>.
              {"\n"}
              This helps Flo to reach me and people like me to spread the word
              about the app as well as analyze whether we do that effectively.**
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.acceptAllButton} onPress={acceptAll}>
          <Text style={styles.acceptAllText}>Accept all</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.nextButton, !allChecked && styles.nextButtonDisabled]}
          disabled={!allChecked}
          onPress={() => navigation.navigate("NextScreen")}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  agreementContainer: {
    marginBottom: 30,
  },
  agreementRow: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 4,
    marginRight: 12,
    marginTop: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#ff4d7d",
    borderColor: "#ff4d7d",
  },
  agreementText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
  link: {
    color: "#ff4d7d",
    textDecorationLine: "underline",
  },
  acceptAllButton: {
    alignItems: "center",
    marginBottom: 20,
  },
  acceptAllText: {
    color: "#ff4d7d",
    fontSize: 16,
    fontWeight: "600",
  },
  nextButton: {
    backgroundColor: "#ff4d7d",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  nextButtonDisabled: {
    backgroundColor: "#ccc",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
