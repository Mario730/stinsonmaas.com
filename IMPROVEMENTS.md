# Site Improvement Dashboard

> Analysis of stinsonmaas.com - Updated December 2025

---

## Quick Stats

| Category | Status | Notes |
|----------|--------|-------|
| Performance | Good | Image compressed (14MB → 152KB), StaticImage in use |
| SEO | Good | Meta tags, sitemap, robots.txt all working |
| Accessibility | Good | Skip link, ARIA labels, semantic HTML |
| Code Quality | Good | Dependencies updated, clean architecture |
| Content | Needs Work | Blog posts from 2023, missing resume PDF |
| Features | Good | ArXiv integration, reading time, share buttons |

---

## Completed Improvements

### Performance
- [x] Compressed `seniorpic.jpg` from 14MB to 152KB
- [x] Using `StaticImage` component with blur placeholder
- [x] Added `gatsby-plugin-manifest` and `gatsby-plugin-offline`
- [x] Added `font-display: swap` to custom fonts

### SEO
- [x] Expanded SEO component with Open Graph and Twitter cards
- [x] Added `gatsby-plugin-sitemap` and `gatsby-plugin-robots-txt`
- [x] Complete `siteMetadata` configuration
- [x] Canonical URLs on all pages

### Accessibility
- [x] Skip-to-content link with proper focus handling
- [x] Semantic HTML (`<nav>`, `<main>`, `<article>`, `<footer>`)
- [x] `aria-current="page"` on navigation
- [x] Focus-visible styles throughout
- [x] Proper alt text on images

### Features
- [x] ArXiv research database with build-time fetching
- [x] Filter by year and category on Research page
- [x] Blog reading time estimates
- [x] Social share buttons (Twitter, LinkedIn)
- [x] Responsive mobile design
- [x] Resume page with structured layout

---

## Remaining Issues

### Critical

| Issue | Location | Fix |
|-------|----------|-----|
| Missing resume.pdf | `/static/` | Add actual PDF file for download button |
| LinkedIn logo oversized | `/static/linkedinlogo.png` | Resize from 2048x2048 to 256x256 (saves ~75KB) |
| Blog screenshot large | `/static/ss1.png` | Compress or convert to WebP (currently 876KB) |

### High Priority

| Issue | Location | Fix |
|-------|----------|-----|
| No JSON-LD schemas | `seo.js` | Add Person, Article, BreadcrumbList schemas |
| Stale blog content | `/posts/` | Add recent posts (last posts from June 2023) |
| Contact form not functional | `contact.js` | Connect to Formspree or similar service |
| Commented dead code | `index.js`, `resume.js` | Clean up or remove |

### Medium Priority

| Issue | Impact | Fix |
|-------|--------|-----|
| 404 page inconsistent | Minor UX | Wrap with Layout component |
| No blog categories UI | Discoverability | Add tag/category filter to posts page |
| No search functionality | Usability | Add client-side search |
| Hard-coded social URLs | Maintainability | Extract to config file |

---

## Recommended Actions

### Immediate (Do Now)

1. **Add resume.pdf** to `/static/` folder
   - Download button currently points to non-existent file

2. **Resize LinkedIn logo**
   ```bash
   sips --resampleWidth 256 static/linkedinlogo.png
   ```

3. **Clean up commented code** in:
   - `src/pages/index.js` (lines 31-89)
   - `src/pages/resume.js` (multiple sections)

### Short-term (This Week)

1. **Add JSON-LD structured data** to SEO component:
   - Person schema on homepage
   - Article schema on blog posts

2. **Optimize blog images**:
   - Compress `ss1.png` or convert to WebP
   - Add descriptive alt text

3. **Connect contact form** to backend:
   - Sign up at [Formspree](https://formspree.io)
   - Update form action URL in `contact.js`

### Medium-term

1. **Add recent blog content** - posts are from June 2023
2. **Implement blog tag filtering** - data exists, UI needed
3. **Add analytics** - Google Analytics or Plausible
4. **Set up security headers** - CSP, X-Frame-Options

---

## File Status

| File | Status | Notes |
|------|--------|-------|
| `gatsby-config.js` | Good | All plugins configured |
| `gatsby-node.js` | Good | ArXiv fetching + reading time |
| `src/components/seo.js` | Good | Add JSON-LD schemas |
| `src/components/layout.js` | Good | Clean, accessible |
| `src/components/layout.module.css` | Good | Responsive, well-organized |
| `src/pages/index.js` | Needs cleanup | Remove commented sections |
| `src/pages/projects.js` | Good | ArXiv integration working |
| `src/pages/resume.js` | Needs cleanup | Remove comments, add PDF |
| `src/pages/contact.js` | Needs work | Connect form backend |
| `src/pages/post/*.js` | Good | Reading time, share buttons |
| `static/linkedinlogo.png` | Needs resize | 2048x2048 → 256x256 |
| `static/ss1.png` | Needs compress | 876KB is too large |

---

## Scorecard

| Category | Score | Status |
|----------|-------|--------|
| Performance | 8/10 | Minor image optimizations remaining |
| SEO | 7/10 | Add JSON-LD schemas |
| Accessibility | 8/10 | Strong foundation |
| Code Quality | 7/10 | Clean up commented code |
| Content | 5/10 | Needs fresh blog posts |
| Design/UX | 8/10 | Professional, responsive |
| Features | 8/10 | ArXiv integration is excellent |

**Overall: 7.3/10** - Solid portfolio with modern features. Main gaps are content freshness and minor cleanup tasks.

---

## Resources

- [Gatsby Image Plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)
- [JSON-LD Schema Generator](https://technicalseo.com/tools/schema-markup-generator/)
- [Formspree](https://formspree.io) - Easy form backend
- [Squoosh](https://squoosh.app) - Image compression
