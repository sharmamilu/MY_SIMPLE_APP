// app/home.tsx
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FlatList, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const foodItems = [
  {
    id: "1",
    name: "Margherita Pizza",
    price: "₹399",
    originalPrice: "₹599",
    image: "https://images.unsplash.com/photo-1601924638867-3ec4e2936c53?auto=format&fit=crop&w=600&q=60",
    description: "Classic cheese pizza with fresh basil and tomato sauce",
    rating: 4.5,
    availableToday: true,
    availableNextDay: true,
    isVeg: true,
    tag: "Bestseller"
  },
  {
    id: "2",
    name: "Veggie Burger",
    price: "₹249",
    originalPrice: "₹349",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=60",
    description: "Plant-based burger with lettuce, tomato, and house sauce",
    rating: 4.2,
    availableToday: false,
    availableNextDay: true,
    isVeg: true,
    tag: "Healthy"
  },
  {
    id: "3",
    name: "Pasta Alfredo",
    price: "₹349",
    originalPrice: "₹449",
    image: "https://images.unsplash.com/photo-1617196034796-73b8e7b9a9e0?auto=format&fit=crop&w=600&q=60",
    description: "Creamy Alfredo pasta with parmesan and garlic",
    rating: 4.3,
    availableToday: true,
    availableNextDay: false,
    isVeg: true
  },
  {
    id: "4",
    name: "Chocolate Shake",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1590080875831-1f33f9f7b6b5?auto=format&fit=crop&w=600&q=60",
    description: "Rich and creamy chocolate milkshake with whipped cream",
    rating: 4.7,
    availableToday: true,
    availableNextDay: true,
    isVeg: true,
    tag: "Popular"
  },
  {
    id: "5",
    name: "Butter Chicken",
    price: "₹499",
    originalPrice: "₹649",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=60",
    description: "Creamy butter chicken with authentic Indian spices",
    rating: 4.8,
    availableToday: false,
    availableNextDay: false,
    isVeg: false,
    tag: "Chef's Special"
  },
  {
    id: "6",
    name: "Masala Dosa",
    price: "₹179",
    originalPrice: "₹229",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=60",
    description: "Crispy dosa with spiced potato filling and chutney",
    rating: 4.6,
    availableToday: true,
    availableNextDay: true,
    isVeg: true,
    tag: "South Indian"
  }
];

export default function HomeScreen() {
  const router = useRouter();

  const AvailabilityBadge = ({ availableToday, availableNextDay }: any) => {
    if (!availableToday && !availableNextDay) {
      return (
        <View style={styles.availabilityContainer}>
          <Ionicons name="close-circle" size={16} color="#FF6B6B" />
          <Text style={[styles.availabilityText, styles.notAvailable]}>Not Available</Text>
        </View>
      );
    }

    return (
      <View style={styles.availabilityWrapper}>
        {availableToday && (
          <View style={styles.availabilityContainer}>
            <Ionicons name="checkmark-circle" size={16} color="#4CAF50" />
            <Text style={[styles.availabilityText, styles.available]}>Today</Text>
          </View>
        )}
        {availableNextDay && (
          <View style={styles.availabilityContainer}>
            <Ionicons name="checkmark-circle" size={16} color="#2196F3" />
            <Text style={[styles.availabilityText, styles.available]}>Tomorrow</Text>
          </View>
        )}
      </View>
    );
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        {item.tag && (
          <View style={[styles.tag, item.tag === "Bestseller" && styles.bestsellerTag]}>
            <Text style={styles.tagText}>{item.tag}</Text>
          </View>
        )}
        <View style={styles.vegNonVeg}>
          <View style={[styles.vegIndicator, item.isVeg ? styles.veg : styles.nonVeg]} />
        </View>
      </View>
      
      <View style={styles.info}>
        <View style={styles.headerRow}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.rating}>
            <Ionicons name="star" size={14} color="#FFD700" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
        
        <Text style={styles.desc}>{item.description}</Text>
        
        {/* Availability Section */}
        <View style={styles.availabilitySection}>
          <AvailabilityBadge 
            availableToday={item.availableToday} 
            availableNextDay={item.availableNextDay} 
          />
        </View>
        
        <View style={styles.footer}>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.price}</Text>
            {item.originalPrice && (
              <Text style={styles.originalPrice}>{item.originalPrice}</Text>
            )}
          </View>
          <TouchableOpacity 
            style={[
              styles.button, 
              (!item.availableToday && !item.availableNextDay) && styles.buttonDisabled
            ]} 
            activeOpacity={0.8}
            disabled={!item.availableToday && !item.availableNextDay}
          >
            <Text style={[
              styles.buttonText,
              (!item.availableToday && !item.availableNextDay) && styles.buttonTextDisabled
            ]}>
              {(!item.availableToday && !item.availableNextDay) ? 'UNAVAILABLE' : 'ADD'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.location}>📍 Bangalore, Karnataka</Text>
          <Text style={styles.title}>Good food, Good mood! 🍴</Text>
        </View>
        <TouchableOpacity style={styles.profile}>
          <Ionicons name="person-circle" size={32} color="#FF6B6B" />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[styles.category, styles.categoryActive]}>
            <Text style={[styles.categoryText, styles.categoryTextActive]}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>Indian</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>Italian</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>Chinese</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>Desserts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryText}>Healthy</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Food List */}
      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  location: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  profile: {
    padding: 4,
  },
  categories: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  category: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f8f8f8",
    marginRight: 12,
  },
  categoryActive: {
    backgroundColor: "#FF6B6B",
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
  },
  categoryTextActive: {
    color: "#fff",
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  tag: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: "#4ECDC4",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  bestsellerTag: {
    backgroundColor: "#FF6B6B",
  },
  tagText: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
  },
  vegNonVeg: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: 4,
    borderRadius: 4,
  },
  vegIndicator: {
    width: 12,
    height: 12,
    borderRadius: 2,
    borderWidth: 1,
  },
  veg: {
    backgroundColor: "#4CAF50",
    borderColor: "#4CAF50",
  },
  nonVeg: {
    backgroundColor: "#F44336",
    borderColor: "#F44336",
  },
  info: {
    padding: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
    flex: 1,
    marginRight: 8,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  ratingText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1a1a1a",
    marginLeft: 2,
  },
  desc: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 12,
  },
  availabilitySection: {
    marginBottom: 12,
  },
  availabilityWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  availabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  availabilityText: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  available: {
    color: '#495057',
  },
  notAvailable: {
    color: '#dc3545',
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  originalPrice: {
    fontSize: 14,
    color: "#999",
    textDecorationLine: "line-through",
    marginLeft: 8,
  },
  button: {
    backgroundColor: "#FF6B6B",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
    shadowColor: "#FF6B6B",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonDisabled: {
    backgroundColor: "#e9ecef",
    shadowColor: "#6c757d",
    shadowOpacity: 0.1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
  buttonTextDisabled: {
    color: "#6c757d",
  },
});