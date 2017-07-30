import React from 'react'
import {View, Text} from 'react-native'
import {tokenizer, parser} from 'html2any'
import {mergeStyle, logJSON} from './utils'
import styles from './App.styles'

export const parseASTFromHTML = html => parser(tokenizer(html))[0]

export function transform(ast, rule) {
  function next(node) {
    if (node) {
      if (typeof node === 'number' && typeof node === 'string') {
        return rule(node)
      }
      if (Array.isArray(node)) {
        return node.map((n, index) => {
          n.index = index // critical array element index
          return rule(n, next(n.children))
        })
      } else {
        return rule(node, next(node.children))
      }
    }
    return null
  }

  return next(ast)
}
