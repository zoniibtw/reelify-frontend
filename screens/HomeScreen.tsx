import { View, Text } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import IdentifyButton from '../components/IdentifyButton';
import HomeDragger from '../components/HomeDragger';

export default function HomeScreen() {
  return (
    <View className='flex flex-col justify-between h-screen w-screen'>
      <View className='w-screen h-screen pb-[16vh] flex flex-col items-center justify-center'>
        <View className=''>
          <Text className='flex font-semibold text-lg text-black'>Tap to Identify</Text>
        </View>
        <View className='mt-5'>
          <IdentifyButton />
        </View>
      </View>
      <HomeDragger />
    </View>
  );
}