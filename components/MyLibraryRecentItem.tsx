import {
  View,
  Text,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

type MyLibraryRecentItemProps = {
  image: ImageSourcePropType;
  title: string;
  genre: string;
  year: number;
  seasons: number;
  onPress?: () => void;
};

export default function MyLibraryRecentItem({
  image,
  title,
  genre,
  year,
  seasons,
  onPress,
}: MyLibraryRecentItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 min-w-[48%] max-w-[48%] rounded-xl bg-slate-800 overflow-hidden"
    >
      <ImageBackground
        source={image}
        className="w-full h-[14vh] bg-cover bg-center relative"
      >
        <View className="w-full h-full absolute">
          <View className="w-full h-full flex justify-end items-start p-4" />
        </View>
      </ImageBackground>
      <View className="w-full h-[10vh] p-2 flex flex-row justify-between">
        <View>
          <Text className="text-white text-lg">{title}</Text>
          <Text className="text-slate-500 text-xs">
            {genre} - {year} - {seasons} seasons
          </Text>
        </View>
        <View>{/* Available on what streaming platform? */}</View>
      </View>
    </TouchableOpacity>
  );
}
