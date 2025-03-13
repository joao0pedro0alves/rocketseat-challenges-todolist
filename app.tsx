import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { Platform, StyleSheet, View } from 'react-native'

import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import * as NavigationBar from 'expo-navigation-bar'

import { Home } from './src/screens/Home'
import theme from './src/theme'
import { Loading } from './src/components/loading'
import { useEffect } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync(theme.COLORS.GRAY_600)
    }
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" translucent />

        {fontsLoaded ? <Home /> : <Loading />}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.COLORS.GRAY_600,
  },
})
