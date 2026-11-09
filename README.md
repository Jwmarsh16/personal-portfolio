# Jonathan Marshall | Personal Portfolio

A React portfolio for Jonathan Marshall, an Austin-based software developer. It presents featured projects, engineering case studies, professional experience, a downloadable resume, and contact options.

[Live portfolio](https://personal-portfolio-qj2c.onrender.com/)

## Run locally

Use Node.js 22 or a newer compatible release and npm. Run all application commands from `client/`:

```bash
cd client
npm ci
npm run dev
```

Vite prints the development URL, usually `http://localhost:5173`. This repository is a frontend application; the featured Flask applications are separate projects. A backend or database is not required to run the portfolio.

## Validate a change

```bash
cd client
npm run lint
npm run build
npm run preview
```

The build writes static files to `client/dist/`. Preview serves that build locally. The repository does not currently define an automated test suite. The verification workflow runs the existing lint and build scripts on pushes and pull requests.

For visual or navigation changes, also check:

- Desktop and narrow layouts, including 320px width and 200% browser zoom.
- Header menu opening, Escape closing, and keyboard focus.
- Home section links from a case study, direct route loads, and browser Back.
- About and Tools tabs using Arrow keys, Home, and End.
- Reduced-motion preferences, screenshot controls, and visible focus.
- Resume PDF download, project links, and contact fallback email.

## Structure

```text
client/
  public/             Static images and resume.pdf
  src/
    components/       Shared navigation and portfolio sections
    pages/            Homepage composition
    project-details/  Featured project case studies
    utils/            Shared browser helpers
    App.jsx           Routes and page shell
    Global.css        Shared theme and accessibility styles
```

The main routes are `/`, `/about`, `/resume`, `/blogs`, and `/project/<project-slug>`. Homepage section URLs such as `/#projects` and `/#contact` work from other routes. React Router manages navigation; the shared scroll helper accounts for the sticky header and reduced-motion preferences.

## Content and resume

Keep project descriptions tied to the showcased code. State personal contributions and technical decisions without adding unverified usage or performance claims. The web resume reads `client/src/data/resume.json`; the downloadable copy is `client/public/resume.pdf`. Keep both aligned with the source Google Doc when the resume changes. Featured project cards and case studies share `client/src/data/projects.js` to keep descriptions and links consistent.

Images in `client/public/images/` are referenced from `/images/...`. Prefer appropriately sized WebP assets for photos and screenshots. Keep `node_modules/` and `dist/` out of Git; install dependencies from `client/package-lock.json` using `npm ci`.

## Contact configuration

The contact form uses EmailJS in the browser and includes a direct email fallback. Its optional build-time settings are:

- `VITE_EMAILJS_PUBLIC_KEY`
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`

All `VITE_` variables are visible to visitors in the built JavaScript. These settings identify the browser integration; never put private API keys or server credentials in them. EmailJS template configuration, allowed origins, and delivery must be checked in the service account. Sending a real contact message is a separate manual verification step.

## Render deployment

For a Render Static Site, use this configuration:

| Setting | Value |
| --- | --- |
| Root directory | `client` |
| Build command | `npm ci && npm run build` |
| Publish directory | `dist` |
| SPA rewrite | `/*` to `/index.html` using Rewrite |

The rewrite lets direct requests to routes such as `/resume` reach React Router. Confirm the existing service settings in Render before changing deployment configuration. A connected branch push can trigger auto-deployment if enabled in that service; the verification workflow does not deploy the site.
