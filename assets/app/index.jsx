const ReactDOM = require('react-dom')
const React = require('react')
const MdDom = require('./mddom')

// disable eslint rule: http://eslint.org/docs/user-guide/configuring.html#disabling-rules-with-inline-comments
// eslint-disable-next-line
const __webpack_public_path__ = 'http://localhost:4001/'

const container = document.getElementsByClassName('article-entry')[0]
ReactDOM.render(
  <MdDom />, container
)
