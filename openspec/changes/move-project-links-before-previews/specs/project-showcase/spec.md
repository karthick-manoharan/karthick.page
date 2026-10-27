# Spec Delta

## Purpose

Help portfolio visitors read project summaries and access project links before browsing the corresponding screenshot previews.

## ADDED Requirements

### Requirement: Consistent project content order
Every project entry SHALL present its numbered title, short description, external project links, and screenshot slider or image in that order. Visual and document reading order SHALL agree.

#### Scenario: Read a project entry
- **WHEN** a visitor reads understandthis.company, MindsEye.love, or WordPeek
- **THEN** its links appear directly below its existing brief and above its preview
- **AND** titles, numbering, descriptions, and project list order are preserved

### Requirement: Retained project links and previews
Moving links SHALL preserve each link's label, destination, and external-link behavior, along with screenshot order and independent slider navigation.

#### Scenario: Project with multiple links
- **WHEN** a visitor reads MindsEye.love
- **THEN** both its website and GitHub links appear between its brief and slider in their existing relative order
- **AND** both retain their existing destinations and new-tab behavior

#### Scenario: Project with one link
- **WHEN** a visitor reads understandthis.company or WordPeek
- **THEN** its existing project link appears once below its brief and above its slider
- **AND** its destination and new-tab behavior are preserved

#### Scenario: Navigate project screenshots
- **WHEN** a visitor uses a project's slider arrows or indicators
- **THEN** the same screenshot navigation behavior is available
- **AND** other project sliders retain their own selection

### Requirement: Responsive link placement
Project links SHALL remain readable and separated from the brief and preview at desktop and mobile widths without horizontal page overflow.

#### Scenario: Narrow viewport
- **WHEN** the Projects page is viewed at a 390-pixel viewport width
- **THEN** links fit or wrap within the content area without overlapping the brief or preview
- **AND** the order remains title, brief, links, preview
