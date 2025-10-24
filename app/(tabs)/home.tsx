// app/home.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  const cards = [
    {
      id: "1",
      title: "Food Menu",
      icon: "🍔",
      description: "Browse our delicious dishes",
      color: "#FF6B6B",
      gradient: ["#FF6B6B", "#FF8E8E"],
      onPress: () => router.push("/menus"),
    },
    {
      id: "2",
      title: "Subscriptions",
      icon: "📅",
      description: "Manage your meal plans",
      color: "#4ECDC4",
      gradient: ["#4ECDC4", "#88DAC8"],
      onPress: () => router.push("/subscriptions"),
    },
    {
      id: "3",
      title: "My Credits",
      icon: "💳",
      description: "Wallet & payments",
      color: "#45B7D1",
      gradient: ["#45B7D1", "#7BCBEF"],
      onPress: () => alert("Coming soon!"),
    },
    {
      id: "4",
      title: "My Orders",
      icon: "📦",
      description: "Order history & tracking",
      color: "#96CEB4",
      gradient: ["#96CEB4", "#B8E0D2"],
      onPress: () => alert("Coming soon!"),
    },
    {
      id: "5",
      title: "Favorites",
      icon: "❤️",
      description: "Your loved items",
      color: "#FF9999",
      gradient: ["#FF9999", "#FFB8B8"],
      onPress: () => alert("Coming soon!"),
    },
    {
      id: "6",
      title: "Profile",
      icon: "👤",
      description: "Account settings",
      color: "#A593E0",
      gradient: ["#A593E0", "#C5B6F1"],
      onPress: () => alert("Coming soon!"),
    },
  ];

  const quickActions = [
    { icon: "🚚", title: "Delivery", active: true },
    { icon: "🏪", title: "Pickup" },
    { icon: "📦", title: "Meal Kit" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good morning! 👋</Text>
          <Text style={styles.userName}>John Doe</Text>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Ionicons name="notifications-outline" size={24} color="#333" />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        {quickActions.map((action, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.quickAction, 
              action.active && styles.quickActionActive
            ]}
          >
            <Text style={styles.quickActionIcon}>{action.icon}</Text>
            <Text style={[
              styles.quickActionText,
              action.active && styles.quickActionTextActive
            ]}>
              {action.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Main Grid */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.sectionTitle}>Quick Access</Text>
        <View style={styles.grid}>
          {cards.map((card) => (
            <TouchableOpacity
              key={card.id}
              style={styles.card}
              onPress={card.onPress}
              activeOpacity={0.9}
            >
              {/* Gradient Background */}
              <View style={[styles.cardGradient, {
                backgroundColor: card.color,
              }]} />
              
              <View style={styles.cardContent}>
                <Text style={styles.cardIcon}>{card.icon}</Text>
                <Text style={styles.cardTitle}>{card.title}</Text>
                <Text style={styles.cardDescription}>{card.description}</Text>
                
                <View style={styles.cardArrow}>
                  <Ionicons name="chevron-forward" size={20} color="#fff" />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Promo Banner */}
        <View style={styles.promoBanner}>
          <View style={styles.promoContent}>
            <Text style={styles.promoTitle}>Special Offer! 🎉</Text>
            <Text style={styles.promoText}>Get 20% off on your first subscription</Text>
            <TouchableOpacity style={styles.promoButton}>
              <Text style={styles.promoButtonText}>Claim Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.promoIcon}>
            <Text style={styles.promoIconText}>🎁</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  greeting: {
    fontSize: 16,
    color: "#666",
    marginBottom: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  notificationBtn: {
    padding: 8,
    position: "relative",
  },
  notificationDot: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FF6B6B",
  },
  quickActions: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: "#fff",
    marginTop: 8,
    marginHorizontal: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  quickAction: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#f8f9fa",
    marginHorizontal: 4,
  },
  quickActionActive: {
    backgroundColor: "#FF6B6B",
    transform: [{ scale: 1.05 }],
  },
  quickActionIcon: {
    fontSize: 20,
    marginBottom: 6,
  },
  quickActionText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
  },
  quickActionTextActive: {
    color: "#fff",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 16,
    marginLeft: 8,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  card: {
    width: "48%",
    height: 160,
    borderRadius: 20,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  cardGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.9,
  },
  cardContent: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  cardIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
    lineHeight: 16,
  },
  cardArrow: {
    position: "absolute",
    bottom: 12,
    right: 12,
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 12,
    padding: 4,
  },
  promoBanner: {
    flexDirection: "row",
    backgroundColor: "#667eea",
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
    shadowColor: "#667eea",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  promoContent: {
    flex: 1,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 6,
  },
  promoText: {
    fontSize: 14,
    color: "rgba(255,255,255,0.9)",
    marginBottom: 12,
    lineHeight: 20,
  },
  promoButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
  },
  promoButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#667eea",
  },
  promoIcon: {
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 10,
  },
  promoIconText: {
    fontSize: 40,
  },
});