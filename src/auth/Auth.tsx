import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Account</Text>
      </View>

      {/* Auth Type Switcher */}
      <View style={styles.authTypeSwitcher}>
        <TouchableOpacity
          onPress={() => setIsLogin(false)}
          style={[styles.authTypeButton, !isLogin && styles.activeAuthType]}
        >
          <Text
            style={[styles.authTypeText, !isLogin && styles.activeAuthTypeText]}
          >
            SIGN UP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsLogin(true)}
          style={[styles.authTypeButton, isLogin && styles.activeAuthType]}
        >
          <Text
            style={[styles.authTypeText, isLogin && styles.activeAuthTypeText]}
          >
            LOG IN
          </Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {isLogin && (
          <Text style={styles.restoreText}>
            To restore data,{"\n"}you need to log in to your account.
          </Text>
        )}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot your password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>
              {isLogin ? "LOG IN" : "SIGN UP"}
            </Text>
          </TouchableOpacity>
        </View>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 8,
  },
  authTypeSwitcher: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  authTypeButton: {
    flex: 1,
    paddingVertical: 16,
    alignItems: "center",
  },
  activeAuthType: {
    borderBottomWidth: 2,
    borderBottomColor: "#00BCD4",
  },
  authTypeText: {
    fontSize: 16,
    color: "#757575",
    fontWeight: "600",
  },
  activeAuthTypeText: {
    color: "#00BCD4",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  restoreText: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 48,
    lineHeight: 36,
  },
  form: {
    gap: 24,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#00BCD4",
    paddingVertical: 8,
  },
  forgotPassword: {
    color: "#00BCD4",
    fontSize: 16,
    textAlign: "center",
  },
  submitButton: {
    backgroundColor: "#E0F7FA",
    paddingVertical: 16,
    borderRadius: 8,
    marginTop: 32,
  },
  submitButtonText: {
    color: "#00BCD4",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
