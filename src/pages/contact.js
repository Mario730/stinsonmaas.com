import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ContactPage = () => {
  return (
    <Layout pageTitle = "Contact">
      <p>include: github, email, phone #?</p>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact"/>

export default ContactPage