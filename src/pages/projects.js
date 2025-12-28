import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const projects = [
  {
    title: 'Personal Portfolio Website',
    description:
      'This very website! Built with Gatsby and React, featuring a blog, dark mode, responsive design, and optimized performance.',
    tags: ['React', 'Gatsby', 'JavaScript', 'CSS'],
    github: 'https://github.com/Mario730/stinsonmaas.com',
    live: 'https://www.stinsonmaas.com',
  },
  {
    title: 'Mathematics Honors Thesis',
    description:
      'My undergraduate honors thesis exploring advanced mathematical concepts and their computational applications.',
    tags: ['Mathematics', 'LaTeX', 'Research'],
    github: null,
    live: null,
  },
  {
    title: 'Algorithm Visualizer',
    description:
      'An interactive tool for visualizing sorting and searching algorithms, helping students understand algorithmic complexity.',
    tags: ['JavaScript', 'Algorithms', 'Education'],
    github: 'https://github.com/Mario730',
    live: null,
  },
]

const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <h1>Projects</h1>
      <p>
        Here are some of the projects I've worked on. Each represents a learning
        experience and a step forward in my development journey.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <h2 style={{ marginTop: '3rem' }}>More Coming Soon</h2>
      <p>
        I'm always working on new projects. Check back soon or follow me on{' '}
        <a
          href="https://github.com/Mario730"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        to see what I'm building next!
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="Projects" pathname="/projects" />

export default ProjectsPage
