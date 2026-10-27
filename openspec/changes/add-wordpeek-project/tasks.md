# Tasks

The optional design artifact is deliberately omitted: this addition reuses the existing project markup, styles, and carousel without architectural changes. Minor assumptions: append WordPeek after the existing entries and show Double Click Modal before Full Defintion Modal. No project description is required by this change; avoid unsupported product claims.

## 1. WordPeek project entry

- [x] 1.1 Add a WordPeek project item to `projects/index.html`, reusing the existing heading and link styles. Link its title and GitHub link to `https://github.com/karthick-manoharan/WordPeek` with `target="_blank"` and `rel="noopener"`; verify the displayed name and both link destinations.
- [x] 1.2 Add the existing carousel markup with exactly two slides and two indicator buttons, referencing `/images/projects/WordPeek/Double%20Click%20Modal.png` and `/images/projects/WordPeek/Full%20Defintion%20Modal.jpg` in that order. Preserve filename spelling and casing, add descriptive alt text and lazy loading, and verify both assets load successfully.
- [x] 1.3 Verify WordPeek's arrows, indicators, active states, and disabled endpoint controls in the browser, using the existing `js/carousel.js` and shared CSS without changing their behavior.

## 2. Integration verification

- [x] 2.1 Run `npm run build` and confirm the Projects entry builds successfully with both WordPeek image references resolved.
- [x] 2.2 Inspect the Projects page at desktop and mobile widths; verify screenshot fit, absence of horizontal overflow, visual consistency, working GitHub links, and independent navigation of WordPeek and the existing project sliders.
