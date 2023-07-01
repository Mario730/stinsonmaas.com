import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => {
  return (
    <Layout pageTitle = "Contact">
      <h1>Contact me!</h1>
      <p>Email: mario@stinsonmaas.com</p>
      <p>Github: <a href="https://github.com/Mario730">Mario730</a></p>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Me"/>

export default ContactPage