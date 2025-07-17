import { View, Text, TouchableOpacity, useColorScheme, PanResponder, Animated, Dimensions } from 'react-native';
import { useRef, useEffect } from 'react';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const CLOSED_POSITION = SCREEN_HEIGHT - 100;
const OPEN_POSITION = 0;

export default function HomeScreenCopy() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const panY = useRef(new Animated.Value(CLOSED_POSITION)).current;
  const currentPosition = useRef(CLOSED_POSITION);
  const isAnimating = useRef(false);

  const animateTo = (toValue: number) => {
    isAnimating.current = true;
    Animated.spring(panY, {
      toValue,
      useNativeDriver: true,
      bounciness: 0,
      speed: 12,
    }).start(() => {
      currentPosition.current = toValue;
      isAnimating.current = false;
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dy) > 5,
      onPanResponderMove: (_, gestureState) => {
        if (isAnimating.current) return;
        let newY = currentPosition.current + gestureState.dy;
        if (newY < OPEN_POSITION) newY = OPEN_POSITION;
        if (newY > CLOSED_POSITION) newY = CLOSED_POSITION;
        panY.setValue(newY);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          animateTo(CLOSED_POSITION);
        } else if (gestureState.dy < -50) {
          animateTo(OPEN_POSITION);
        } else {
          animateTo(currentPosition.current);
        }
      },
    })
  ).current;

  useEffect(() => {
    panY.setValue(CLOSED_POSITION);
    currentPosition.current = CLOSED_POSITION;
  }, []);

  const grabberTranslateY = panY.interpolate({
    inputRange: [OPEN_POSITION, CLOSED_POSITION],
    outputRange: [insets.top + 4, 10],
    extrapolate: 'clamp',
  });

  const contentTranslateY = panY.interpolate({
    inputRange: [OPEN_POSITION, CLOSED_POSITION],
    outputRange: [60, 0],
    extrapolate: 'clamp',
  });

  return (
    <View className="flex-1 bg-white dark:bg-black px-5">
      <View className="flex-1 justify-center items-center">
        <Text className="text-xl mb-5 text-black dark:text-white">Tap to Identify</Text>
        <TouchableOpacity className="w-40 h-40 rounded-full justify-center items-center bg-black dark:bg-white">
          <Text className="text-lg font-bold text-white dark:text-black">Identify</Text>
        </TouchableOpacity>
      </View>

      <Animated.View
        {...panResponder.panHandlers}
        style={{
          transform: [{ translateY: panY }],
          position: 'absolute',
          left: 0,
          right: 0,
          height: SCREEN_HEIGHT,
          backgroundColor: colorScheme === 'dark' ? '#111827' : '#F3F4F6',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          alignItems: 'center',
        }}
      >
        <Animated.View
          style={{
            transform: [{ translateY: grabberTranslateY }],
            alignItems: 'center',
            width: '100%',
            paddingTop: 2,
          }}
        >
          <View className="w-12 h-1.5 bg-gray-400 rounded-full" />
        </Animated.View>

        <SafeAreaView className="flex-1 w-full h-full justify-start items-start pl-8">
          <Animated.View
            style={{
              transform: [{ translateY: contentTranslateY }],
              alignItems: 'center',
            }}
          >
            <Text className="text-black dark:text-white font-semibold">My Library</Text>
          </Animated.View>
        </SafeAreaView>
      </Animated.View>
    </View>
  );
}