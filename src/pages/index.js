import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle = "Home">
      <p>Hello! My name is Mario Stinson-Maas and I'm the creator of this site!</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage