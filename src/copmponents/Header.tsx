"use client";

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Bell } from "lucide-react";

interface HeaderProps {
  showLogo?: boolean;
  showNotification?: boolean;
  title?: string;
}

export default function Header({
  showLogo = true,
  showNotification = true,
  title,
}: HeaderProps) {
  return (
    <View style={styles.header}>
      {showLogo && (
        <Image
          source={{ uri: "https://placeholder.svg?height=40&width=40" }}
          style={styles.logo}
        />
      )}
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.rightSection}>
        {showNotification && (
          <TouchableOpacity>
            <Bell size={24} color="#000" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
});
