import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  navLinks,
  split,
  currentPage,
  logo,
  skipLink
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  function PageLink({ page, link }) {
    const isActive = page === pageTitle
    return (
      <li>
        <Link
          to={link}
          className={isActive ? currentPage : undefined}
          aria-current={isActive ? "page" : undefined}
        >
          {page}
        </Link>
      </li>
    )
  }

  function SplitPageLink({ page, link }) {
    const isActive = page === pageTitle
    return (
      <li className={split}>
        <Link
          to={link}
          className={isActive ? currentPage : undefined}
          aria-current={isActive ? "page" : undefined}
        >
          {page}
        </Link>
      </li>
    )
  }

  return (
    <div className={container}>
      <a href="#main-content" className={skipLink}>Skip to content</a>
      <nav role="navigation" aria-label="Main navigation">
        <Link to="/" className={logo} aria-label="Mario Stinson-Maas - Home">
          Mario<br/>Stinson-Maas
        </Link>
        <ul className={navLinks}>
          <PageLink page="Posts" link="/post" />
          <PageLink page="Research" link="/projects" />
          <PageLink page="Resume" link="/resume" />
          <SplitPageLink page="Contact" link="/contact" />
        </ul>
      </nav>
      <main id="main-content" role="main">
        {children}
      </main>
      <footer role="contentinfo">
        <p>{new Date().getFullYear()}; Mario Stinson-Maas</p>
      </footer>
    </div>
  )
}

export default Layout
