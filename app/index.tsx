import { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import Login from "../components/Login";
import { auth } from "./../config/FirebaseConfig"
import { Redirect } from "expo-router";
import { User, onAuthStateChanged } from "firebase/auth";

export default function Index() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoadng] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadng(false) // Stop loading once we get the user state
    });
    return () => unsubscribe(); //Cleanup on unmount
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {user ? <Redirect href={'/mytrip' as any} /> : <Login />}
    </View>
  );
}