import { Slot } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Define provides shared between components
export default function RootLayout() {
    return <GestureHandlerRootView style={{flex: 1}}><Slot/></GestureHandlerRootView>
}