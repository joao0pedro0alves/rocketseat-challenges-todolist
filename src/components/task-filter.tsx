import theme from '@/theme'
import { View, Text, StyleSheet } from 'react-native'

interface TaskFilterProps {
  uncompletedCount: number
  completedCount: number
}

export function TaskFilter({
  completedCount,
  uncompletedCount,
}: TaskFilterProps) {
  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.uncompleted}>Criadas</Text>

        <View style={styles.taskCounter}>
          <Text style={styles.taskCounterText}>{uncompletedCount}</Text>
        </View>
      </View>

      <View style={styles.filterContainer}>
        <Text style={styles.completed}>Concluídas</Text>

        <View style={styles.taskCounter}>
          <Text style={styles.taskCounterText}>{completedCount}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  //
  uncompleted: {
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.BOLD,
    color: theme.COLORS.BLUE,
  },
  completed: {
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.BOLD,
    color: theme.COLORS.PURPLE,
  },
  //
  taskCounter: {
    width: 25,
    height: 19,

    backgroundColor: theme.COLORS.GRAY_400,
    borderRadius: 999,

    justifyContent: 'center',
    alignItems: 'center',
  },
  taskCounterText: {
    fontSize: theme.FONT_SIZE.XS,
    fontFamily: theme.FONT_FAMILY.BOLD,
    color: theme.COLORS.GRAY_200,
  },
})
