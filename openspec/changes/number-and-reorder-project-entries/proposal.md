# Proposal

## Why

Project descriptions currently appear after the screenshots, and WordPeek has no description. Numbering the entries and presenting context before screenshots will make the list easier to scan.

## What Changes

- Number the three project entries sequentially, starting at 1, beside their titles.
- Present every entry as title, short description, then screenshot slider, with external links following the slider.
- Preserve the existing descriptions for understandthis.company and MindsEye.love.
- Add this short description for WordPeek: “Look up word meanings as you read, without leaving the page.”
- Preserve the current project order, screenshots, destinations, and carousel behavior.

## Capabilities

### New Capabilities

- `project-showcase`: Define sequential numbering and consistent title, description, and preview ordering for portfolio entries. Reuses the capability path declared by the completed, unarchived `add-wordpeek-project` change; no main spec exists yet.

### Modified Capabilities

None in the main spec inventory. These requirements supplement the completed WordPeek change and do not replace its screenshot or link requirements.

## Impact

Implementation is limited to `projects/index.html`, including its page-local styles. Existing carousel JavaScript and shared styles can be reused. No dependencies, assets, or project destinations need to change.
