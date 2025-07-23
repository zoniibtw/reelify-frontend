import { StatusBar } from 'expo-status-bar';
import AppNavigator from './navigation/AppNavigator';
import { SafeAreaProvider } from "react-native-safe-area-context";
import "./global.css"

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
      <StatusBar style="auto" />
    </>
  );
}
