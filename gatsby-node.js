const readingTime = require('reading-time')
const fetch = require('node-fetch')
const xml2js = require('xml2js')

// Existing: Add reading time to MDX posts
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

// Fetch ArXiv papers at build time
exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions

  const ARXIV_API_URL = 'http://export.arxiv.org/api/query'
  const searchQuery = 'au:Stinson-Maas'
  const maxResults = 100

  try {
    console.log('Fetching ArXiv papers for author: Stinson-Maas')

    const response = await fetch(
      `${ARXIV_API_URL}?search_query=${searchQuery}&start=0&max_results=${maxResults}&sortBy=submittedDate&sortOrder=descending`
    )

    if (!response.ok) {
      console.warn(`ArXiv API returned ${response.status}`)
      return
    }

    const xmlData = await response.text()
    const parser = new xml2js.Parser({ explicitArray: false })
    const result = await parser.parseStringPromise(xmlData)

    // Handle case where no entries exist
    const entries = result.feed.entry
    if (!entries) {
      console.log('No ArXiv papers found for author Stinson-Maas')
      return
    }

    // Normalize to array (single result comes as object)
    const papers = Array.isArray(entries) ? entries : [entries]

    papers.forEach((paper) => {
      // Extract ArXiv ID from the full URL
      // Format: http://arxiv.org/abs/2301.12345v1
      const fullId = paper.id
      const arxivId = fullId.split('/abs/')[1]?.replace(/v\d+$/, '') || fullId

      // Parse authors (can be single object or array)
      const authorData = paper.author
      const authors = Array.isArray(authorData)
        ? authorData.map((a) => a.name)
        : [authorData?.name].filter(Boolean)

      // Parse categories (can be single or array)
      const categoryData = paper.category
      const categories = Array.isArray(categoryData)
        ? categoryData.map((c) => c.$.term)
        : [categoryData?.$.term].filter(Boolean)

      // Extract PDF link from links array
      const links = Array.isArray(paper.link) ? paper.link : [paper.link]
      const pdfLink =
        links.find((l) => l.$ && l.$.type === 'application/pdf')?.$.href ||
        `https://arxiv.org/pdf/${arxivId}.pdf`

      // Parse dates
      const published = new Date(paper.published)
      const year = published.getFullYear()

      // Create the node data
      const nodeData = {
        arxivId,
        title: paper.title.replace(/\s+/g, ' ').trim(),
        authors,
        abstract: paper.summary.replace(/\s+/g, ' ').trim(),
        published: paper.published,
        updated: paper.updated,
        year,
        categories,
        primaryCategory: categories[0] || 'unknown',
        pdfLink,
        arxivLink: `https://arxiv.org/abs/${arxivId}`,
      }

      createNode({
        ...nodeData,
        id: createNodeId(`ArxivPaper-${arxivId}`),
        parent: null,
        children: [],
        internal: {
          type: 'ArxivPaper',
          contentDigest: createContentDigest(nodeData),
          description: 'ArXiv research paper',
        },
      })
    })

    console.log(`Created ${papers.length} ArXiv paper nodes`)
  } catch (error) {
    console.error('Error fetching ArXiv papers:', error.message)
    // Don't throw - allow build to continue without papers
  }
}
