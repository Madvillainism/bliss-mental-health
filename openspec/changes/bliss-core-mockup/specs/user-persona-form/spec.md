## ADDED Requirements

### Requirement: Daily mood selector
The system SHALL display a grid of 5 mood states (Great, Good, Okay, Low, Critical) represented by emoji-like illustrations. The user SHALL tap one mood per day. Selection SHALL be persisted to LocalStorage with today's date as key.

#### Scenario: Mood grid renders
- **WHEN** the user navigates to `/dashboard`
- **THEN** a horizontal or 2-row grid of 5 mood cards SHALL render
- **THEN** each card SHALL display a large emoji illustration and a text label
- **THEN** the cards SHALL have a subtle float animation on load

#### Scenario: Mood selection
- **WHEN** a user taps a mood card
- **THEN** the selected card SHALL scale up slightly (`scale-105`) and show a BLISS accent border
- **THEN** all other cards SHALL dim to 50% opacity
- **THEN** `localStorage.setItem('bliss_mood_YYYY-MM-DD', moodValue)` SHALL be called

#### Scenario: Today's already-selected mood
- **WHEN** the user returns to `/dashboard` on the same day
- **THEN** the previously selected mood SHALL be highlighted
- **THEN** a "Mood logged for today" confirmation message SHALL appear

#### Scenario: Critical mood triggers notification
- **WHEN** the user selects "Critical" as their mood
- **THEN** MockNotificationService SHALL immediately emit a notification event
- **THEN** a floating banner SHALL appear within 300ms

### Requirement: Persona profile form
The system SHALL provide a profile form where the user enters their name, age range, and wellness goals (multi-select). The form SHALL use model() Signals and persist to LocalStorage.

#### Scenario: Profile form renders
- **WHEN** the user navigates to `/profile`
- **THEN** the form SHALL display fields: name, age range (select: 18-24, 25-34, 35-44, 45+), and goals (checkboxes: Stress Management, Better Sleep, Mindfulness, Anxiety Relief, Self Care)
- **THEN** previously saved values SHALL be populated from LocalStorage

#### Scenario: Profile saves
- **WHEN** the user clicks "Save Profile"
- **THEN** all field values SHALL be written to LocalStorage under key `bliss_user_profile`
- **THEN** a success toast SHALL appear for 2 seconds

### Requirement: Floating notification banner system
The system SHALL display animated floating notification banners at the top of the screen. Each banner SHALL auto-dismiss after 5 seconds. Banners SHALL simulate email notifications triggered by critical mood events or daily reminders.

#### Scenario: Notification banner appears
- **WHEN** MockNotificationService emits a notification
- **THEN** a banner SHALL slide in from the right with `banner-in` animation
- **THEN** the banner SHALL display an envelope icon, a title ("Support Team"), and a short message

#### Scenario: Banner auto-dismisses
- **WHEN** 5 seconds have elapsed since banner appeared
- **THEN** the banner SHALL animate out with `banner-out` animation
- **THEN** the banner SHALL be removed from the DOM

#### Scenario: Multiple notifications stack
- **WHEN** multiple notifications are emitted within 5 seconds
- **THEN** each banner SHALL stack vertically with a 4px gap
- **THEN** the newest banner SHALL appear at the top

#### Scenario: Manual dismiss
- **WHEN** the user clicks the close button (×) on a banner
- **THEN** that specific banner SHALL immediately animate out and be removed
