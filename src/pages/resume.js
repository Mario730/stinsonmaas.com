import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ResumeSection = ({ title, children }) => (
  <section style={{ marginBottom: '2rem' }}>
    <h2 style={{
      color: '#612785',
      borderBottom: '2px solid #eda655',
      paddingBottom: '0.5rem',
      marginBottom: '1rem'
    }}>
      {title}
    </h2>
    {children}
  </section>
)

const ResumeItem = ({ title, subtitle, date, children }) => (
  <div style={{ marginBottom: '1.5rem' }}>
    <h3 style={{ marginBottom: '0.25rem', color: '#333' }}>{title}</h3>
    {subtitle && (
      <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '0.25rem' }}>
        {subtitle}
      </p>
    )}
    {date && (
      <p style={{ color: '#888', fontSize: '0.9em', marginBottom: '0.5rem' }}>
        {date}
      </p>
    )}
    {children}
  </div>
)

const ResumePage = () => {
  return (
    <Layout pageTitle="Resume">
      <div style={{ maxWidth: '800px' }}>
        <h1>Resume</h1>
        <p style={{ marginBottom: '2rem' }}>
          <a
            href="/resume.pdf"
            download
            style={{
              display: 'inline-block',
              background: 'linear-gradient(to right, #612785, #71289f)',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              textDecoration: 'none',
              marginRight: '1rem'
            }}
          >
            Download PDF
          </a>
          {/* <span style={{ color: '#666', fontSize: '0.9em' }}>
            (Add your resume.pdf to the static folder)
          </span> */}
        </p>

        <ResumeSection title="Education">
        <ResumeItem
            title="New Mexico State University"
            subtitle="Ph.D. in Mathematics"
            date="August 2025 - Present"
          >
            {/* <ul style={{ paddingLeft: '1.5rem', color: '#555' }}>
              <li>Relevant coursework: Data Structures, Algorithms, Abstract Algebra, Real Analysis, Linear Algebra</li>
            </ul> */}
          </ResumeItem>
          <ResumeItem
            title="Oberlin College"
            subtitle="B.A. in Computer Science and Mathematics (Double Major)"
            date="August 2021 - May 2025"
          >
            <ul style={{ paddingLeft: '1.5rem', color: '#555' }}>
              <li>Relevant coursework: Data Structures, Algorithms, Abstract Algebra, Real Analysis, Linear Algebra</li>
            </ul>
          </ResumeItem>
        </ResumeSection>

        <ResumeSection title="Technical Skills">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem'
          }}>
            <div>
              <h4 style={{ color: '#612785', marginBottom: '0.5rem' }}>Programming Languages</h4>
              <p style={{ color: '#555' }}>JavaScript, TypeScript, Python, Java, C/C++, SQL</p>
            </div>
            <div>
              <h4 style={{ color: '#612785', marginBottom: '0.5rem' }}>Web Technologies</h4>
              <p style={{ color: '#555' }}>React, Gatsby, Node.js, HTML/CSS, REST APIs</p>
            </div>
            <div>
              <h4 style={{ color: '#612785', marginBottom: '0.5rem' }}>Tools & Platforms</h4>
              <p style={{ color: '#555' }}>Git, GitHub, Linux/Unix, VS Code, LaTeX</p>
            </div>
            <div>
              <h4 style={{ color: '#612785', marginBottom: '0.5rem' }}>Mathematics</h4>
              <p style={{ color: '#555' }}>Linear Algebra, Abstract Algebra, Analysis, Discrete Math</p>
            </div>
          </div>
        </ResumeSection>

        {/* <ResumeSection title="Projects">
          <ResumeItem
            title="Personal Portfolio Website"
            date="2023 - Present"
          >
            <ul style={{ paddingLeft: '1.5rem', color: '#555' }}>
              <li>Built a responsive portfolio using Gatsby and React</li>
              <li>Implemented blog functionality with MDX support</li>
              <li>Added dark mode, SEO optimization, and accessibility features</li>
            </ul>
          </ResumeItem>
          <ResumeItem
            title="Mathematics Honors Thesis"
            date="2024 - 2025"
          >
            <ul style={{ paddingLeft: '1.5rem', color: '#555' }}>
              <li>Conducted original research in mathematics</li>
              <li>Applied computational methods to theoretical problems</li>
              <li>Presented findings to faculty committee</li>
            </ul>
          </ResumeItem>
        </ResumeSection> */}
{/* 
        <ResumeSection title="Interests">
          <p style={{ color: '#555' }}>
            Music composition and production, algorithm visualization, mathematical research,
            open-source software development, and continuous learning in emerging technologies.
          </p>
        </ResumeSection> */}
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Resume" pathname="/resume" />

export default ResumePage
