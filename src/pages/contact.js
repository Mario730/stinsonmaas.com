import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const linkStyles = {
  list: {
    marginTop:"5%",
    listStyle:"none",
    display:"grid",
    gridTemplateColumns:"repeat(2, 1fr)",
    height:"10%"
  },
  listItem: {
    margin:"auto",
    maxHeight:"5%",
    display:"block"
  }
}

const ContactPage = () => {
  return (
    <Layout pageTitle = "Contact">
      <h1>Contact me!</h1>
      <p>Email: mario@stinsonmaas.com</p>
      <ul style={linkStyles.list}>
        <li><a href="https://github.com/Mario730"><img style={linkStyles.listItem} src="/GitHublogo.png" alt="Github" /></a></li>
        <li><a href="
        https://www.linkedin.com/in/mario-stinson-maas-871912248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bj3GJCRhATmi%2FCp7LZDCkSA%3D%3D
        "><img style={linkStyles.listItem} src="/linkedinlogo.png" max-height="10%" alt="LinkedIn" /></a>
        </li>
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Me"/>

export default ContactPage