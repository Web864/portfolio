# Portfolio

This portfolio is deployed to GitHub Pages from the `main` branch by the workflow in `.github/workflows/deploy.yml`.

For the first deployment, open the repository's **Settings > Pages** and set **Source** to **GitHub Actions**. Future pushes to `main` deploy automatically.

To deploy manually, run:

```bash
npm run deploy
```

The site URL is `https://Web864.github.io/portfolio/`.

## Development

```bash
npm install
npm run dev
```

## Content and assets

Verified personal details, skill groups, projects, experience, and education are maintained in `src/data/portfolio.js`. Update this file to keep section content consistent. Each project has a unique ID; the four featured projects appear first, and the remaining practice projects expand in the same grid.

The project covers are typographic overviews, not product screenshots. Career Institute dashboard work is limited to frontend contributions, and internal code/screens are not published. Contnvra is labeled as in development; NutriAI and ProspectAI are described as application concepts.

The portrait is an optimized copy of the existing photograph. The supplied CV is served from `public/Rabia_Naz_AI_Frontend_Developer_CV.pdf` using Vite's base URL.

The contact form validates its fields and opens a `mailto:` draft in the visitor's email application for review and sending. It does not submit to a backend or display a delivery confirmation.

## Verification

```bash
npm run build
npx eslint src
npm exec vite preview
```

The existing GitHub Pages base path and deployment workflow are unchanged. Navigation uses local section anchors, with keyboard focus indicators, a skip link, mobile menu Escape support, and reduced-motion handling.
