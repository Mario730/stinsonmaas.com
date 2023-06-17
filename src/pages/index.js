import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle = "Home">
      <h2>Welcome!</h2>
      <ul>
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2><Link to={`/post/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link></h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Home"/>

export default IndexPage