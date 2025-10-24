// app/subscriptions.tsx
import { Ionicons } from "@expo/vector-icons";
import {
    FlatList,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const subscriptionPlans = [
  {
    id: "1",
    title: "Premium Monthly",
    subtitle: "1 Person • Full Meal Plan",
    duration: "30 days",
    price: "₹4,999",
    originalPrice: "₹7,499",
    savings: "33% OFF",
    popular: true,
    color: "#667eea",
    gradient: ["#667eea", "#764ba2"],
    details: [
      "Breakfast, Lunch & Dinner",
      "Free Delivery",
      "Customizable Menu",
      "Nutrition Tracking",
      "Priority Support",
    ],
    features: ["🍳 Breakfast", "🥗 Lunch", "🍝 Dinner", "🚚 Free Delivery"],
  },
  {
    id: "2",
    title: "Weekly Pro",
    subtitle: "1 Person • Flexible Plan",
    duration: "7 days",
    price: "₹1,499",
    originalPrice: "₹2,099",
    savings: "28% OFF",
    popular: false,
    color: "#f093fb",
    gradient: ["#f093fb", "#f5576c"],
    details: [
      "Lunch & Dinner Included",
      "Weekly Menu Refresh",
      "Easy Cancellation",
      "Basic Support",
    ],
    features: ["🥗 Lunch", "🍝 Dinner", "🔄 Weekly Menu", "📱 App Access"],
  },
  {
    id: "3",
    title: "Corporate Bulk",
    subtitle: "20+ People • Custom Solutions",
    duration: "Custom",
    price: "Custom",
    popular: false,
    color: "#4ecdc4",
    gradient: ["#4ecdc4", "#44a08d"],
    details: [
      "Custom Pricing for Teams",
      "Dedicated Account Manager",
      "Branded Packaging",
      "Flexible Delivery Schedule",
      "Custom Menu Options",
    ],
    features: [
      "🏢 20+ People",
      "👔 Dedicated Manager",
      "📦 Branded Packaging",
      "⏰ Flexible Schedule",
    ],
  },
  {
    id: "4",
    title: "Lunch Special",
    subtitle: "1 Person • Office Lunch",
    duration: "22 days",
    price: "₹2,999",
    originalPrice: "₹4,399",
    savings: "32% OFF",
    popular: true,
    color: "#ff9a9e",
    gradient: ["#ff9a9e", "#fecfef"],
    details: [
      "Monday to Friday Lunch",
      "Healthy & Balanced Meals",
      "Office Delivery",
      "Weekly Nutrition Report",
    ],
    features: [
      "🏢 Office Delivery",
      "🥗 Healthy Meals",
      "📊 Weekly Report",
      "💼 Mon-Fri",
    ],
  },
];

const features = [
  {
    icon: "🚚",
    title: "Free Delivery",
    description: "On all subscription plans",
  },
  { icon: "♻️", title: "Flexible Menu", description: "Change meals anytime" },
  { icon: "⏰", title: "Skip Meals", description: "Pause when you're away" },
  { icon: "📱", title: "Easy Management", description: "All in one app" },
];

export default function SubscriptionsScreen() {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      {/* Popular Badge */}
      {item.popular && (
        <View style={styles.popularBadge}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text style={styles.popularText}>MOST POPULAR</Text>
        </View>
      )}

      {/* Header */}
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
        </View>
        <View style={[styles.durationBadge, { backgroundColor: item.color }]}>
          <Text style={styles.durationText}>{item.duration}</Text>
        </View>
      </View>

      {/* Price */}
      <View style={styles.priceContainer}>
        <Text style={styles.price}>{item.price}</Text>
        {item.originalPrice && (
          <>
            <Text style={styles.originalPrice}>{item.originalPrice}</Text>
            <View style={styles.savingsBadge}>
              <Text style={styles.savingsText}>{item.savings}</Text>
            </View>
          </>
        )}
      </View>

      {/* Features */}
      <View style={styles.featuresContainer}>
        {item.features.map((feature: string, index: number) => (
          <View key={index} style={styles.featureChip}>
            <Text style={styles.featureText}>{feature}</Text>
          </View>
        ))}
      </View>

      {/* Details */}
      <View style={styles.detailsContainer}>
        {item.details.map((detail: string, index: number) => (
          <View key={index} style={styles.detailRow}>
            <Ionicons name="checkmark-circle" size={18} color="#4ecdc4" />
            <Text style={styles.detailText}>{detail}</Text>
          </View>
        ))}
      </View>

      {/* Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: item.color }]}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>
          {item.price === "Custom" ? "Get Quote" : "Subscribe Now"}
        </Text>
        <Ionicons name="arrow-forward" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Meal Subscriptions 🥗</Text>
        <Text style={styles.subtitle}>Choose your perfect meal plan</Text>
      </View>

      {/* Features Grid */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.featuresScroll}
        contentContainerStyle={styles.featuresContent}
      >
        {features.map((feature, index) => (
          <View key={index} style={styles.featureCard}>
            <Text style={styles.featureIcon}>{feature.icon}</Text>
            <Text style={styles.featureTitle}>{feature.title}</Text>
            <Text style={styles.featureDescription}>{feature.description}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Plans */}
      <Text style={styles.sectionTitle}>Available Plans</Text>
      <FlatList
        data={subscriptionPlans}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  greeting: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
  },
  featuresScroll: {
    marginTop: 20,
  },
  featuresContent: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  featureCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    marginRight: 12,
    marginBottom: 25,
    minWidth: 140,
    maxWidth: 250,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  featureIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
    top: -50,
  },
  featureDescription: {
    fontSize: 12,
    color: "#666",
    lineHeight: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 16,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    position: "relative",
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  popularBadge: {
    position: "absolute",
    top: -10,
    right: 20,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  popularText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#1a1a1a",
    marginLeft: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  durationBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  durationText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#fff",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  price: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1a1a1a",
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 18,
    color: "#999",
    textDecorationLine: "line-through",
    marginRight: 8,
  },
  savingsBadge: {
    backgroundColor: "#ff6b6b",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  savingsText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#fff",
  },
  featuresContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  featureChip: {
    backgroundColor: "#f8f9fa",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#e9ecef",
  },
  featureText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#495057",
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: "#555",
    marginLeft: 8,
    flex: 1,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginRight: 8,
  },
});
