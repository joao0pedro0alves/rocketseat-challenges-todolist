import { StyleSheet, Text, View } from 'react-native'
import { Button } from './ui/button'
import theme from '@/theme'
import { Checkbox } from './ui/checkbox'

interface TaskProps {
  name: string
  isComplete?: boolean
  onToggleComplete: (checked: boolean) => void
  onRemove: () => void
}

export function Task({
  name,
  isComplete = false,
  onToggleComplete,
  onRemove,
}: TaskProps) {
  return (
    <View style={styles.container}>
      <Checkbox checked={isComplete} onChange={onToggleComplete} />

      <Text style={[styles.title, isComplete && styles.titleDone]}>{name}</Text>

      <Button iconName="trash-2" onPress={onRemove} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxHeight: 64,
    padding: 12,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,

    backgroundColor: theme.COLORS.GRAY_500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.COLORS.GRAY_400,
    borderRadius: 8,

    marginBottom: 8,
  },
  title: {
    flex: 1,
    maxWidth: '75%',
    color: theme.COLORS.GRAY_100,
    fontSize: theme.FONT_SIZE.SM,
    fontFamily: theme.FONT_FAMILY.REGULAR,
  },
  //
  titleDone: {
    textDecorationLine: 'line-through',
    color: theme.COLORS.GRAY_300,
  },
})
