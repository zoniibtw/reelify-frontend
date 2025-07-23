import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ChevronRight, Film, TvMinimalPlay } from "lucide-react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type MyLibraryItemProps = {
  icon: "tv" | "film";
  title: string;
  count: number;
  navigate: string;
};

export default function MyLibraryItem({
  icon,
  title,
  count,
  navigate,
}: MyLibraryItemProps) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <TouchableOpacity
      className="px-4 py-4 bg-slate-800 w-full rounded-xl flex flex-row items-center justify-between"
      activeOpacity={0.7}
      onPress={() => navigation.navigate(navigate)}
      accessibilityRole="button"
      accessible
    >
      <View className="flex-row items-center gap-2.5">
        {icon === "tv" ? (
          <TvMinimalPlay color="white" />
        ) : (
          <Film color="white" />
        )}
        <Text className="text-white font-semibold">{title}</Text>
      </View>
      <View className="flex-row items-center gap-2.5">
        <Text className="text-white">{count}</Text>
        <ChevronRight color="white" />
      </View>
    </TouchableOpacity>
  );
}
