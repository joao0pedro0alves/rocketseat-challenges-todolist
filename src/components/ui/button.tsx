import {
  StyleSheet,
  TouchableOpacity,
  type TouchableHighlightProps,
} from 'react-native'

import { Feather } from '@expo/vector-icons'
import theme from '@/theme'

type ButtonVariants = 'PRIMARY' | 'SECONDARY'

interface ButtonProps extends TouchableHighlightProps {
  iconName: keyof typeof Feather.glyphMap

  variant?: ButtonVariants
  size?: 'default' | 'large'
}

export function Button(props: ButtonProps) {
  const { iconName, variant = 'PRIMARY', size = 'default', ...rest } = props

  const isLarge = size === 'large'
  const isSecondary = variant === 'SECONDARY'

  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSecondary && styles.secondary,
        isLarge && styles.largeSize,
      ]}
      {...rest}
    >
      <Feather
        color={isSecondary ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_300}
        name={iconName}
        size={20}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    width: 32,
    borderRadius: 4,

    justifyContent: 'center',
    alignItems: 'center',
  },
  largeSize: {
    height: 52,
    width: 52,
  },
  secondary: {
    backgroundColor: theme.COLORS.BLUE_DARK,
  },
})
