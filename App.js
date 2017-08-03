import React from 'react'
import {Text, View, ScrollView} from 'react-native'
import {tokenizer, parser, transform} from 'html2any'
import {logJSON, mergeStyle} from './utils'
import {getElement} from './lib'
import {html, complexHtml} from './consts'
import styles from './App.styles'

class App extends React.Component {
  render() {
    const ast = parser(tokenizer(complexHtml))[0]
    const component = transform(ast, getElement)
  
    return (
      <ScrollView style={styles.root}>
        <View>
          <Text style={styles.title}>Transformed Tesult</Text>
          <View style={styles.preview}>
            {component}
          </View>
        </View>

        <View>
          <Text style={styles.title}>AST</Text>
          <Text style={{color: '#608543'}}>
            {logJSON(ast)}
          </Text>
        </View>
      </ScrollView>
    )
  }
}

export default App
