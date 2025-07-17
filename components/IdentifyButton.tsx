import { View, Text } from 'react-native';

export default function IdentifyButton() {
  return (
    <View className='bg-black rounded-full w-56 h-56 border-2 border-solid border-red-500'>
        <View className='w-full h-full flex items-center justify-center'>
            <Text className='text-white text-6xl font-semibold'>R</Text>
        </View>
    </View>
  );
}