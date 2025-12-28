import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <h2>Welcome!</h2>
      <div className="home-grid">
        <p>
          My name is Mario Stinson-Maas and I am a Computer Science and Mathematics
          double major from Oberlin College. I graduated in May 2025 with Honors in Mathematics.
        </p>
        <StaticImage
          src="../../static/seniorpic.jpg"
          alt="Mario Stinson-Maas portrait"
          placeholder="blurred"
          layout="constrained"
          width={400}
          className="profile-image"
        />
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
