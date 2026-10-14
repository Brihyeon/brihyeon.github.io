# Personal Research Website

A responsive, dark minimalist academic homepage for Sanghyeon Nam, based on the supplied visual reference. No build tools or dependencies are required.

## Open it

Double-click `index.html` to open the site in a browser. The site is fully static.

## Customize it

1. Open `site-data.js` with any text editor.
2. Edit `name`, `highlightName`, `remainingName`, introductory paragraphs, research interests, news and publications.
3. Put your own portrait in `assets/profile.jpg` and change `photo` to `"assets/profile.jpg"`.
4. Fill in your email, Google Scholar, GitHub, LinkedIn, and CV paths in the `links` section. Empty links are hidden.
5. Update a manuscript's publication status, authors, conference/journal, and links *only after they are confirmed*.

The current portrait is a placeholder. The publication is labeled *Research manuscript* rather than an accepted or published conference paper. Dates and news text are draft website content to review before publishing.

## Deploy with GitHub Pages

1. Create a new public GitHub repository, e.g. `sanghyeon.github.io` (use your real username) or `personal-website`.
2. Upload the entire contents of this folder to the repository's root, including `assets`.
3. In GitHub repository **Settings → Pages**, set **Build and deployment** to **Deploy from a branch**, select the **main** branch and **/(root)**, then save.
4. GitHub will show the published URL when deployment completes. Repositories named `<username>.github.io` usually publish at `https://<username>.github.io/`; other repositories usually publish at `https://<username>.github.io/<repository>/`.

Use GitHub's custom domain setting if you have a domain.

## Design

- Responsive desktop / tablet / mobile layout
- Working navigation and light/dark theme switch with preference saved locally
- Data-driven news, publications, and profile links
- Keyboard focus indicators, skip link, and reduced-motion support
- No dependencies, analytics, or trackers

## Project files

- `index.html` — page structure
- `styles.css` — theme and responsive layout
- `site-data.js` — all editable biographical and research content
- `script.js` — content rendering and interactions
- `assets/` — photo placeholder and favicon

## Photo news posts

Edit the `news` entries in `site-data.js`. Each news item can specify a unique `id`, `title`, `excerpt`, `image`, `imageAlt`, `imageCaption`, `content` (array of paragraphs), and `gallery` (array of `{src, alt, caption}`). See `README_KO.md` for a complete example. The thumbnails and titles link to `index.html?post=YOUR-ID`; the article URL works on static hosting without a backend. Put photos in `assets/`. Both initial news articles and SVG illustrations are demonstration content, not actual reporting.
