import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Auth0Provider } from "react-native-auth0";
import LoginButton from "./components/login-button";
import LogoutButton from "./components/logout-button";

export default function App() {
  return (
    <Auth0Provider
      domain={process.env.EXPO_PUBLIC_AUTH0_DOMAIN || ""}
      clientId={process.env.EXPO_PUBLIC_AUTH0_CLIENT_ID || ""}
    >
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <LoginButton />
        <LogoutButton />
        <StatusBar style="auto" />
      </View>
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
