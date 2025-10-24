import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="splash" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />{" "}
      {/* 👈 New */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="menus" options={{ headerShown: false }} />
      {/* <Stack.Screen name="subscription" options={{ headerShown: false }} /> */}
      <Stack.Screen
        name="subscriptions"
        options={{
          headerShown: true, // show the header
          title: "Subscriptions", // set custom title
          headerBackVisible: true, // ensure back button shows if there's a screen to go back to
        }}
      />
    </Stack>
  );
}
