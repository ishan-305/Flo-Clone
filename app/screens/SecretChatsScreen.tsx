import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BottomNavBar from "../../src/copmponents/BottomNavBar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hello.jpg-BoHAHjhXS5DEmm9SdrEKJ9yMmdj2Ps.jpeg",
          }}
          style={styles.profileIcon}
        />
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#999"
          />
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Popular</Text>
          </TouchableOpacity>
          <View style={{ width: 10 }} />
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Following</Text>
          </TouchableOpacity>
          <View style={{ width: 10 }} />
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Saved</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.postHeaderLeft}>
              <Image
                source={{
                  uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hello.jpg-BoHAHjhXS5DEmm9SdrEKJ9yMmdj2Ps.jpeg",
                }}
                style={styles.postProfilePic}
              />
              <Text style={styles.postAuthor}>Weight Journey</Text>
            </View>
            <View style={styles.postHeaderRight}>
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followButtonText}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>

          <Image
            source={{
              uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hello.jpg-BoHAHjhXS5DEmm9SdrEKJ9yMmdj2Ps.jpeg",
            }}
            style={styles.postImage}
          />

          <Text style={styles.postTitle}>
            Fad diets: If you've ever tried one, did it work for you?
          </Text>

          <View style={styles.engagementContainer}>
            <View style={styles.engagementLeft}>
              <TouchableOpacity style={styles.engagementItem}>
                <Ionicons name="heart-outline" size={24} color="#000" />
                <Text style={styles.engagementText}>2K</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.engagementItem}>
                <Ionicons name="chatbubble-outline" size={24} color="#000" />
                <Text style={styles.engagementText}>2.1K</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Ionicons name="bookmark-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.commentContainer}>
            <Image
              source={{
                uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hello.jpg-BoHAHjhXS5DEmm9SdrEKJ9yMmdj2Ps.jpeg",
              }}
              style={styles.commentAvatar}
            />
            <View style={styles.commentContent}>
              <Text style={styles.commentText}>
                If you want to lose weight, it's not rocket science, go into a
                calorie deficit. Slowly. That's it. It's boring but that's all
                there is to it.
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={styles.viewAllComments}>View all 2.1K comments</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.post}>
          <View style={styles.postHeader}>
            <View style={styles.postHeaderLeft}>
              <Image
                source={{
                  uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hello.jpg-BoHAHjhXS5DEmm9SdrEKJ9yMmdj2Ps.jpeg",
                }}
                style={styles.postProfilePic}
              />
              <Text style={styles.postAuthor}>Weight Journey</Text>
            </View>
            <View style={styles.postHeaderRight}>
              <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followButtonText}>Follow</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" size={20} color="#666" />
              </TouchableOpacity>
            </View>
          </View>

          <Image
            source={{
              uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hello.jpg-BoHAHjhXS5DEmm9SdrEKJ9yMmdj2Ps.jpeg",
            }}
            style={styles.postImage}
          />

          <Text style={styles.postTitle}>
            Fad diets: If you've ever tried one, did it work for you?
          </Text>

          <View style={styles.engagementContainer}>
            <View style={styles.engagementLeft}>
              <TouchableOpacity style={styles.engagementItem}>
                <Ionicons name="heart-outline" size={24} color="#000" />
                <Text style={styles.engagementText}>2K</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.engagementItem}>
                <Ionicons name="chatbubble-outline" size={24} color="#000" />
                <Text style={styles.engagementText}>2.1K</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Ionicons name="bookmark-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <View style={styles.commentContainer}>
            <Image
              source={{
                uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hello.jpg-BoHAHjhXS5DEmm9SdrEKJ9yMmdj2Ps.jpeg",
              }}
              style={styles.commentAvatar}
            />
            <View style={styles.commentContent}>
              <Text style={styles.commentText}>
                If you want to lose weight, it's not rocket science, go into a
                calorie deficit. Slowly. That's it. It's boring but that's all
                there is to it.
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={styles.viewAllComments}>View all 2.1K comments</Text>
          </TouchableOpacity>
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
    padding: 15,
    gap: 10,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: "row",
    padding: 15,
    gap: 10,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  activeTab: {
    backgroundColor: "#FF4B8C",
  },
  tabText: {
    color: "#666",
    fontSize: 16,
  },
  activeTabText: {
    color: "#fff",
  },
  post: {
    padding: 15,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  postHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  postHeaderRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  postProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postAuthor: {
    fontSize: 16,
    fontWeight: "600",
  },
  followButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  followButtonText: {
    color: "#00BCD4",
    fontSize: 16,
    fontWeight: "500",
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  postTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#fff",
    position: "absolute",
    bottom: 100,
    left: 30,
    right: 30,
  },
  engagementContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  engagementLeft: {
    flexDirection: "row",
    gap: 20,
  },
  engagementItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  engagementText: {
    fontSize: 16,
    color: "#666",
  },
  commentContainer: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#f0f0f0",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  commentAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  commentContent: {
    flex: 1,
  },
  commentText: {
    fontSize: 16,
    lineHeight: 22,
  },
  viewAllComments: {
    color: "#00BCD4",
    fontSize: 16,
  },
});
