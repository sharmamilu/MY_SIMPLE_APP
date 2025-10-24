import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Alert, Animated, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  useEffect(() => {
    Alert.alert("SplashScreen");
    // Start fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      // After animation completes, go to login
      setTimeout(() => router.replace("/login"), 1000);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={styles.logo}>Cooksy</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1e90ff",
  },
  logo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "white",
  },
});
