import React from 'react'
import {Text, View} from 'react-native'
import {parseASTFromHTML, transform} from './lib'
import {logJSON, mergeStyle, getElement} from './utils'
import {html} from './consts'
import styles from './App.styles'

const ast = parseASTFromHTML(html)

class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <View>
          <Text style={styles.title}>Transformed Tesult</Text>
          <View style={styles.preview}>
            {transform(ast, React.createElement)}
          </View>
        </View>

        <View>
          <Text style={styles.title}>AST</Text>
          <Text style={{color: '#608543'}}>
            {logJSON(ast)}
          </Text>
        </View>
      </View>
    )
  }
}

export default App
