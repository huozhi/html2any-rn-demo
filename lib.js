import React from 'react'
import he from 'he'

import {Text, View, Image, StyleSheet, Dimensions} from 'react-native'
import {logJSON, mergeStyle} from './utils'

const w = Dimensions.get('window')

const styles = StyleSheet.create({
  a: {
    color: '#0f88eb',
  },
  h1: {
    fontSize: 36,
    color: '#282828',
  },
  p: {
    color: '#282828',
    fontSize: 16,
  },
  strong: {
    fontSize: 16,
    fontWeight: '700',
  },
  b: {
    fontSize: 16,
    fontWeight: '700',
  },
  em: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  span: {
    fontSize: 15,
  },
  text: {},
  view: {
    width: w.width,
    height: w.height / 3,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  img: {
    marginVertical: 20,
    width: 200,
    height: 100,

  }
})

const textTag = [
  'a', 'h1', 'p', 'b', 'span', 'strong', 'em',
]

function getElement(node, children) {
  if (typeof node === 'string') {
    // NOTICE: this way to handle string node is incorrect
    // RN does not have any method to inherit styles
    // so nested Text tags should be rendered as sibling Text nodes in a View better
    return he.decode(node)
  }
  const {name, attributes} = node
  let elem
  if (textTag.indexOf(name) >= 0) {
    const style = StyleSheet.flatten([styles.text, styles[name]])
    elem = {
      tag: Text,
      props: {...attributes, style: styles[name]},
    }
  } else if (name === 'div') {
    elem = {
      tag: View,
      props: {
        ...attributes,
        style: styles.view,
      }
    }
  } else if (name === 'img') {
    attributes.source = {uri: attributes.src}
    delete attributes.src
    attributes.style = styles.img
    elem = {
      tag: Image,
      props: attributes,
    }
  } else if (name === 'br') {
    elem = {
      tag: Text,
      props: attributes,
    }
  }

  if (!elem) {
    return null
  }

  // add react index prop
  if (typeof node.index === 'number') {
    Object.assign(elem.props, {key: node.index})
  }

  return React.createElement(elem.tag, elem.props, children)
}

export {
  getElement,
}
