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
        <a href="mailto:mario@stinsonmaas.com">mario@stinsonmaas.com</a>
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

      <h2>Send a Message</h2>
      <form
        className="contact-form"
        action="https://formspree.io/f/your-form-id"
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="your@email.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Your message..."
          />
        </div>
        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>
      <p style={{ marginTop: '1rem', fontSize: '0.9em', color: '#666' }}>
        Note: To enable this form, sign up at{' '}
        <a href="https://formspree.io" target="_blank" rel="noopener noreferrer">
          Formspree
        </a>{' '}
        and replace "your-form-id" with your actual form ID.
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Me" pathname="/contact" />

export default ContactPage
