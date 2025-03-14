import { Image, StyleSheet, Text, View } from 'react-native'

import clipboardImage from '@/assets/clipboard.png'
import theme from '@/theme'

export function TaskListEmpty() {
  return (
    <View style={styles.container}>
      <Image style={{ marginTop: 100 }} source={clipboardImage} />

      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>

      <Text style={styles.subtitle}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    borderTopWidth: 1,
    borderStyle: 'solid',
    borderTopColor: theme.COLORS.GRAY_400,
  },
  title: {
    color: theme.COLORS.GRAY_300,
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.BOLD,
    marginTop: 16,
  },
  subtitle: {
    color: theme.COLORS.GRAY_300,
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
})
