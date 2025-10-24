# Copilot / AI Agent Instructions for Papers-IA

Purpose
- Quickly orient an AI coding agent to the repository so contributions (edits, content, small features) are correct and low-risk.

Big picture (what this repo is)
- Static site built with Jekyll (GitHub Pages). Source markdown content lives in `en/` and `es/`. Layouts live in `_layouts/`. Built site is in `_site/` (generated, do not edit).
- Assets (CSS/JS/fonts/images) are under `assets/` and mirrored in `_site/assets/` after build.
- `_config.yml` controls site-wide settings (theme, featured_papers, UI text). `Gemfile` includes `github-pages` which indicates the project uses GitHub Pages / Jekyll-compatible build.

Key files and directories (use these as navigation anchors)
- `en/`, `es/` — primary content (markdown files). Edit these to change page content.
- `_layouts/default.html` — page shell and where site-wide HTML structure lives.
- `_config.yml` — site config (featured paper ids, UI text keys). `featured_papers[].id` values must match `id` attributes on the paper cards in `en/index.md` and `es/index.md`.
- `assets/css/main.css` and `assets/js/*` — styling and interactive scripts. Prefer editing these files rather than `_site/`.
- `_site/` — generated output; ignore in edits and PRs (do not commit unless explicitly asked).

Build / dev commands (how a developer runs this locally)
- Install Ruby/Gems and Bundler if needed.
- Install dependencies: `bundle install` (runs with the `Gemfile` that depends on `github-pages`).
- Serve locally: `bundle exec jekyll serve` — this builds the site into `_site/` and starts a local server. Verify pages at `http://127.0.0.1:4000/`.
- To produce a static build only: `bundle exec jekyll build` (output -> `_site/`).

Project-specific conventions and gotchas
- Language folders mirror each other but filenames may differ slightly (e.g., `next_token_prediction.md` vs `next-token-prediction.md`). When adding translations, prefer the hyphenated form consistent with links used in `en/index.md` and `_config.yml` ids.
- `featured_papers` in `_config.yml` relies on DOM `id` attributes in the content pages (e.g., `<div class="paper-item" id="next-token-prediction">`). If you change an id, update `_config.yml` accordingly.
- Do not edit files under `_site/` — they are ephemeral.

Examples of common tasks (copyable intent)
- Update an English article summary: edit `en/<file>.md`, run `bundle exec jekyll serve`, open `http://127.0.0.1:4000/en/` and verify the article and featured papers listing.
- Add a new featured paper:
  1. Add a `paper-item` block in `en/index.md` and `es/index.md` with a stable `id` attribute.
  2. Add an entry in `_config.yml` under `featured_papers` with the same `id`.
  3. Run `bundle exec jekyll build` and check the HTML.

Integration points / external dependencies
- GitHub Pages (via `github-pages` gem) — deploying is typically handled by pushing to the default branch; the repository uses Jekyll-compatible configuration.
- No CI/tests detected in the repo. Validate changes locally by building and visually inspecting `_site/`.

When editing, prefer small, focused PRs
- Content fixes (typos, translations) and small CSS tweaks are safe. Large refactors to layout or navigation should include before/after screenshots and a local build log.

If anything is ambiguous or you need to run commands I can't detect from files, ask the maintainers or open an issue and reference `#ci` or `#build` context.

-- End of instructions. Please review and tell me if you want a different tone, additional dev commands (e.g., Windows-specific Ruby notes), or extra examples.