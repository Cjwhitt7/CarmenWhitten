#Engineering Portfolio 

#Site structure

- `index.html` — home / quick introduction and navigation
- `research.html` — collaborative team research, self-directed investigations, and future research interests
- `projects.html` — robotics simulation, software, hardware, and aerospace technical projects
- `about.html` — background, personal interests, and contact links
- `resume.html` — editable resume page with Print / Save PDF
- `styles.css` — colors, layout, responsive styling, and visual effects
- `script.js` — mobile navigation and footer year
- `assets/` — favicon and a place for your own images, diagrams, plots, and project screenshots



Different kinds of work all belong in a portfolio; label them clearly so readers understand the context:

- **Collaborative research:** work being done with your team. Describe the overall question, then state your personal role and contributions. Check with the team before sharing confidential details.
- **Self-directed investigation:** independent reading, literature exploration, calculations, technical notes, or deep personal study. You can show your process and conclusions without presenting it as formal lab research.
- **Simulation work:** explain the system you modeled, what you changed or tested, the tools used, what the results showed, and the limitations. Simulation is meaningful technical work; just distinguish it from physical hardware testing.
- **Projects and builds:** software, hardware, prototypes, integrations, or class/personal projects. Be specific about what you personally did.
- **Interests / future directions:** topics you want to explore. These are allowed to be interests, not claims of experience.

## Editing the pages

### Most common edits

- **Name / branding:** search for `YOUR NAME`, `YN`, and `[Your Name]` across the HTML files.
- **Email and social links:** replace `your.email@example.com`, `https://github.com/`, and `https://www.linkedin.com/` with your real contact details. Remove links you don't use.
- **Research page:** open `research.html`. Each `.notebook-entry` is an open, editorial-style entry. Replace the bracketed prompts and delete examples that don't fit. Duplicate an entire `<article class="notebook-entry">...</article>` block to add another investigation.
- **Projects page:** open `projects.html`. Each project entry asks for a problem or goal, what you personally did, tools, and what you learned. Duplicate a `.notebook-entry` block to add another project. Change its `id` if you want to link directly to it.
- **About page:** edit `about.html` to sound like you. Personal details are optional; keep only what you want to share publicly.
- **Resume:** edit `resume.html`. Use Print / Save PDF and choose “Save as PDF” in your browser.
- **Colors and layout:** edit the variables near the top of `styles.css`. Search for `.notebook-entry` to adjust the open research/project layout, or `.page-intro` for page headings.
- **Images and diagrams:** place image files in `assets/`, then add an image element to the relevant HTML page. For example: `<img src="assets/robot-simulation.png" alt="Robot arm simulation in a virtual environment">`. Use an accurate alt description.
- **Reorder content:** move a whole `<article class="notebook-entry">...</article>` block to change the order. Remove the matching navigation link only if you remove a whole page.

## Beginner workflow

1. Make a backup copy before experimenting.
2. Edit one page or one visual detail at a time.
3. Open `index.html` in your browser to preview it. Navigation between local pages works when the files stay together in one folder.
4. When ready, upload the updated files to GitHub and commit the changes.

## Before publishing

- Replace placeholders and example links.
- Check every link on desktop and mobile.
- Only include claims and skills that accurately represent your work.
- Do not share private team research, unpublished data, or sensitive project details without permission.

