import { StatusBar, Text, View } from "react-native";
export default function Page() {
  return (
    <>
      <View className="flex-1 bg-red-600 ">
        <Text className="text-primary bg-slate-600">Hello World</Text>
      </View>
      <StatusBar barStyle={"dark-content"} />
    </>
  );
}
