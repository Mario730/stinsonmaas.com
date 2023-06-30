import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  // heading,
  navLinks,
  split,
  currentPage,
  logo
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  function PageLinkTest({ page, link}) {
    if (page === pageTitle) {
      return <li><Link to={link} className={currentPage}>{page}</Link></li>;
    } else return <li><Link to={link}>{page}</Link></li>;
  }

  function SplitPageLinkTest({ page, link}) {
    if (page === pageTitle) {
      return <li className={split}><Link to={link} className={currentPage}>{page}</Link></li>;
    } else return <li className={split}><Link to={link}>{page}</Link></li>;
  }
  
  return (
    <div className={container}>
      <nav>
        <Link to="/" className={logo}>Mario<br/>Stinson-Maas</Link>
        <ul className={navLinks}>
          <PageLinkTest page="Posts" link="/post" />
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