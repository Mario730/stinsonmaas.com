const readingTime = require('reading-time')

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const text = node.body || ''
    const stats = readingTime(text)

    createNodeField({
      node,
      name: 'timeToRead',
      value: Math.ceil(stats.minutes) || 1,
    })
  }
}
