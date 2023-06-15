import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle = "About">
      <p></p>
      <p>My name is Mario Stinson-Maas and I am a Computer Science and Mathematics double major at Oberlin College.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About"/>

export default AboutPage