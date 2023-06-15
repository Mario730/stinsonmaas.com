import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle = "Home">
      <p>Welcome!</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Home"/>

export default IndexPage