import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle = "Home">
      <p>Hello! My name is Mario Stinson-Maas and I'm the creator of this site!</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home"/>


export default IndexPage