import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  split
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
  
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li><a href="/">home</a></li>
          <li><a href="/about">about</a></li>
          <li><a href="/resume">resume</a></li>
          <li class={split}><a href="/contact">contact me!</a></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default Layout