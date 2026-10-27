# Tasks

The optional design document is omitted because this change only moves existing markup and reuses existing styles and behavior.

## 1. Move project links

- [x] 1.1 In `projects/index.html`, move each project's existing external links directly after its description and before its carousel, preserving link labels, destinations, attributes, and relative order. Verify document order is title, description, links, preview for all three entries, with no duplicated links or stray closing anchors in the moved markup.
- [x] 1.2 Inspect the Projects page at desktop and 390-pixel mobile widths; verify readable links below each brief, clear separation before previews, retained numbering, and no overlap or horizontal overflow. Adjust only page-local spacing if needed.

## 2. Integration verification

- [x] 2.1 Run `npm run build` and verify the Projects page and image references build successfully.
- [x] 2.2 Verify all project link destinations and external-link attributes are unchanged, and exercise slider arrows and indicators to confirm independent navigation and unchanged screenshot order.

## Workflow follow-up

- When synchronizing specs, reconcile `Consistent project content order` from the completed `number-and-reorder-project-entries` change with this newer requirement: title, brief, links, preview. Preserve unrelated requirements from earlier changes.
