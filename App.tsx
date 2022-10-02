import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src/navigation/Navigation';

const App = () => {

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})