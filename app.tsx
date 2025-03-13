import { useEffect } from 'react'
import { Platform, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { StatusBar } from 'expo-status-bar'
import * as NavigationBar from 'expo-navigation-bar'
import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'

import { Loading } from '@/components/loading'
import { Home } from '@/screens/Home'
import theme from './src/theme'

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
