import React from 'react'
import he from 'he'
import {Text, View} from 'react-native'
import {parseASTFromHTML, transform} from './lib'
import {logJSON, mergeStyle} from './utils'
import {html} from './consts'
import styles from './App.styles'

const ast = parseASTFromHTML(html)

function getElement(node, children) {
  if (typeof node === 'string') {
    return he.decode(node)
  }
  const {name, attribues} = node
  let elem
  switch (name) {
    case 'p': {
      elem = {
        tag: Text,
        props: mergeStyle(attribues, styles.paragraph),
      }
      break
    }
    case 'b': {
      elem = {
        tag: Text,
        props: mergeStyle(attribues, styles.bold),
      }
      break
    }
    case 'div': {
      elem = {
        tag: View,
        props: mergeStyle(attribues, styles.view),
      }
      break
    }
  }

  if (!elem || !elem.tag) {
    return null
  }

  // add react index prop
  if (typeof node.index === 'number') {
    Object.assign(elem.props, {key: node.index})
  }

  return React.createElement(elem.tag, elem.props, children)
}

class App extends React.Component {
  render() {
    return (
      <View style={styles.root}>
        <View>
          <Text style={styles.title}>Transformed Tesult</Text>
          <View style={styles.preview}>
            {transform(ast, getElement)}
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
