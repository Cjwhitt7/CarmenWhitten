# Engineering Portfolio — Starter Kit

A dark, royal-purple portfolio with a subtle retro-futuristic / early-2000s sci-fi feel. Built with plain HTML, CSS, and JavaScript: no framework, build step, or install required. Designed for GitHub Pages.

## Files

- `index.html` — main portfolio and all homepage sections
- `styles.css` — colors, layout, responsive styling, and visual effects
- `script.js` — mobile navigation, dropdown, and current footer year
- `resume.html` — editable resume page with Print / Save PDF
- Research-first section and expandable “Room for what's next” cards for future questions, works in progress, and new projects
- `assets/favicon.svg` — small site icon

## Put it on GitHub Pages

1. Sign in to GitHub and create a new repository. For a personal site, a repository named `YOUR-USERNAME.github.io` is a common option. A normal project repository works too.
2. Unzip this folder on your computer.
3. Upload the **contents** of this folder (not the ZIP itself) to the repository. `index.html` should be at the top level of the repository.
4. In the repository, open **Settings → Pages**.
5. Under the build/deployment section, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
6. Wait a minute or two and open the Pages URL GitHub provides.

## Quick customization checklist

Search for `[Your` and other square-bracket placeholders in `index.html` and `resume.html`. Replace them with your own name, focus, location, project descriptions, education, experience, and interests.

### Most common edits

- **Name / branding:** change `YOUR NAME`, `YN`, and `[Your Name]` in `index.html` and `resume.html`.
- **Email:** replace `your.email@example.com` with your real address.
- **Social links:** replace the placeholder GitHub and LinkedIn URLs.
- **Project cards:** search for `PROJECT 001` and edit each project title, description, skill tags, and link.
- **Future work:** search for `THE NEXT ITERATION` in `index.html`. Duplicate one `<article class="future-card">...</article>` block to add another research direction or work-in-progress card; change its status, title, description, and category.
- **Resume:** edit `resume.html`. Use its Print / Save PDF button and choose “Save as PDF” in your browser if you want a PDF copy.
- **Colors:** open `styles.css` and edit the variables at the very top under `:root`. `--bg` is the background, `--purple` is the accent, and `--text` is the main text color.
- **Fonts:** the design loads Manrope and DM Mono from Google Fonts. If you'd rather not use external fonts, remove the `@import` line at the top of `styles.css`; fallback fonts are included.
- **Remove or reorder sections:** each main section is a clearly marked `<section>` in `index.html`. You can remove a whole section or move it. If you remove a section, also remove its link from the navigation.
- **Make the layout simpler:** styles are grouped by component names (`.hero`, `.discipline-grid`, `.project-row`, `.about-section`, `.contact-section`). Search for the matching name in `styles.css`.

## Design notes

The visual direction uses deep violet, soft lavender, fine technical grid lines, orbital diagrams, and monospace instrument-style labels. It aims for retro-futuristic atmosphere without using copyrighted movie logos, imagery, or fonts. The illustration is CSS-built, so you can change it without needing image-editing software.

## Before publishing

- Replace all placeholders and example project links.
- Check every link on desktop and mobile.
- Only include projects, skills, and claims that accurately represent your work.
- Add your own project images by placing them in `assets/` and updating the relevant HTML.
- GitHub Pages hosts static files; this starter doesn't require a backend or server-side code.
