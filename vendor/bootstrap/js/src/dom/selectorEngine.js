/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): dom/selectorEngine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import Polyfill from './polyfill'
import {
  makeArray
} from '../util/index'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const findFn = Polyfill.find
const findOne = Polyfill.findOne
const NODE_TEXT = 3

const SelectorEngine = {
  matches(element, selector) {
    return element.matches(selector)
  },

  find(selector, element = document.documentElement) {
    if (typeof selector !== 'string') {
      return null
    }

    return findFn.call(element, selector)
  },

  findOne(selector, element = document.documentElement) {
    if (typeof selector !== 'string') {
      return null
    }

    return findOne.call(element, selector)
  },

  children(element, selector) {
    if (typeof selector !== 'string') {
      return null
    }

    const children = makeArray(element.children)

    return children.filter((child) => this.matches(child, selector))
  },

  parents(element, selector) {
    if (typeof selector !== 'string') {
      return null
    }

    const parents = []
    let ancestor = element.parentNode

    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT) {
      if (this.matches(ancestor, selector)) {
        parents.push(ancestor)
      }

      ancestor = ancestor.parentNode
    }

    return parents
  },

  closest(element, selector) {
    if (typeof selector !== 'string') {
      return null
    }

    return element.closest(selector)
  },

  prev(element, selector) {
    if (typeof selector !== 'string') {
      return null
    }

    const siblings = []
    let previous = element.previousSibling

    while (previous && previous.nodeType === Node.ELEMENT_NODE && previous.nodeType !== NODE_TEXT) {
      if (this.matches(previous, selector)) {
        siblings.push(previous)
      }

      previous = previous.previousSibling
    }

    return siblings
  }
}

export default SelectorEngine
