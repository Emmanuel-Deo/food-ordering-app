import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import { CartProvider } from './contexts/CartContext';

export default function App() {
  return (
    <View style={styles.container}>
    <CartProvider>
      <AppNavigator />
      <StatusBar style="auto" />
      </CartProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
