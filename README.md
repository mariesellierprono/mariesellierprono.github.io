# mariesellierprono.github.io

Personal academic website of Marie Sellier-Prono, built with the
[al-folio](https://github.com/alshedivat/al-folio) Jekyll theme and
deployed to GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).

## Editing

Content is in Markdown/YAML; every push to `main` rebuilds and redeploys.

- Site settings: `_config.yml`
- Home / bio: `_pages/about.md`
- CV: `_data/cv.yml` (page: `_pages/cv.md`)
- Publications: `_bibliography/papers.bib`
- Blog posts: `_posts/`
- Social links: `_data/socials.yml`
- Colors: `_sass/_variables.scss` and `_sass/_themes.scss`
- Profile photo: `assets/img/prof_pic.jpg`

## Local preview

Requires Ruby and Bundler:

```
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.
