import { View } from "react-native";
import MyLibraryRecentItem from "./MyLibraryRecentItem";

export default function MyLibraryRecent() {
  const breakingBad = require("../assets/images/series/breaking-bad.webp");
  const strangerThings = require("../assets/images/series/stranger-things.webp");
  const theOffice = require("../assets/images/series/the-office.webp");
  const gameOfThrones = require("../assets/images/series/game-of-thrones.webp");
  const theCrown = require("../assets/images/series/the-crown.webp");
  const narcos = require("../assets/images/series/narcos.webp");
  return (
    <View className="flex-row flex-wrap justify-between gap-y-5">
      <MyLibraryRecentItem
        image={breakingBad}
        title="Breaking Bad"
        genre="Drama"
        year={2008}
        seasons={5}
      />
      <MyLibraryRecentItem
        image={strangerThings}
        title="Stranger Things"
        genre="Sci-Fi"
        year={2016}
        seasons={4}
      />
      <MyLibraryRecentItem
        image={theOffice}
        title="The Office"
        genre="Comedy"
        year={2005}
        seasons={9}
      />
      <MyLibraryRecentItem
        image={gameOfThrones}
        title="Game of Thrones"
        genre="Fantasy"
        year={2011}
        seasons={8}
      />
      <MyLibraryRecentItem
        image={theCrown}
        title="The Crown"
        genre="History"
        year={2016}
        seasons={6}
      />
      <MyLibraryRecentItem
        image={narcos}
        title="Narcos"
        genre="Crime"
        year={2015}
        seasons={3}
      />
    </View>
  );
}
