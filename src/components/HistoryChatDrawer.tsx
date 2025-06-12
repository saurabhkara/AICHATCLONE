import { View, Text } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import chatHistory from "@assets/data/chatHistory.json";
import { router } from "expo-router";

export default function HistoryChatDrawer(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {chatHistory.map((item: any) => (
        <DrawerItem
          key={item.id}
          label={item.title}
          onPress={() => router.push(`/chat/${item.id}`)}
          focused={false}
          inactiveTintColor="white"
        />
      ))}
    </DrawerContentScrollView>
  );
}
