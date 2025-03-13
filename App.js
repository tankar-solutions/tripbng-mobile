import { View, Text } from 'react-native';
import React from 'react';
import Navigation from './src/MainNavigation/Navigation';
import Toast from 'react-native-toast-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigation />
      <Toast />
    </GestureHandlerRootView>
  );
};

export default App;
