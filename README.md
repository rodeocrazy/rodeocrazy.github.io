# Lucaraponi.com

Personal portfolio and project showcase. Built with Jekyll and hosted on GitHub Pages.

**[Live site →](https://lucaraponi.com)**

---

## Stack

- **Jekyll** — static site generator
- **al-folio** — academic portfolio theme
- **GitHub Pages** — hosting and deployment via GitHub Actions
- **Ruby** — gem-based dependency management
- **Prettier** — code formatting for Liquid templates

## Running locally

**With Ruby** (requires Ruby 3.3+ and Bundler):

```bash
bundle install
bundle exec jekyll serve
```

**With Docker** (no Ruby install needed):

```bash
docker-compose up
```

Open `http://localhost:8080`.

If you use rbenv or rvm, a `.ruby-version` file is gitignored — create one locally with `3.3` to pin the version.

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that:

1. Builds the site with `jekyll build`
2. Purges unused CSS with PurgeCSS
3. Deploys to GitHub Pages via `JamesIves/github-pages-deploy-action`

No manual steps needed.

## Structure

```
_pages/       # Static pages (about, CV, projects, blog)
_projects/    # Project entries
_posts/       # Blog posts
_data/        # CV, repositories, co-authors
assets/       # Images, JS, CSS, PDFs
_layouts/     # Page templates
_includes/    # Reusable components
```

## License

Site content © Luca Raponi. Theme based on [al-folio](https://github.com/alshedivat/al-folio) (MIT).
