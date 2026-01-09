import { LibraryProvider } from './src/context/LibraryContext';
import TabNavigator from './src/navigation/TabNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LibraryProvider>
        <TabNavigator />
      </LibraryProvider>
    </GestureHandlerRootView>
  );
}
