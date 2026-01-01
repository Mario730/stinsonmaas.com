import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div className="about-content">
        <div className="home-grid">
          <div>
            <p>
              Hello! My name is Mario Stinson-Maas, and I am a Mathematics doctoral student at New Mexico State University.
              I graduated in May 2025 from Oberlin College with a Bachelor of Arts,
              where I double majored in Mathematics and Computer Science.
            </p>
            <p>
              I am primarily interested in homological algebra, algebraic topology, and graph theory.
            </p>
          </div>
          <StaticImage
            src="../../static/seniorpic.jpg"
            alt="Mario Stinson-Maas portrait"
            placeholder="blurred"
            layout="constrained"
            width={400}
            className="profile-image"
          />
        </div>

        {/* <h2>What I Do</h2>
        <p>
          I'm passionate about building software that solves real problems. My interests
          span web development, algorithmic design, and the mathematical foundations
          of computing. I enjoy tackling complex challenges and finding elegant solutions
          through code.
        </p>
        <p>
          Beyond coding, I have a deep appreciation for music and creative expression,
          which you can explore through my blog posts. I believe that the creativity
          required in music and mathematics share a common thread - both require
          pattern recognition, abstract thinking, and a willingness to experiment.
        </p> */}

        {/* <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages</h4>
            <ul>
              <li>JavaScript / TypeScript</li>
              <li>Python</li>
              <li>Java</li>
              <li>C / C++</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Web Development</h4>
            <ul>
              <li>React / Gatsby</li>
              <li>Node.js</li>
              <li>HTML / CSS</li>
              <li>REST APIs</li>
              <li>Git / GitHub</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Mathematics</h4>
            <ul>
              <li>Linear Algebra</li>
              <li>Abstract Algebra</li>
              <li>Real Analysis</li>
              <li>Discrete Mathematics</li>
              <li>Probability & Statistics</li>
            </ul>
          </div>
          <div className="skill-category">
            <h4>Tools & More</h4>
            <ul>
              <li>Linux / Unix</li>
              <li>VS Code</li>
              <li>LaTeX</li>
              <li>Data Structures</li>
              <li>Algorithms</li>
            </ul>
          </div>
        </div> */}

        <h2>Get in Touch</h2>
        <p>
          I'm always interested in connecting with other mathematicians; feel free to reach out through my{' '}
          <a href="/contact">contact page</a> or connect with me on{' '}
          <a href="https://github.com/Mario730" target="_blank" rel="noopener noreferrer">GitHub</a> and{' '}
          <a href="https://www.linkedin.com/in/mario-stinson-maas-871912248" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
