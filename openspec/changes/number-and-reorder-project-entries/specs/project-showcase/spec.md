# Spec Delta

## Purpose

Help portfolio visitors scan projects through numbered titles, concise descriptions, screenshot previews, and external project links.

## ADDED Requirements

### Requirement: Sequential project numbering
The Projects page SHALL show a sequential number starting at 1 beside each project title, following the displayed list order.

#### Scenario: Current project list
- **WHEN** a visitor opens the Projects page
- **THEN** understandthis.company is numbered 1, MindsEye.love is numbered 2, and WordPeek is numbered 3
- **AND** every entry has exactly one visible number

### Requirement: Consistent project content order
Every project entry SHALL present its title first, description immediately below the title, and screenshot slider or image after the description. External project links SHALL follow the preview.

#### Scenario: Read a project entry
- **WHEN** a visitor reads any project entry
- **THEN** visual order and document reading order are title, description, preview, and external links
- **AND** understandthis.company and MindsEye.love retain their existing description text

### Requirement: WordPeek short description
The WordPeek entry SHALL display the sentence “Look up word meanings as you read, without leaving the page.” using the same description styling as the other entries.

#### Scenario: Read WordPeek summary
- **WHEN** a visitor reaches WordPeek
- **THEN** the short description appears between its title and its two-image slider
- **AND** its displayed name remains WordPeek

### Requirement: Responsive project layout and retained navigation
The numbered project layout SHALL fit desktop and mobile viewports without horizontal page overflow. Existing screenshot order, slider navigation behavior, and project link destinations SHALL be preserved.

#### Scenario: Narrow viewport
- **WHEN** a visitor views the Projects page at a 390-pixel viewport width
- **THEN** numbers, titles, descriptions, and previews remain readable within the page width
- **AND** long titles wrap without overlapping their numbers

#### Scenario: Use a project preview
- **WHEN** a visitor navigates a project slider or follows a project link
- **THEN** navigation behaves as before the layout change
- **AND** other project sliders retain their independent selection
