import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const PostPage = ({ data, children }) => {
  const { title, date } = data.mdx.frontmatter
  const timeToRead = data.mdx.fields?.timeToRead || 1

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareTitle = encodeURIComponent(title)

  return (
    <Layout pageTitle={title}>
      <Link to="/post" className="back-link">
        &larr; Back to Posts
      </Link>

      <article>
        <h1>{title}</h1>

        <div className="post-meta">
          <span>Posted: {date}</span>
          <span className="reading-time">
            {timeToRead} min read
          </span>
        </div>

        {children}

        <div className="share-buttons">
          <span style={{ marginRight: '0.5rem', color: '#666' }}>Share:</span>
          <a
            href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn twitter"
          >
            Twitter
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn linkedin"
          >
            LinkedIn
          </a>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      fields {
        timeToRead
      }
    }
  }
`

export const Head = ({ data }) => (
  <Seo
    title={data.mdx.frontmatter.title}
    pathname={`/post/${data.mdx.frontmatter.slug}`}
  />
)

export default PostPage
