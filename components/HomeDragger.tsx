import { View, Text } from 'react-native';

export default function HomeDragger() {
  return (
    <View className='h-[16vh] absolute bottom-0 bg-black w-screen rounded-t-2xl'>
        <View className='w-full h-full flex flex-col justify-between'>
            <View className='flex items-center w-full h-auto pt-3'>
                <View className='w-12 bg-slate-200 rounded-full h-1.5'></View>
            </View>
            <View className='mt-2 flex-1 flex-row w-full px-8 justify-center'>
                <View className=' w-1/2'>
                    <Text className='text-2xl font-bold tracking-wide text-white'>My Library</Text>
                    <Text className='text-sm font-normal tracking-wider text-gray-100'>123 saved</Text>
                </View>
                <View className='w-1/2'></View>
            </View>
        </View>
    </View>
  );
}