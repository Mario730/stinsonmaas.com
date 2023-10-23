import * as React from 'react'
// import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const column = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: "2%",
  marginTop: "5%"
}


const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle = "Home">
      <h2>Welcome!</h2>
      <div style={column}>
        <p>My name is Mario Stinson-Maas and I am a third year at Oberlin College. I am majoring in both
          Mathematics and Computer Science, and I expect to graduate May 2025 with Honors in Mathematics.
        </p>
        <img width="100%" src="/seniorpic.jpg" alt="Senior pic"></img>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home"/>

export default IndexPage