import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <div className="about-content">
        <h1>About Me</h1>

        <p>
          Hello! I'm Mario Stinson-Maas, a Computer Science and Mathematics double major
          from Oberlin College. I graduated in May 2025 with Honors in Mathematics,
          combining my passion for theoretical foundations with practical software development.
        </p>

        <h2>Education</h2>
        <p>
          At Oberlin College, I pursued a rigorous curriculum that bridged pure mathematics
          and computer science. My Honors thesis in Mathematics allowed me to explore
          the intersection of these fields, developing both analytical thinking and
          problem-solving skills that I apply to every project I undertake.
        </p>

        <h2>What I Do</h2>
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
        </p>

        <h2>Technical Skills</h2>
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
        </div>

        <h2>Get in Touch</h2>
        <p>
          I'm always interested in connecting with fellow developers, mathematicians,
          and anyone passionate about technology. Feel free to reach out through my{' '}
          <a href="/contact">contact page</a> or connect with me on{' '}
          <a href="https://github.com/Mario730" target="_blank" rel="noopener noreferrer">GitHub</a> and{' '}
          <a href="https://www.linkedin.com/in/mario-stinson-maas-871912248" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" pathname="/about" />

export default AboutPage
