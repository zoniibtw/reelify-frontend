import { useRef, useState } from "react";
import {
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MyLibrary from "./MyLibrary";

export default function HomeDragger() {
  const screenHeight = Dimensions.get("window").height;
  const MIN_HEIGHT = screenHeight * 0.16;
  const MAX_HEIGHT = screenHeight;

  const animatedHeight = useRef(new Animated.Value(MIN_HEIGHT)).current;
  const currentHeight = useRef(MIN_HEIGHT);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const insets = useSafeAreaInsets();

  const safeAreaPadding = animatedHeight.interpolate({
    inputRange: [MIN_HEIGHT, MAX_HEIGHT],
    outputRange: [0, insets.top],
    extrapolate: "clamp",
  });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gesture) => {
        if (isLocked) return false;
        const { locationY } = evt.nativeEvent;
        return locationY <= 20;
      },
      onMoveShouldSetPanResponder: (_, gesture) =>
        !isScrolling && !isLocked && (isDragging || Math.abs(gesture.dy) > 5),
      onPanResponderGrant: () => {
        if (isLocked) return;
        setIsDragging(true);
      },
      onPanResponderMove: (_, gesture) => {
        if (isLocked) return;
        if (isDragging) {
          const newHeight = Math.max(
            Math.min(MAX_HEIGHT, currentHeight.current - gesture.dy * 0.7),
            MIN_HEIGHT
          );
          animatedHeight.setValue(newHeight);
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (isLocked) {
          return;
        }
        setIsDragging(false);
        if (-gesture.dy > screenHeight * 0.25) {
          Animated.spring(animatedHeight, {
            toValue: MAX_HEIGHT,
            damping: 30,
            stiffness: 150,
            mass: 1,
            restSpeedThreshold: 0.01,
            restDisplacementThreshold: 0.01,
            useNativeDriver: false,
          }).start(() => {
            currentHeight.current = MAX_HEIGHT;
            setIsExpanded(true);
          });
        } else {
          Animated.spring(animatedHeight, {
            toValue: MIN_HEIGHT,
            damping: 30,
            stiffness: 150,
            mass: 1,
            restSpeedThreshold: 0.01,
            restDisplacementThreshold: 0.01,
            useNativeDriver: false,
          }).start(() => {
            currentHeight.current = MIN_HEIGHT;
            setIsExpanded(false);
          });
        }
      },
    })
  ).current;

  return (
    <Animated.View
      className="absolute left-0 right-0 bottom-0 rounded-t-2xl bg-slate-950 overflow-hidden z-50"
      style={{
        height: animatedHeight,
        paddingTop: safeAreaPadding,
      }}
      {...panResponder.panHandlers}
    >
      <View className="flex items-center pt-3">
        <View id="dragger" className="w-12 h-1.5 bg-slate-200 rounded-full" />
      </View>
      <Animated.View
        className="mt-2 flex-row px-8 justify-center"
        style={{
          opacity: animatedHeight.interpolate({
            inputRange: [MIN_HEIGHT, MAX_HEIGHT],
            outputRange: [1, 0],
            extrapolate: "clamp",
          }),
        }}
      >
        <View className="w-1/2">
          <Text className="text-2xl font-bold tracking-wide text-white">
            My Library
          </Text>{" "}
          /* Change to a new proper position after opened */
          <Text className="text-sm font-normal tracking-wider text-gray-100">
            123 saved
          </Text>{" "}
          /* Should be hidden once opened */
        </View>
        <View className="w-1/2" />
      </Animated.View>
      <Animated.View
        className="px-3.5"
        style={{
          opacity: animatedHeight.interpolate({
            inputRange: [MIN_HEIGHT, MAX_HEIGHT],
            outputRange: [0, 1],
            extrapolate: "clamp",
          }),
        }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          onScrollBeginDrag={() => setIsScrolling(true)}
          onScrollEndDrag={() => setIsScrolling(false)}
          onScroll={(e) => {
            const scrollY = e.nativeEvent.contentOffset.y;
            if (scrollY > screenHeight * 0.05) {
              setIsLocked(true);
            } else {
              setIsLocked(false);
            }
          }}
          scrollEventThrottle={16}
        >
          <MyLibrary />
        </ScrollView>
      </Animated.View>
    </Animated.View>
  );
}
