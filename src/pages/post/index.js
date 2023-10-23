import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
  postLinks,
  postLinkText
} from '../../components/post.module.css'

const PostsPage = ({ data }) => {
  return (
    <Layout pageTitle="Posts">
      <ul className={postLinks}>
        {data.allMdx.nodes.map((node) => (
          <li key={node.id}>
            <Link to={`/post/${node.frontmatter.slug}`} className={postLinkText}>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
              {/* <br /> */}
              {/* <p>{node.excerpt}</p> */}
            </Link>
          </li>
        ))}
      </ul>
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
        excerpt(pruneLength: 250)
        id
      }
    }
  }
`

export const Head = () => <Seo title="Posts"/>

export default PostsPage