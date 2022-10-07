import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';

const App = () => {

  const AppState = ({ children }: any) => {
    return (
      <GradientProvider>
        {children}
      </GradientProvider>
    )

  }

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppState>
          <Navigation />
        </AppState>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}

export default App