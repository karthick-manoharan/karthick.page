# Proposal

## Why

WordPeek is missing from the portfolio Projects page despite its screenshots already being available. Adding it will let visitors preview the project and reach its GitHub repository.

## What Changes

- Add a WordPeek entry to the Projects page with the supplied GitHub link.
- Display both images from `images/projects/WordPeek/` using the existing project carousel and controls.
- Match the existing project typography, spacing, lazy image loading, and external-link conventions.

## Capabilities

### New Capabilities

- `project-showcase`: Portfolio project entries with screenshot navigation and external project links, initially specifying the WordPeek addition.

### Modified Capabilities

None; no existing capability specs are present.

## Impact

The implementation targets `projects/index.html` and references the two existing WordPeek assets. It reuses `js/carousel.js` and `css/design-system.css` without adding dependencies or changing existing projects.
