import theme from '@/theme'
import { StyleSheet, TextInput, type TextInputProps } from 'react-native'

interface InputProps extends TextInputProps {}

export function Input(props: InputProps) {
  const isFilled = props.value && props.value.length > 0

  return (
    <TextInput
      placeholderTextColor={theme.COLORS.GRAY_300}
      underlineColorAndroid="green"
      style={[styles.container, isFilled && styles.filled]}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',

    color: theme.COLORS.GRAY_100,
    fontSize: theme.FONT_SIZE.MD,
    fontFamily: theme.FONT_FAMILY.REGULAR,

    backgroundColor: theme.COLORS.GRAY_500,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'transparent',

    height: 54,
    padding: 16,
  },
  filled: {
    borderColor: theme.COLORS.PURPLE_DARK,
  },
})
