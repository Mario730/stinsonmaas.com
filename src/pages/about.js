import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle = "About Me">
      <p>My name is Mario Stinson-Maas and I am a Computer Science and Mathematics double major at Oberlin College. I am on track to graduate with a Bachelor's degree in the Spring of 2025.<br></br>I have loved math my whole life, and I started coding in middle school using Khan Academy. After several years of coding for fun, I saw an opportunity to build a website for a local nonprofit in my community, Women4Women Tempe!</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me"/>

export default AboutPage