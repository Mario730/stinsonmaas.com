# Site Improvement Dashboard

> Analysis of stinsonmaas.com - Generated December 2025

---

## Quick Stats

| Category | Status | Priority Items |
|----------|--------|----------------|
| Performance | Needs Work | 14MB image, no lazy loading |
| SEO | Critical | Missing meta tags, sitemap, robots.txt |
| Accessibility | Needs Work | No ARIA labels, missing landmarks |
| Code Quality | Moderate | 12+ outdated packages |
| Content | Limited | Only 2 blog posts, minimal About |
| Features | Incomplete | No resume, projects, or contact form |

---

## 1. Performance

### Critical Issues

| Issue | Impact | Fix |
|-------|--------|-----|
| `seniorpic.jpg` is 14MB | Slow page load | Compress to <500KB, use WebP |
| Plain `<img>` tags | No optimization | Use Gatsby's `StaticImage` component |
| No lazy loading | Wasted bandwidth | Gatsby Image handles this automatically |
| Missing manifest | Not installable as PWA | Add `gatsby-plugin-manifest` |
| Font loading | Flash of invisible text | Add `font-display: swap` |

### Recommendations

```bash
# Install missing plugins
npm install gatsby-plugin-manifest gatsby-plugin-offline
```

Replace in components:
```jsx
// Before
<img src="../static/seniorpic.jpg" alt="Senior pic" />

// After
import { StaticImage } from "gatsby-plugin-image"
<StaticImage src="../static/seniorpic.jpg" alt="Mario Stinson-Maas portrait" />
```

---

## 2. SEO

### Current State: Minimal

The SEO component (`src/components/seo.js`) only renders a `<title>` tag.

### Missing Elements

- [ ] Meta description
- [ ] Open Graph tags (og:title, og:description, og:image)
- [ ] Twitter Card tags
- [ ] Canonical URLs
- [ ] robots.txt
- [ ] XML sitemap
- [ ] JSON-LD structured data

### Recommendations

```bash
npm install gatsby-plugin-sitemap gatsby-plugin-robots-txt
```

Update `gatsby-config.js`:
```javascript
siteMetadata: {
  title: `Mario Stinson-Maas`,
  description: `Portfolio of Mario Stinson-Maas - CS & Math student at Oberlin College`,
  siteUrl: `https://www.stinsonmaas.com`,
  author: `Mario Stinson-Maas`,
  image: `/seniorpic.jpg`
}
```

---

## 3. Accessibility

### Issues Found

| Issue | Location | Fix |
|-------|----------|-----|
| No `aria-current="page"` | Navigation | Add to active link |
| No skip-to-content link | Layout | Add at top of page |
| Minimal alt text | Images | Use descriptive text |
| Empty footer | Layout | Remove or add content |
| No focus states | CSS | Add `:focus-visible` styles |
| Missing landmarks | All pages | Use `<nav>`, `<main>`, `<article>` |

### Quick Fixes

```jsx
// Navigation - add aria-current
<Link to="/about" aria-current={isActive ? "page" : undefined}>About</Link>

// Skip link - add to Layout
<a href="#main-content" className="skip-link">Skip to content</a>
<main id="main-content">...</main>
```

---

## 4. Code Quality

### Outdated Dependencies

| Package | Current | Latest |
|---------|---------|--------|
| gatsby | 5.3.2 | 5.15.0 |
| gatsby-plugin-mdx | 5.11.0 | 5.15.0 |
| gatsby-plugin-sharp | 5.4.0 | 5.15.0 |
| gatsby-plugin-image | 3.4.0 | 3.15.0 |
| react | 18.2.0 | 18.3.1 |
| react-dom | 18.2.0 | 18.3.1 |

### Other Issues

- [ ] No TypeScript (all JavaScript)
- [ ] Inconsistent styling (CSS modules + inline styles)
- [ ] Hardcoded contact links
- [ ] Unused commented code in Layout.js

### Recommendation

```bash
npm update
npm audit fix
```

---

## 5. Content

### Current State

| Content | Status |
|---------|--------|
| Blog posts | 2 posts (June 2023) |
| About page | ~1 sentence |
| Resume | Commented out |
| Projects | None |

### Content Needed

- [ ] Expanded About page (3-5 paragraphs)
  - Education details
  - Skills & expertise
  - Career interests
  - Resume download
- [ ] Projects showcase (3-5 featured projects)
- [ ] Resume/CV page
- [ ] More blog posts (establish posting schedule)
- [ ] Blog post excerpts on listing page

---

## 6. Design/UX

### Responsiveness Issues

| Component | Issue |
|-----------|-------|
| Homepage grid | Fixed `2fr 1fr` - breaks on mobile |
| Contact grid | Fixed 2-column - breaks on mobile |
| Navigation | No hamburger menu for mobile |

### Missing UX Features

- [ ] Breadcrumbs on blog posts
- [ ] "Back to Posts" button
- [ ] Loading states/animations
- [ ] Focus states for keyboard nav

### Fix Example

```css
/* Add to layout.module.css */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 7. Missing Features

### Priority Matrix

| Priority | Feature | Effort |
|----------|---------|--------|
| P0 | Resume page | Medium |
| P0 | Projects page | Medium |
| P0 | Contact form | Low |
| P1 | Blog reading time | Low |
| P1 | Categories/tags | Medium |
| P2 | Dark mode toggle | Medium |
| P2 | Search | High |
| P3 | Comments | High |
| P3 | Newsletter signup | Medium |
| P3 | Social share buttons | Low |

---

## 8. Security

### Action Items

- [ ] Run `npm audit` and fix vulnerabilities
- [ ] Update all dependencies to latest patch versions
- [ ] Add Content Security Policy headers
- [ ] Configure security headers (X-Frame-Options, etc.)

```bash
# Check for vulnerabilities
npm audit

# Auto-fix what's possible
npm audit fix
```

---

## Implementation Roadmap

### Phase 1: Critical (Do First)
1. Update all Gatsby plugins to v5.15.0
2. Replace `<img>` with `StaticImage`
3. Compress seniorpic.jpg to <500KB
4. Add robots.txt and sitemap plugins
5. Expand SEO component with meta tags
6. Add mobile responsive media queries

### Phase 2: High Priority (Do Soon)
1. Expand About page content
2. Create Resume page
3. Create Projects page
4. Add contact form (Formspree/Netlify Forms)
5. Add accessibility improvements

### Phase 3: Polish
1. Add blog reading time
2. Implement categories/tags
3. Add dark mode toggle
4. TypeScript migration

### Phase 4: Nice-to-Have
1. Analytics integration
2. Social share buttons
3. Newsletter signup
4. Comments system

---

## File-by-File Issues

| File | Issues | Priority |
|------|--------|----------|
| `gatsby-config.js` | Missing SEO plugins, incomplete metadata | High |
| `src/components/seo.js` | Only renders title, missing meta tags | High |
| `src/components/layout.js` | No semantic HTML, missing a11y | High |
| `src/pages/index.js` | Non-responsive grid, unoptimized image | High |
| `src/pages/about.js` | Content too minimal | High |
| `src/pages/contact.js` | Non-responsive, hardcoded links | Medium |
| `src/components/layout.module.css` | No mobile queries | Medium |
| `package.json` | Outdated dependencies | High |

---

## Resources

- [Gatsby Image Plugin Docs](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)
- [Gatsby SEO Guide](https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/)
- [Web Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Lighthouse Performance Auditing](https://developer.chrome.com/docs/lighthouse/)
