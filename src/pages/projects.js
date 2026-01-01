import * as React from 'react'
import { useState, useMemo } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ResearchPage = ({ data }) => {
  const papers = useMemo(() => data.allArxivPaper?.nodes || [], [data])
  const years = data.allArxivPaper?.distinct || []
  const categories = data.allArxivPaper?.categories || []

  // Filter state
  const [selectedYear, setSelectedYear] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Memoized filtered papers
  const filteredPapers = useMemo(() => {
    return papers.filter((paper) => {
      const yearMatch =
        selectedYear === 'all' || paper.year.toString() === selectedYear
      const categoryMatch =
        selectedCategory === 'all' ||
        paper.categories.includes(selectedCategory)
      return yearMatch && categoryMatch
    })
  }, [papers, selectedYear, selectedCategory])

  return (
    <Layout pageTitle="Research">
      <h1>Research Publications</h1>
      <p>
        Academic papers and preprints from ArXiv. Publications are automatically
        fetched from the ArXiv database.
      </p>

      {papers.length > 0 ? (
        <>
          {/* Filter Controls */}
          <div className="filter-controls">
            <div className="filter-group">
              <label htmlFor="year-filter">Year:</label>
              <select
                id="year-filter"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Years</option>
                {years
                  .sort((a, b) => b - a)
                  .map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="category-filter">Category:</label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                <option value="all">All Categories</option>
                {categories.sort().map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <span className="results-count">
              Showing {filteredPapers.length} of {papers.length} papers
            </span>
          </div>

          {/* Papers Grid */}
          <div className="projects-grid">
            {filteredPapers.map((paper) => (
              <article
                key={paper.arxivId}
                className="project-card paper-card"
              >
                <h3>{paper.title}</h3>

                <p className="paper-authors">{paper.authors.join(', ')}</p>

                <p className="paper-date">
                  {paper.published} &middot; {paper.primaryCategory}
                </p>

                <p className="paper-abstract">
                  {paper.abstract.length > 280
                    ? `${paper.abstract.substring(0, 280)}...`
                    : paper.abstract}
                </p>

                <div className="project-tags">
                  {paper.categories.slice(0, 3).map((cat) => (
                    <span key={cat} className="project-tag">
                      {cat}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={paper.arxivLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ArXiv
                  </a>
                  <a
                    href={paper.pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PDF
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredPapers.length === 0 && (
            <div className="no-papers">
              <p>No papers match the selected filters.</p>
            </div>
          )}
        </>
      ) : (
        <div className="no-papers">
          <h3>No publications yet</h3>
          <p>
            Research papers will appear here once they are published on ArXiv.
          </p>
        </div>
      )}
    </Layout>
  )
}

export const query = graphql`
  query ResearchPageQuery {
    allArxivPaper(sort: { published: DESC }) {
      nodes {
        arxivId
        title
        authors
        abstract
        published(formatString: "MMMM D, YYYY")
        year
        categories
        primaryCategory
        pdfLink
        arxivLink
      }
      distinct(field: { year: SELECT })
      categories: distinct(field: { primaryCategory: SELECT })
    }
  }
`

export const Head = () => (
  <Seo
    title="Research"
    description="Academic research papers and publications by Mario Stinson-Maas"
    pathname="/projects"
  />
)

export default ResearchPage
