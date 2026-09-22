# Bizcochos Para Tu Ocasión

Spanish-language static website for a home cake business in Bayamón, Puerto Rico. Hosted on GitHub Pages with the existing custom domain.

## Preview and edit

Run `node preview.mjs`, then open http://localhost:4173. No package installation needed.

`build.mjs` contains the shared header, footer, metadata and page content. After editing it, run `node build.mjs` to regenerate `index.html` and `galeria.html`. The generated HTML files must be committed; GitHub Pages does not need to run Node. Appearance is in `styles.css`; gallery behavior and sample photos are in `site.js`.

The gallery contains 50 numbered placeholder slots using repeated Unsplash photographs, plus duplicate tracks for continuous scrolling. These are explicitly labeled as references, not the bakery's work. Replace the samples and homepage photos with actual business photos before promoting the website. Fonts load from Google Fonts; sample photos load from Unsplash. The business phone number is 939-244-1650; WhatsApp links include Puerto Rico's +1 country code. Social logos are inline SVGs, with visible text labels.

## GitHub Pages: current diagnosis and publishing

On September 22, 2026, authenticated inspection confirmed that Pages was configured for a custom Actions workflow (`build_type: workflow`), but the repository had no deployment workflow. The domain reached GitHub over HTTPS but returned HTTP 404. We synchronized the remote rename of `Home.html` to `index.html`, pushed the website, and changed Pages to branch publishing (`build_type: legacy`) from `main` at `/`. The existing custom domain and enforced HTTPS were retained.

For future updates:

1. Run `node build.mjs` after content edits. Commit and push the finished website files, including both HTML pages, CSS, JS, favicon, `CNAME`, `.nojekyll`, `robots.txt`, and `sitemap.xml`.
2. Open https://github.com/Josuero667/BizcochosParaTuOcasion/settings/pages.
3. Under Build and deployment, choose **Deploy from a branch**, **main**, and **/(root)**, then Save.
4. Confirm the custom domain is `bizcochosparatuocasion.com` and Enforce HTTPS is enabled. Preserve the existing CNAME file.
5. Check Actions for a successful Pages deployment. GitHub says publishing can take up to 10 minutes after a push.
6. Verify both the homepage and `/galeria.html` on the live domain. DNS success alone does not confirm a published website.

Reference: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Search visibility

Included: descriptive Spanish titles and descriptions, canonical URLs, a sitemap, robots.txt, Bakery structured data with the supplied phone and locality, and direct social links. No invented street address, opening hours, reviews, or ratings are included.

After publishing, verify ownership in Google Search Console and submit https://bizcochosparatuocasion.com/sitemap.xml. Add the website link to the business's Instagram and Facebook pages. Use real cake photos with accurate descriptive captions. These foundations help search engines understand the site; they do not guarantee indexing or a first-place ranking.

Reference: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
