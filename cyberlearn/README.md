# CyberLearn Lab

An independent educational platform by Dr Kasun Moolikagedara, focused on cybersecurity, cryptography, AI, blockchain and digital forensics.

## Requirements

- Node.js 20.3.0 or newer
- npm
- A GitHub account

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Astro (normally http://localhost:4321).

## Build and preview

```bash
npm run build
npm run preview
```

## Publishing

This site lives inside the portfolio repository and is published at
https://ktvshwajith.github.io/portfolio-KasunM/learn/

The portfolio's GitHub Actions workflow builds it on every push to `main` and places the output under `/learn/`. If the path ever changes, update `base` in `astro.config.mjs` and `siteUrl` in `src/data/site.js`.

## Project structure

```text
src/
  components/       Shared header, footer and tutorial cards
  data/             Categories and tutorial content
  layouts/          Main page layout
  pages/            Homepage, category pages, tutorial pages and labs
  styles/           Global styling
public/
  favicon.svg
```

## Editing content

- Add or edit learning categories in `src/data/categories.js`.
- Add tutorials in `src/data/tutorials.js` (list related lab slugs in `labs`).
- Register labs in `src/data/labs.js` and add a page in `src/pages/labs/<slug>.astro` using `LabLayout`.
- Add the category slug to a tutorial's `category` field.
- Tutorials are generated as individual static pages automatically.

## Current release

This is a starter release. It includes original introductory learning material and one real browser-based SHA-256 demonstration. It does not yet include user accounts, saved progress, a backend, or hosted AI inference.

## Content and safety

The material is original educational content. Practical security exercises should be performed only in systems you own or are explicitly authorised to test. Do not put passwords, API keys, private datasets or confidential information in this public repository.
