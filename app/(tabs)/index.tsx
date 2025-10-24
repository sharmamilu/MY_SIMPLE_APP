import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Alert, StyleSheet, View } from "react-native";

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    Alert.alert("HomeRedirect");

    // Wait 1 second before navigating
    const timer = setTimeout(() => {
      router.replace("/splash");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#1e90ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
