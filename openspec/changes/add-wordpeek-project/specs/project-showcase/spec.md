# Spec Delta

## Purpose

Let portfolio visitors preview showcased projects through screenshots and follow links to learn more or access their source code.

## ADDED Requirements

### Requirement: WordPeek project entry
The Projects page SHALL display a project named WordPeek in the same visual style as the existing entries, with a GitHub link to `https://github.com/karthick-manoharan/WordPeek` that opens in a new tab using the site's external-link conventions.

#### Scenario: Discover and open WordPeek
- **WHEN** a visitor opens the Projects page
- **THEN** WordPeek is listed alongside the existing projects
- **AND** its GitHub link targets the supplied repository in a new tab

### Requirement: WordPeek screenshot slider
The WordPeek entry SHALL display both supplied screenshots, starting with Double Click Modal and followed by Full Defintion Modal, using the same slider presentation as the existing projects. Each screenshot SHALL have descriptive alternative text.

#### Scenario: Initial screenshot
- **WHEN** the Projects page loads
- **THEN** the first WordPeek screenshot is visible with the first of two indicators active
- **AND** the previous control is disabled and the next control is enabled

#### Scenario: Navigate screenshots
- **WHEN** a visitor selects Next or the second screenshot indicator
- **THEN** the second WordPeek screenshot is displayed and its indicator is active
- **AND** the next control is disabled and the previous control is enabled
- **WHEN** the visitor selects Previous or the first screenshot indicator
- **THEN** the first screenshot and initial control states are restored

#### Scenario: Independent responsive slider
- **WHEN** a visitor uses the WordPeek slider on a desktop or narrow mobile viewport
- **THEN** the screenshots fit the project layout without horizontal page overflow
- **AND** navigating WordPeek does not change another project's selected screenshot
