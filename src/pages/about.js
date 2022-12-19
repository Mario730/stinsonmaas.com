import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle = "About me">
      <p>My name is Mario Stinson-Maas and I am a Computer Science and Mathematics double major at Oberlin College. I enjoy music and basketball!</p>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage