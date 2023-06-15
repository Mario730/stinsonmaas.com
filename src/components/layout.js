import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  container,
  // heading,
  navLinks,
  split,
  currentPage,
  logo
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  function PageLinkTest({ page, link}) {
    if (page === pageTitle) {
      return <li><a href={link} className={currentPage}>{page}</a></li>;
    } else return <li><a href={link}>{page}</a></li>;
  }

  function SplitPageLinkTest({ page, link}) {
    if (page === pageTitle) {
      return <li className={split}><a href={link} className={currentPage}>{page}</a></li>;
    } else return <li className={split}><a href={link}>{page}</a></li>;
  }
  
  return (
    <div className={container}>
      <nav>
        <a href="/" className={logo}>Mario<br/>Stinson-Maas</a>
        <ul className={navLinks}>
          <PageLinkTest page="About" link="/about" />
          <PageLinkTest page="Resume" link="/resume" />
          <SplitPageLinkTest page="Contact" link="/contact" />
        </ul>
      </nav>
      <main>
        {children}
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default Layout