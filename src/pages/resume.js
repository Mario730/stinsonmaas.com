import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const ResumePage = () => {
  return (
    <Layout pageTitle = "Resume">
      <StaticImage
        alt="Resume"
        src="../images/Resume.jpg"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Resume"/>

export default ResumePage