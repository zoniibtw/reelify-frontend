import { View, Text } from "react-native";
import MyLibraryRecent from "./MyLibraryRecent";
import MyLibraryItem from "./MyLibraryItem";

export default function MyLibrary() {
  return (
    <>
      <View className="w-full">
        <View className="flex gap-4 w-full mb-20">
          <View className="mb-1">
            <Text className="text-white text-3xl font-bold">My Library</Text>
          </View>
          <MyLibraryItem icon="film" title="Movies" count={22} navigate="" />
          <MyLibraryItem icon="tv" title="Series" count={22} navigate="" />
        </View>

        <View className="w-full">
          <View className="mb-3">
            <Text className="text-white font-bold text-2xl tracking-wide">
              Recent
            </Text>
          </View>
          <MyLibraryRecent />
        </View>
      </View>
    </>
  );
}
