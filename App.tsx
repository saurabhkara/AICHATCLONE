import "./global.css";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-500 dark:bg-black">
      <Text className="text-primary dark:text-white text-7xl">
        Hello World !
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
