import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => {
  return (
    <Layout pageTitle="Contact">
      <h1>Contact Me</h1>
      <p>
        I'd love to hear from you! Whether you have a question, want to collaborate,
        or just want to say hello, feel free to reach out.
      </p>

      <h2>Email</h2>
      <p>
        Personal - <a href="mailto:mario@stinsonmaas.com">mario@stinsonmaas.com</a><br />
        School - <a href="mailto:mariosm@nmsu.edu">mariosm@nmsu.edu</a>
      </p>

      <h2>Connect</h2>
      <ul className="contact-grid">
        <li>
          <a
            href="https://github.com/Mario730"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <img src="/GitHublogo.png" alt="" aria-hidden="true" />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mario-stinson-maas-871912248"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
          >
            <img src="/linkedinlogo.png" alt="" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Me" pathname="/contact" />

export default ContactPage
