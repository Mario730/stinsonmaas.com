import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const PostsPage = ({ data }) => {
  return (
    <Layout pageTitle="Posts">
      <h1>Blog Posts</h1>
      <p style={{ marginBottom: '2rem' }}>
        Some of my recent projects.
      </p>

      <div className="projects-grid">
        {data.allMdx.nodes.map((node) => (
          <article key={node.id} className="project-card">
            <Link
              to={`/post/${node.frontmatter.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h3 style={{ color: '#612785', marginBottom: '0.5rem' }}>
                {node.frontmatter.title}
              </h3>
              <p style={{ color: '#888', fontSize: '0.9em', marginBottom: '0.75rem' }}>
                {node.frontmatter.date} &middot; {node.fields?.timeToRead || 1} min read
              </p>
              <p style={{ color: '#555' }}>
                {node.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>

      {data.allMdx.nodes.length === 0 && (
        <p>No posts yet. Check back soon!</p>
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        excerpt(pruneLength: 150)
        id
        fields {
          timeToRead
        }
      }
    }
  }
`

export const Head = () => <Seo title="Posts" pathname="/post" />

export default PostsPage
