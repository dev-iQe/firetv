import React from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import SettingsScreen from './src/screens/SettingsScreen';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <SettingsScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
