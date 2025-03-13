import { StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import theme from '@/theme'

interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
}

export function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <TouchableOpacity
      style={[styles.container, checked && styles.checked]}
      onPress={() => onChange(!checked)}
    >
      {checked && (
        <Feather color={theme.COLORS.GRAY_100} name="check" size={14} />
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.COLORS.BLUE_DARK,
    borderRadius: 12,
  },
  checked: {
    backgroundColor: theme.COLORS.PURPLE_DARK,
    borderColor: theme.COLORS.PURPLE_DARK,
  },
})
