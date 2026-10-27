# Design

## Context

`projects/index.html` contains three static list items and page-local styles. The first two descriptions currently follow their carousels; WordPeek has no description. Shared carousel styles already provide vertical margins, and `js/carousel.js` initializes each preview independently. See proposal.md for motivation.

There is no main capability spec yet. The completed `add-wordpeek-project` change declares `project-showcase`; this change reuses that path and adds distinct requirements so both sets can be synchronized without replacing WordPeek's existing requirements.

## Goals / Non-Goals

**Goals:** Keep numbering tied to document order and make visual and document reading order agree. Keep changes local to the Projects page.

**Non-Goals:** Redesigning the shared carousel, rewriting existing descriptions, changing project order or destinations, or renaming WordPeek. The user's “WordPeak” refers to the existing WordPeek entry.

## Decisions

- Use a semantic ordered list and decimal list markers styled at the title line. Provide enough marker space inside the page layout and allow long titles to wrap. Native numbering follows list changes automatically; manually inserting numbers into title text would require maintaining them separately. Display plain numbers as 1., 2., and 3., without zero padding.
- Move each existing description paragraph directly after its heading and before its carousel. Add WordPeek's proposed sentence in the same paragraph class. Actual DOM movement preserves reading order; CSS visual reordering alone would not.
- Keep external links after the slider and reuse the existing carousel markup, image references, and script. Adjust only page-local list spacing if needed; the shared carousel is also used on the Design page.
- Use the screenshot-grounded sentence “Look up word meanings as you read, without leaving the page.” It describes the dictionary popup shown in the supplied images without claiming additional product features.

## Risks / Trade-offs

- [Markers can extend outside a narrow content area] → Reserve marker space in the list and verify at desktop and 390-pixel mobile widths.
- [Moving descriptions can create uneven gaps] → Check the existing heading, paragraph, and carousel margins together before adjusting page-local spacing.
- [Two unarchived changes share a capability path] → Keep requirement names distinct and preserve both sets when synchronizing or archiving later.
