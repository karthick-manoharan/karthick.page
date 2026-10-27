# Proposal

## Why

Project links currently appear after their screenshot sliders. Placing links directly below each brief will group the project's text and actions before its visual preview.

## What Changes

- Display every project as numbered title, existing short description, existing external links, then screenshot slider or image.
- Keep all existing link labels, destinations, new-tab behavior, descriptions, numbering, and screenshots.
- Preserve slider controls and independent navigation.

## Capabilities

### New Capabilities

- `project-showcase`: Establish the revised content order using the capability path already declared by the completed, unarchived project changes. No main specs exist yet.

### Modified Capabilities

None in the main inventory. This change explicitly supersedes the `Consistent project content order` requirement in `number-and-reorder-project-entries`, which places links after previews. Synchronization must retain this newer order.

## Impact

Implementation targets `projects/index.html` and its page-local styles if spacing requires adjustment. Existing shared carousel code and assets are reused; no new dependencies are needed.
