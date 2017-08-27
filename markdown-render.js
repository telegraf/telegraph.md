function render (ast) {
  let cursor = { children: [] }
  const stack = [cursor]
  const walker = ast.walker()
  let event
  while ((event = walker.next())) {
    const node = event.node
    if (!event.entering) {
      cursor = stack.pop()
      continue
    }
    if (!node.isContainer) {
      cursor.children.push(convertNode(node))
      continue
    }
    const subNode = convertNode(node)
    cursor.children.push(subNode)
    stack.push(cursor)
    cursor = subNode
  }
  return cursor.children[0].children
}

function convertNode (node) {
  const result = { tag: 'xxx' + node.type, children: [] }
  switch (node.type) {
    case 'text':
      return node.literal
    case 'softbreak':
    case 'linebreak':
    case 'thematic_break':
      result.tag = 'br'
      break
    case 'emph':
      result.tag = 'em'
      break
    case 'strong':
      result.tag = 'strong'
      break
    case 'link':
      result.tag = 'a'
      result.attrs = {
        href: node.destination
      }
      break
    case 'image':
      result.tag = 'img'
      result.attrs = {
        src: node.destination
      }
      break
    case 'code':
    case 'code_block':
      result.tag = 'code'
      result.children.push(node.literal)
      break
    case 'block_quote':
      result.tag = 'blockquote'
      break
    case 'item':
      result.tag = 'li'
      break
    case 'list':
      result.tag = node.listType === 'ordered' ? 'ol' : 'ul'
      break
    case 'heading':
      result.tag = node.level === 1 ? 'h3' : 'h4'
      break
    case 'paragraph':
      result.tag = 'p'
      break
  }
  return result
}

module.exports = render
