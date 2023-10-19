import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import {
  postLinks,
  postList,
} from '../../components/post.module.css'

const PostsPage = ({ data }) => {
  return (
    <Layout pageTitle = "Posts">
      <ul className={postList}>
      {
        data.allMdx.nodes.map((node) => (
          <Link to={`/post/${node.frontmatter.slug}`} key={node.id} className={postLinks}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <br />
            <p>{node.excerpt}</p>
          </Link>
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

export const Head = () => <Seo title="Posts"/>

export default PostsPage