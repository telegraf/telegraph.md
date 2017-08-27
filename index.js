const { Parser } = require('commonmark')
const render = require('./markdown-render')

module.exports = function (markdown = '') {
  const reader = new Parser()
  return render(reader.parse(markdown))
}
