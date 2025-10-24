import axios from "axios";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { BASE_URL } from "../../config";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (!name || !email || !password || !contact) {
      Alert.alert("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/auth/register`, {
        name,
        email,
        password,
        contact,
      });

      if (res.data.token) {
        Alert.alert("Registration successful!");
        router.replace("/login");
      }
    } catch (err: any) {
      console.log(err.response?.data);
      Alert.alert(
        "Error",
        err.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      {/* contact */}
      <TextInput
        placeholder="Contact"
        value={name}
        onChangeText={setContact}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
});
