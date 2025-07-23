import { TextInput } from 'react-native';
import { useColorScheme } from 'react-native';

export default function Input(props: React.ComponentProps<typeof TextInput>) {
  const colorScheme = useColorScheme();

  return (
    <TextInput
      {...props}
      className={`w-full px-4 py-2 rounded-md border ${
        colorScheme === 'dark'
          ? 'bg-gray-800 border-gray-700 text-white'
          : 'bg-white border-gray-300 text-black'
      }`}
      placeholderTextColor={colorScheme === 'dark' ? '#9CA3AF' : '#6B7280'}
    />
  );
}