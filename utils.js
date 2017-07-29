import {View, Text} from 'react-native'
import styles from './App.styles'

export const logJSON = x => JSON.stringify(x, null, 2)

export const mergeStyle = (props, style) => ({...props, style})

export const getElement = node => {
  const {name, attribues} = node
  switch (name) {
    case 'p': {
      return {
        tag: Text,
        props: mergeStyle(attribues, styles.paragraph),
      }
    }
    case 'b': {
      return {
        tag: Text,
        props: mergeStyle(attribues, styles.bold),
      }
    }
    case 'div': {
      return {
        tag: View,
        props: mergeStyle(attribues, styles.view),
      }
    }
    default: return null
  }
}
