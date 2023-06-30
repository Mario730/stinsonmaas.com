import * as React from 'react'
// import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import {

} from '../components/home.module.css'

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle = "Home">
      <h2>Welcome!</h2>
    </Layout>
  )
}

export const Head = () => <Seo title="Home"/>

export default IndexPage