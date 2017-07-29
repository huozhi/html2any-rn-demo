import he from 'he'
import {tokenizer, parser} from 'html2any'
import {getElement} from './utils'

export const parseASTFromHTML = html => parser(tokenizer(html))[0]

export const transform = (node, next) => {
  if (node) {
    let tag
    if (Array.isArray(node)) {
      return node.map((n, idx) => {
        const {tag, props: elemProps} = getElement(n)
        const props = {...elemProps, key: idx}
        return next(tag, props, transform(n.children, next))
      })
    } else if (node.name) {
      const {tag, props} = getElement(node)
      return next(tag, props, transform(node.children, next))
    } else if (typeof node === 'string') {
      return he.decode(node)
    }
  }
  return null
}
