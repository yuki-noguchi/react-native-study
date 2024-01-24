import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex flex-col h-screen">
      <View className="bg-blue-500 sticky top-0 h-16" />
      <View className="bg-white border-b-slate-300 border-b-2 h-16" />

      <View className="flex-1 items-center justify-center bg-white">
        <Button title="hoge"></Button>
        <Text className="text-black">index Page</Text>
        <Link href="/about" className="text-black underline">
          go to about
        </Link>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}
