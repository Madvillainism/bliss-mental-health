## ADDED Requirements

### Requirement: Mobile viewport shell
The system SHALL render all application views inside a centered mobile mockup wrapper (max-width: 430px, min-height: 100dvh) with a soft rounded border and glassmorphism background blur.

#### Scenario: Viewport renders centered on desktop
- **WHEN** the application loads on a viewport wider than 430px
- **THEN** the app shell SHALL be horizontally centered with equal auto-margins on left and right
- **THEN** the shell SHALL have a `rounded-3xl` border and `backdrop-blur` effect on the background overlay

#### Scenario: Viewport fills mobile screen
- **WHEN** the application loads on a viewport narrower than 430px
- **THEN** the shell SHALL expand to fill the full viewport width and height with no rounded corners

### Requirement: Tailwind BLISS design tokens
The system SHALL define a `@theme` block in `src/styles.css` with all BLISS pastel color tokens, font families, border radius values, and custom animation keyframes.

#### Scenario: BLISS tokens are available
- **WHEN** any component uses a class like `bg-bliss-lavender` or `text-bliss-dark`
- **THEN** the Tailwind compiler SHALL resolve it to the corresponding color value defined in `@theme`

#### Scenario: Gradient utilities work
- **WHEN** a component applies `bg-gradient-to-br from-bliss-soft-lavender via-bliss-soft-sky to-bliss-cream`
- **THEN** the browser SHALL render the pastel gradient background correctly

### Requirement: Bottom navigation bar
The system SHALL display a fixed bottom navigation bar with 4 tabs: Home, Mood, Community, Profile. Each tab SHALL show an icon (FontAwesome) and a label. The active tab SHALL be highlighted with the BLISS accent color.

#### Scenario: Navigation tabs render
- **WHEN** the app shell loads
- **THEN** a horizontal navigation bar SHALL appear at the bottom with 4 equally-spaced tabs
- **THEN** each tab SHALL contain a FontAwesome icon above a label text

#### Scenario: Active tab highlights
- **WHEN** a user taps a navigation tab
- **THEN** that tab's icon and label SHALL change to `text-bliss-mauve`
- **THEN** all other tabs SHALL remain `text-bliss-muted`
- **THEN** a small active indicator dot SHALL appear above the icon

#### Scenario: Tab changes route
- **WHEN** a user taps a navigation tab
- **THEN** the Angular Router SHALL navigate to the corresponding route
- **THEN** the Signal holding the active tab index SHALL update

### Requirement: App header
The system SHALL display a top header bar with the BLISS logo/brand text and a notification bell icon.

#### Scenario: Header renders
- **WHEN** the app shell loads
- **THEN** a top header SHALL appear with "BLISS" displayed in the `font-bliss-display` font family
- **THEN** a FontAwesome bell icon SHALL render on the right side
